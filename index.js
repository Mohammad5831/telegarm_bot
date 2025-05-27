require('dotenv').config();
const { Telegraf } = require('telegraf');
const ytdl = require('ytdl-core');
const BOT_TOKEN = '7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ'

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('سلام! لینک ویدیوی یوتیوب رو بفرست تا لینک مستقیم دانلود رو برات بفرستم.');
});

bot.on('text', async (ctx) => {
  const url = ctx.message.text;

  if (!ytdl.validateURL(url)) {
    return ctx.reply('لطفاً یک لینک معتبر یوتیوب ارسال کن.');
  }

  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: '18' }); // MP4 با کیفیت معمولی

    if (!format || !format.url) {
      return ctx.reply('متأسفم، نتونستم لینک مستقیم پیدا کنم.');
    }

    ctx.reply(`لینک مستقیم دانلود:\n${format.url}`);
  } catch (err) {
    console.error(err);
    ctx.reply('خطا در پردازش لینک. لطفاً دوباره تلاش کن.');
  }
});

bot.launch();
