const env = require('../.env');
const Telegraf = require('telegraf');
// require puppeteer files
const Eugen = require('../puppeteer');

const bot = new Telegraf(env.token);

bot.start(async ctx => {
  // usando emoji
  await ctx.reply(`Como é bom estar vivo! 😎`);
});

bot.on('text', async (ctx, next) => {
  const messageText = ctx.message.text;
  if(messageText.includes('bom dia') || messageText.includes('Bom dia')) {
    await ctx.reply(`Bom dia, ${ctx.message.from.first_name}!`);
  }
  next();
});

bot.on('text', async (ctx, next) => {
  const messageText = ctx.message.text;
  if(messageText.includes('ligar Eugenio') || messageText.includes('Ligar Eugenio') || messageText.includes('ligar eugenio')) {
    await ctx.reply(`Ligando Eugênio...`);
    Eugen.launch();
  }
  next();
});

module.exports = bot;
