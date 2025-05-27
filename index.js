
const { Telegraf } = require('telegraf');
const ytdl = require('ytdl-core');
const BOT_TOKEN = '7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ'

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('سلام! لینک یوتیوب رو بفرست تا لینک دانلود مستقیم بدم.');
});

bot.on('text', async (ctx) => {
  const url = ctx.message.text;

  if (!ytdl.validateURL(url)) {
    return ctx.reply('لطفاً یک لینک معتبر یوتیوب بفرست.');
  }

  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: '18' }); // MP4 360p معمولاً
    ctx.reply(`لینک دانلود مستقیم:\n${format.url}`);
  } catch (err) {
    console.error(err);
    ctx.reply('خطا در دریافت لینک. دوباره تلاش کن.');
  }
});

bot.launch();
