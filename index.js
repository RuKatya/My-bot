const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const commands = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.start((ctx) => console.log(ctx.message))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : `guest`}!`))
bot.help((ctx) => ctx.reply(commands.commands))

bot.command('course', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Courded</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('One', 'btn_1'), Markup.button.callback('Two', 'btn_2')],
                [Markup.button.callback('Three', 'btn_3')]
            ]
        ))
    } catch (error) {
        console.log(error)
    }
})

function addActionBot(name, src, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        } catch (error) {
            console.log(error)
        }
    })
}

addActionBot('btn_1', './pic.png', commands.text)
addActionBot('btn_2', false, commands.text)




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))