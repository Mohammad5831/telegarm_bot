const { Telegraf } = require('telegraf');
const bot = new Telegraf('YOUR_BOT_TOKEN');

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
