const { Telegraf } = require('telegraf');

// توکن رباتت رو اینجا بذار
const bot = new Telegraf('7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ');

// وقتی کاربر پیام می‌فرسته
bot.on('text', (ctx) => {
  ctx.reply(`شما گفتید: ${ctx.message.text}`);
});

// شروع ربات
bot.launch();
console.log('ربات روشنه...');