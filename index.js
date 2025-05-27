
const { Telegraf } = require('telegraf');
const BOT_TOKEN = '7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ'

const axios = require('axios');
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('سلام! لینک ویدیوی یوتیوب رو بفرست تا لینک مستقیم دانلود رو برات بفرستم.');
});

bot.on('text', async (ctx) => {
  const url = ctx.message.text;

  if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
    return ctx.reply('لطفاً یک لینک معتبر یوتیوب ارسال کن.');
  }

  try {
    const response = await axios.get(`https://you-link-api.vercel.app/?url=${encodeURIComponent(url)}`);
    const formats = response.data?.formats;

    if (formats && formats.length > 0) {
      const downloadLink = formats[0].url;
      ctx.reply(`لینک دانلود:\n${downloadLink}`);
    } else {
      ctx.reply('نتونستم لینک دانلود رو پیدا کنم.');
    }
  } catch (error) {
    console.error(error);
    ctx.reply('خطا در پردازش لینک.');
  }
});

bot.launch();
