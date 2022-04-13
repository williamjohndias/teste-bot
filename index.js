const express = require('express')
const { Telegraf } = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const bot = new Telegraf('5336650916:AAGKvE2eiIrcy7EP9ZM4BD9sc0QQsNVdGhw')

const app = express()
app.get('/', function (req, res) {
    res.send("Rodando!!")
})


bot.start(content => {
    const from = content.update.message.from
    
    console.log(from)
    
    content.reply(` Bem-Vindo, ${from.first_name}!`)
})

bot.on('text', (content, next) => {
    content.reply('TipsCode...')
    next()
})

// bot.launch()
bot.startPolling()

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000')
})
