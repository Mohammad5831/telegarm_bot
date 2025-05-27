const { Telegraf } = require('telegraf');
const bot = new Telegraf('7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ');

const adminId = '5241360039'; // آیدی عددی خودت

bot.start((ctx) => {
  const info = ctx.from;
  const message = `
  New user started the bot:
  Name: ${info.first_name} ${info.last_name || ''}
  Username: @${info.username || 'N/A'}
  Language: ${info.language_code}
  ID: ${info.id}
  `;
  ctx.reply('سلام! خوش اومدی.');
  bot.telegram.sendMessage(adminId, message);
});

bot.launch();
