const fs = require('fs');
const { REST, Routes } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const TOKEN = process.env.TOKEN;

var commands = [];
var commands2 = [];

// Place your client and guild ids here
const clientId = process.env.CID;
const guildId = process.env.GID;

module.exports = async (msg,reset)=>{
  const SlashcommandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));
  const rest = new REST({ version: '9' }).setToken(TOKEN);
  var err = true;

  (async () => {
    return new Promise(async (res,rej)=>{
      for (const file of SlashcommandFiles) {
      const command = require(`./slashCommands/${file}`);
      if(command.data)
        commands.push(command.data.toJSON());
      else
        commands.push(new SlashCommandBuilder().setName(command.name).setDescription(command.description).options(command.options))
      }
      if(reset) commands = [];
      try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
          Routes.applicationGuildCommands(clientId, guildId),
          { body: commands },
        );
        // await msg.guild.commands.set()
        console.log('Successfully reloaded application (/) commands.');
        err = false
      } catch (error) {
        var errors = error
        err = true
      }
      if(!err) res('Successfully reloaded application (/) commands.');
      else rej(`Unsuccessful. Reason:${errors}`);
      
    })
  })().then(m=>{
      return new Promise((res,rej)=>{
        res(m);
      })
    })
    .catch(err=>{
      return new Promise((res,rej)=>{
        rej(err);
      })
    })
}