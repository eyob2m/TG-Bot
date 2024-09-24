const { Telegraf } = require("telegraf");
const fs = require('fs');
const express = require('express')
const Jimp = require('jimp');
const { message } = require("telegraf/filters");
const { FmtString } = require("telegraf/format");
const { Names } = require("./names");
const app = express()
const bot = new Telegraf('7830976697:AAHDQz9G9AArUXNjAoMxYlVkTVasXrUE3GI')
const channel = '@CryptoEt_airdropC'

const sendCheckouts = () => {

    const rand = Math.floor(Math.random() * 260)
    const rand_added = Math.floor(Math.random() * 100) + 30
    bot.telegram.sendMessage(channel, `
🎉 [${Names[rand]}](https://t.me/AddAndGetPaid)* ፣ እንኳን ደስ አላችሁ! 🎉*

*${rand_added}* ጓደኞቻቸውን አድ በማድረግ *${rand_added * 50}* ብር ተሸልመዋል!   

*እርስዎም ጓደኞችዎን አድ በማድረግ ብዙ ብሮችን ይሸለሙ!!*
🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
*እንዴት እንደሚሰራ እነሆ፡-*

👉 *30* ሰው አድ በማድረግ፡  *1,000* ብር ይሸለሙ
👉 *40* ሰው አድ በማድረግ፡  *2,000* ብር ይሸለሙ
👉 *60* ሰው አድ በማድረግ፡  *3,000* ብር ይሸለሙ
👉 *80* ሰው አድ በማድረግ፡  *4,000* ብር ይሸለሙ
👉 *100* ሰው አድ በማድረግ፡ *5,000* ብር ይሸለሙ

💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸

*በቀላሉ ጓደኞችዎን በመጋበዝ የበለጠ ገቢ ለማግኘት እድሉን እንዳያመልጥዎት። አሁን አድ በማድረግ ሽልማቶችዎን ይውሰዱ! 💰✨*

https://t.me/AddAndGetPaid https://t.me/AddAndGetPaid`


        , { disable_web_page_preview: true, parse_mode: 'Markdown' })

}

bot.start(ctx=>{
    ctx.chat.first_name
})

setInterval(() => {

    sendCheckouts()
}, 900000);

bot.on(message('new_chat_members'), (ctx) => {
 
    let first_name = ctx.message.from.first_name
    let last_name = ctx.message.from.last_name
    let username = ctx.message.from.username
    let fullname = first_name + " " + last_name
    ctx.telegram.sendMessage(channel, `
[${fullname}](https://t.me/${username}), *እንኳን ወደ አድ ያድርጉ ይሸለሙ በደህና መጡ* 🎉

*እዚህ በማግኘታችን ጓጉተናል! ጓደኞችዎን ወደ ግሩፓችን እንዲቀላቀሉ በመጋበዝ ሽልማቶችን ማግኘት ይችላሉ።*
🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
👉 *30* ሰው አድ በማድረግ፡  *1,000* ብር ይሸለሙ
👉 *40* ሰው አድ በማድረግ፡  *2,000* ብር ይሸለሙ
👉 *60* ሰው አድ በማድረግ፡  *3,000* ብር ይሸለሙ
👉 *80* ሰው አድ በማድረግ፡  *4,000* ብር ይሸለሙ
👉 *100* ሰው አድ በማድረግ፡ *5,000* ብር ይሸለሙ

💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸

*Welcome  [${fullname}](https://t.me/${username}), to Add-And-Get-Paid! 🎉*
💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸
We’re excited to have you here! By inviting your friends to join our community, you can earn rewards. Here’s how it works:

*Add* 30 Friend: Get *1,000* ETB
*Add* 60 Friend: Get *3,000* ETB
*Add* 80 Friend: Get *4,000* ETB
*Add* 100 Friend: Get *5,000* ETB
🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
https://t.me/AddAndGetPaid https://t.me/AddAndGetPaid

`, { disable_web_page_preview: true, parse_mode: 'Markdown' })
})

app.listen(3000,()=>console.log("server running"))
bot.launch()