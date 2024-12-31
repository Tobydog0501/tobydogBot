const { Client, GatewayIntentBits ,ModalBuilder } = require('discord.js');
const Discord = require('discord.js');
const { Player } = require('discord-player');
const { YoutubeiExtractor } = require("discord-player-youtubei")
// const { DefaultExtractors } = require('@discord-player/extractor');
// const fs = require('fs');
// const fsPromise = require('fs/promises')
const TOKEN = process.env.TOKEN


const bot = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildMembers,
    ] 
});


bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();
bot.buttons = new Discord.Collection();
bot.modals = new Discord.Collection();

['command_handler','event_handler'].forEach(handler=>{
  require(`./handlers/${handler}`)(bot,Discord);
})

// this is the entrypoint for discord-player based application
const player = new Player(bot);

// import { DefaultExtractors } from '@discord-player/ex
player.extractors.register(YoutubeiExtractor, {})
// console.log(player)
require("./handlers/player_handler")(player,Discord);
// if(true)  //for testing bot
bot.login(TOKEN);