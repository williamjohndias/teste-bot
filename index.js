const express = require('express')
const { Telegraf } = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const bot = new Telegraf('5336650916:AAGKvE2eiIrcy7EP9ZM4BD9sc0QQsNVdGhw')

const app = express()
app.get('/', function (req, res) {
    res.send("Rodando!!")
})


let list = []

const buttons = () => Extra.markup(
    Markup.inlineKeyboard(
        list.map(item => Markup.callbackButton(item, `delete ${item}`)),
        { columns: 3}
    )
)
    

// bot.launch()
bot.start( async content => {
    const name = content.update.message.from.first_name
    
    await content.reply(`Seja Bem-Vindo(a), ${name}`)
    await content.reply('Digite os produtos que deseja adcionar ao carrinho')
})

bot.on('text', content => {
    list.push(content.update.message.text)
    content.reply(`${content.update.message.text} Produto adcionado`, buttons() )
})

bot.action(/delete (.+)/, content => item !== content.match[1] )

content.reply(`${content.match[1]} deletado`, buttons())

bot.startPolling()

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000')
})


