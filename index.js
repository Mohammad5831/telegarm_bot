
// const { Telegraf } = require('telegraf');
// const BOT_TOKEN = '7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ'

// const axios = require('axios');
// const bot = new Telegraf(BOT_TOKEN, { polling: true} );
// const adminChatId = '5241360039',

// // bot.on('message', (msg) => {
// //     const chatId = msg.chat.id;
// //     // bot.sendMessage(chatId, `سلام ${msg.from.first_name}! این یک پاسخ آزمایشی است.`);
// //   bot.sendMessage(`test: ${msg} `)
// // });
// bot.on('message', (ctx) => {
//     const message = ctx.message.text;
//     const user = ctx.from;

//     await ctx.telegram.sendMessage(
//         adminChatId,
//         `new message from ${user} \n\n ${message}`
//     );
//     ctx.reply(`hello ${ctx.message.from.first_name} your message has been received.`);
//     // ctx.reply(`اطلاعات : ${ctx.from}`);
//     console.log(ctx.message.from);
//     console.log(ctx.message.chat);
//     console.log(ctx.message.date);
    
// });

// console.log("ربات فعال شد!");

// bot.launch();


const { Telegraf } = require('telegraf');
const axios = require('axios');

const BOT_TOKEN = '7771771592:AAE7UPzjuTfJnMxD1gBOoq_87QxSNa0RYmQ';
const bot = new Telegraf(BOT_TOKEN, { polling: true });
const adminChatId = '5241360039'; // اصلاح علامت `,` به `;`

bot.on('message', async (ctx) => {
    // بررسی اینکه پیام متنی است
    if (ctx.message.text) {
        const message = ctx.message.text;
        const user = ctx.from;

        // ارسال پیام به چت ادمین با فرمت JSON
        await ctx.telegram.sendMessage(
            adminChatId,
            `📩 **پیام جدید از کاربر:**\n${JSON.stringify(user, null, 2)}\n\n📜 **متن پیام:** ${message}`
        );

        // ارسال پاسخ به کاربر
        ctx.reply(`سلام ${ctx.from.first_name}، پیام شما دریافت شد!`);
    } else {
        ctx.reply(`📩 پیامی دریافت شد اما متنی ندارد.`);
    }

    // لاگ گرفتن از اطلاعات پیام
    console.log("🔹 اطلاعات ارسال‌کننده:", ctx.message.from);
    console.log("🔹 اطلاعات چت:", ctx.message.chat);
    console.log("🔹 تاریخ ارسال:", new Date(ctx.message.date * 1000).toLocaleString());
});

console.log("✅ ربات فعال شد!");
bot.launch();
