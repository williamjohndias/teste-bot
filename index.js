const express = require('express')

const { Telegraf } = require('telegraf')

const bot = new Telegraf('5336650916:AAGKvE2eiIrcy7EP9ZM4BD9sc0QQsNVdGhw')

const app = express()
app.get('/', function (req, res) {
    res.send("Rodando!!")
})


bot.start((ctx) => ctx.reply('Bem-vindo'. ${first_name}))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// bot.launch()
bot.startPolling()

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000')
})
