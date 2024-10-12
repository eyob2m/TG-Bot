const { Names } = require("./names")

exports.Namefrom = (ctx)=>{
    let first_name = ctx.message.from.first_name ? ctx.message.from.first_name : " "
    let last_name = ctx.message.from.last_name ? ctx.message.from.last_name : " "
    let username = ctx.message.from.username ? ctx.message.from.username : AddAndGetPaid
    let fullname = first_name + " " + last_name
    return {fullname,username}
}

exports.NamefromBot = (ctx)=>{
    let first_name = ctx.chat.first_name ? ctx.chat.first_name : " "
    let last_name = ctx.chat.last_name ? ctx.chat.last_name : " "
    let username = ctx.chat.username ? ctx.chat.username : AddAndGetPaid
    let fullname = first_name + " " + last_name
    return {fullname,username}
}
exports.AddMore = (fullname)=>{
    return `
✅ ስም:- *${fullname}*
ያለዋት ቀሪ ሂሳብ:- *10.000 ብር*

⚠️ውድ *${fullname}* አድ ያደረጉት የሰው መጠን ግን ይህንን የብር ሽልማት ለመውሰድ አያስችሎትም‼️
✅እባክዋ ግሩፔ ላይ ከ50 ሰው በላይ አድ በማድረግ ያዘጋጀሁላችሁን የብር ሽልማት ይረከብኝ⚜️
 አድ ለማድረግ👇
https://t.me/AddAndGetPaid
https://t.me/AddAndGetPaid
https://t.me/AddAndGetPaid`
}


exports.Welcome = (fullname,username)=>{
    return `[${fullname}](https://t.me/${username}), *እንኳን ወደ አድ ያድርጉ ይሸለሙ በደህና መጡ* 🎉

*እዚህ በማግኘታችን ጓጉተናል! ጓደኞችዎን ወደ ግሩፓችን እንዲቀላቀሉ በመጋበዝ ሽልማቶችን ማግኘት ይችላሉ።*
🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
👉 *30* ሰው አድ በማድረግ፡  *1,000* ብር ይሸለሙ
👉 *40* ሰው አድ በማድረግ፡  *2,000* ብር ይሸለሙ
👉 *60* ሰው አድ በማድረግ፡  *3,000* ብር ይሸለሙ
👉 *80* ሰው አድ በማድረግ፡  *4,000* ብር ይሸለሙ
👉 *100* ሰው አድ በማድረግ፡ *5,000* ብር ይሸለሙ

💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸
https://t.me/AddAndGetPaid https://t.me/AddAndGetPaid

`
}

exports.SendAccount = ()=>{
    return  `
✅  *አድ ያደረጋችሁ በፍጥነት የአካውንት ቁጥራችሁን ላኩልን ሽልማታችሁን በ 10 ደቂቃ ውስጥ ገቢ እናደርጋለን!! *
💸💸💸💸💸💸💸💸💸💸💸💸💸💸

* በቀላሉ ጓደኞችዎን በመጋበዝ የበለጠ ገቢ ለማግኘት እድሉን እንዳያመልጥዎት። አሁን አድ በማድረግ ሽልማቶችዎን ይውሰዱ! 💰✨*

https://t.me/AddAndGetPaid https://t.me/AddAndGetPaid`
}

exports.Checkout = (rand,rand_added)=>{
    return `
💸💸💸💸💸💸💸💸💸💸💸💸💸💸

🎉 [${Names[rand]}](https://t.me/AddAndGetPaid)* ፣ እንኳን ደስ አላችሁ! 🎉*

*${rand_added}* ጓደኞቻቸውን አድ በማድረግ *${rand_added * 50}* ብር ተሸልመዋል!  

💸💸💸💸💸💸💸💸💸💸💸💸💸💸

*እርስዎም ጓደኞችዎን አድ በማድረግ ብዙ ብሮችን ይሸለሙ!!*
🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
*እንዴት እንደሚሰራ እነሆ፡-*

👉 *30* ሰው አድ በማድረግ፡  *1,000* ብር ይሸለሙ
👉 *40* ሰው አድ በማድረግ፡  *2,000* ብር ይሸለሙ
👉 *60* ሰው አድ በማድረግ፡  *3,000* ብር ይሸለሙ
👉 *80* ሰው አድ በማድረግ፡  *4,000* ብር ይሸለሙ
👉 *100* ሰው አድ በማድረግ፡ *5,000* ብር ይሸለሙ

💸💸💸💸💸💸💸💸💸💸💸💸💸💸

*በቀላሉ ጓደኞችዎን በመጋበዝ የበለጠ ገቢ ለማግኘት እድሉን እንዳያመልጥዎት። አሁን አድ በማድረግ ሽልማቶችዎን ይውሰዱ! 💰✨*

https://t.me/AddAndGetPaid https://t.me/AddAndGetPaid`
}


exports.GroupLink = "https://t.me/AddAndGetPaid"
exports.BotLink = "https://t.me/AddAndGetPaidBot"