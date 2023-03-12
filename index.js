const { Client, GatewayIntentBits ,ModalBuilder } = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs');
const path = "./token.json"
const fsPromise = require('fs/promises')
const TOKEN = fs.existsSync(path)?require(path).tkn:process.env.tkn


const bot = new Client({
    intents: [
      GatewayIntentBits.Guilds,
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

if(true)  //for testing bot
  bot.login(TOKEN);