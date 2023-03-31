const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

global.client.config = require('./config');

global.player = new Player(global.client, global.client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});
process.on('unhandledRejection', error => {
console.error('Unhandled promise rejection:', error);
});
const express = require("express");
const app = express();
const http = require("http");
const { config } = require('process');
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});

client.login(process.env.token)

