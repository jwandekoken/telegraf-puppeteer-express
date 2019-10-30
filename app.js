const express = require('express');
const app = express();
const bot = require('./telegraf');

bot.launch();

app.listen(3000);

