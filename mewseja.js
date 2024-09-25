// const { Telegraf } = require("telegraf");
// const express = require('express')

// const { Namefrom, AddMore, GroupLink, NamefromBot2 } = require("./extractname");
// const app2 = express()
// const Bot2 = new Telegraf('8149859697:AAFAk8OLFTBRBj_6RZGtZFYMYkodoPJboE0')
// Bot2.start(ctx => {
//     fullname = ctx.chat.first_name ? ctx.chat.first_name : " "
//     username = ctx.chat.username ? ctx.chat.username : null
//     Bot2.telegram.sendMessage("@awaqiquiz", `[${fullname}](${ username ==null ? "https://t.me/awaqiquiz" : `https://t.me/${username}`  }), started the Bot2`, {
       
//         disable_web_page_preview: true,
//         parse_mode: 'Markdown'
//     })
//     Bot2.telegram.sendMessage(ctx.chat.id, AddMore(fullname)
//         , {
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: "አድ 🔀", url: GroupLink }
//                     ]
//                 ]
//             },
//             disable_web_page_preview: true,
//             parse_mode: 'Markdown'
//         }
//     )
// })


// app2.listen(3001, () => console.log("Bot2 server running"))
// Bot2.launch()