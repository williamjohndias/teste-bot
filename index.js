const express = require('express')

const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const session = require('telegraf/session')

const bot = new Telegraf('5336650916:AAGKvE2eiIrcy7EP9ZM4BD9sc0QQsNVdGhw')

const app = express()

app.get('/', function (req, res) {
    res.send("Rodando!!")
})



const buttons = list => Extra.markup(
    Markup.inlineKeyboard(
        list.map(item => Markup.callbackButton(item, `delete ${item}`)),
        { columns: 2}
    )
)

bot.use(session())
    

// bot.launch()
bot.start( async content => {
    const name = content.update.message.from.first_name
    
    await content.reply(`Seja Bem-Vindo(a), ${name}`)
    await content.reply('Digite os produtos que deseja adcionar ao carrinho')
  content.session.list = []
})

bot.on('text', content => {
    
    let msg = content.update.message.text
  
    content.session.list.push(msg)
    content.reply(`${msg} Produto adcionado`, buttons(content.session.list) )
})

bot.action(/delete (.+)/, content => {
    content.session.list = content.session.list.filter(item => item !== content.match[1])   
    content.reply(`${content.match[1]} deletado`, buttons(content.session.list))
})

bot.startPolling()

app.listen(process.env.PORT || 3000, () => {
    console.log('Server rodando na porta 3000')
})
