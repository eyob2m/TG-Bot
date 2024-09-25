const { Telegraf } = require("telegraf");
const express = require('express')

const app = express()
const bot = new Telegraf('7830976697:AAHDQz9G9AArUXNjAoMxYlVkTVasXrUE3GI')
const channel = '@CryptoEt_airdropC'

const { Namefrom, AddMore, GroupLink, NamefromBot2, Welcome, Checkout, SendAccount  } = require("./extractname");
const app2 = express()
const Bot2 = new Telegraf('8149859697:AAFAk8OLFTBRBj_6RZGtZFYMYkodoPJboE0')

Bot2.start(ctx => {
    
    fullname = ctx.chat.first_name ? ctx.chat.first_name : " "
    username = ctx.chat.username ? ctx.chat.username : null
    Bot2.telegram.sendMessage("@awaqiquiz", `[${fullname}](${ username ==null ? "https://t.me/awaqiquiz" : `https://t.me/${username}`  }), started the Bot2`, {
       
        disable_web_page_preview: true,
        parse_mode: 'Markdown'
    })
    Bot2.telegram.sendMessage(ctx.chat.id, AddMore(fullname)
        , {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "አድ 🔀", url: GroupLink }
                    ]
                ]
            },
            disable_web_page_preview: true,
            parse_mode: 'Markdown'
        }
    )
})


app2.listen(3001, () => console.log("Bot2 server running"))
Bot2.launch()

const sendYourAccount = () => {

    bot.telegram.sendMessage(channel, SendAccount()

        , {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "አካውንት ለመላክ 🔀", url: "https://t.me/AddAndGetPaidBot" }
                    ]
                ]
            }
            , disable_web_page_preview: true, parse_mode: 'Markdown'
        }
    )

}


const sendCheckouts = () => {

    const rand = Math.floor(Math.random() * 260)
    const rand_added = Math.floor(Math.random() * 100) + 30
    bot.telegram.sendMessage(channel, Checkout(rand, rand_added), { disable_web_page_preview: true, parse_mode: 'Markdown' })

}

// bot.on(message('new_chat_members'), (ctx) => {

//     const { fullname, username } = Namefrom(ctx)
//     ctx.telegram.sendMessage(channel, Welcome(fullname, username), { disable_web_page_preview: true, parse_mode: 'Markdown' })
// })

setInterval(async ()=>{
    
  await sendCheckouts()
  await sendYourAccount()


},9000)
app.listen(3000, () => console.log("Group server running"))
bot.launch()