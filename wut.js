const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [{
  name: 'b',
  description: 'Replies with Pong!'
}]; 

const rest = new REST({ version: '9' }).setToken('ODczNTA5NDA3MDEzNjAxMzQw.YQ5dBw.2Y3fLsMz_tu6htPVzPukhCynAqs');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands("873509407013601340", "831519329233010749"),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();