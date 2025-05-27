
const { Telegraf } = require('telegraf');
const BOT_TOKEN = '7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ'

const axios = require('axios');
const bot = new Telegraf(BOT_TOKEN, { polling: true} );


// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     // bot.sendMessage(chatId, `سلام ${msg.from.first_name}! این یک پاسخ آزمایشی است.`);
//   bot.sendMessage(`test: ${msg} `)
// });
bot.on('text', (ctx) => {
    ctx.reply(`سلام ${ctx.message.from.first_name}! این یک پاسخ آزمایشی است.`);
});

console.log("ربات فعال شد!");

bot.launch();
