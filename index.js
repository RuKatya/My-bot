const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const commands = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('Hi', (ctx) => ctx.reply('Hey there'))
bot.hears('hello', (ctx) => ctx.reply('Hey there'))
bot.hears('Hello', (ctx) => ctx.reply('Hey there'))

bot.help((ctx) => ctx.reply(commands.commands))

bot.command('start', async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b>Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : `guest`}!</b>
        What do you want know about me?`, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Where are you from?', 'wherefrom'),
                    Markup.button.callback('Which books do you like?', 'books')
                ],
                [
                    Markup.button.callback('Which framework or library do you like?', 'framelab'),
                    Markup.button.callback('What do you want to study in near future?', 'study')
                ],
                [
                    Markup.button.callback('Show me your works', 'works'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ))
    } catch (error) {
        console.log(error)
    }
})

//Living
bot.action('wherefrom', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.whereFrom, Markup.inlineKeyboard(
            [
                [
                    // Markup.button.callback('Where are you from?', 'wherefrom'),
                    Markup.button.callback('Which books do you like?', 'books')
                ],
                [
                    Markup.button.callback('Which framework or library do you like?', 'framelab'),
                    Markup.button.callback('What do you want to study in near future?', 'study')
                ],
                [
                    Markup.button.callback('Show me your works', 'works'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//Books
bot.action('books', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.books, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Where are you from?', 'wherefrom'),
                    // Markup.button.callback('Which books do you like?', 'books')
                ],
                [
                    Markup.button.callback('Which framework or library do you like?', 'framelab'),
                    Markup.button.callback('What do you want to study in near future?', 'study')
                ],
                [
                    Markup.button.callback('Show me your works', 'works'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//Like now
bot.action('framelab', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.framelab, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Where are you from?', 'wherefrom'),
                    Markup.button.callback('Which books do you like?', 'books')
                ],
                [
                    // Markup.button.callback('Which framework or library do you like?', 'framelab'),
                    Markup.button.callback('What do you want to study in near future?', 'study')
                ],
                [
                    Markup.button.callback('Show me your works', 'works'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//Want to study
bot.action('study', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.study, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Where are you from?', 'wherefrom'),
                    Markup.button.callback('Which books do you like?', 'books')
                ],
                [
                    Markup.button.callback('Which framework or library do you like?', 'framelab'),
                    // Markup.button.callback('What do you want to study in near future?', 'study')
                ],
                [
                    Markup.button.callback('Show me your works', 'works'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//My works
bot.action('works', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.works, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Qiuz please', 'quizplease'),
                    Markup.button.callback('Tasks menegmant', 'tasks'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
                [
                    Markup.button.callback('Go back to main', 'main'),
                ],

            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//Quiz
bot.action('quizplease', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.quiz, Markup.inlineKeyboard(
            [
                [
                    Markup.button.url('Visit the site', 'https://quiz-question-app.herokuapp.com/'),
                    Markup.button.url('Github', 'https://github.com/RuKatya/Quiz-project/'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
                [
                    Markup.button.callback('Go back to main', 'main'),
                ],

            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//Tasks
bot.action('tasks', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.task, Markup.inlineKeyboard(
            [
                [
                    Markup.button.url('Visit the site', 'https://your-personal-tasks.herokuapp.com/'),
                    Markup.button.url('Github', 'https://github.com/RuKatya/Remembers'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
                [
                    Markup.button.callback('Go back to main', 'main'),
                ],

            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//Main
bot.action('main', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(commands.main, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Where are you from?', 'wherefrom'),
                    Markup.button.callback('Which books do you like?', 'books')
                ],
                [
                    Markup.button.callback('Which framework or library do you like?', 'framelab'),
                    Markup.button.callback('What do you want to study in near future?', 'study')
                ],
                [
                    Markup.button.callback('Show me your works', 'works'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//WHERE
bot.command('wherefrom', async (ctx) => {
    try {
        await ctx.replyWithHTML(commands.whereFrom, Markup.inlineKeyboard(
            [
                Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
            ],
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//BOOKS
bot.command('books', async (ctx) => {
    try {
        await ctx.replyWithHTML(commands.books, Markup.inlineKeyboard(
            [
                Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
            ],
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//FRAME
bot.command('framelab', async (ctx) => {
    try {
        await ctx.replyWithHTML(commands.framelab, {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//STUDY
bot.command('study', async (ctx) => {
    try {
        await ctx.replyWithHTML(commands.study, Markup.inlineKeyboard(
            [
                Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
            ],
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

//WORKS
bot.command('works', async (ctx) => {
    try {
        await ctx.replyWithHTML(commands.works, Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Qiuz please', 'quizplease'),
                    Markup.button.callback('Tasks menegmant', 'tasks'),
                ],
                [
                    Markup.button.url('Lets check your Portfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
                ],
            ]
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

bot.command('portfolio', async (ctx) => {
    try {
        await ctx.replyWithHTML(commands.portfolio, Markup.inlineKeyboard(
            [
                Markup.button.url('Protfolio', 'https://katya-ru-fullstack.herokuapp.com/'),
            ],
        ), {
            disable_web_page_preview: true
        })
    } catch (error) {
        console.log(error)
    }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))