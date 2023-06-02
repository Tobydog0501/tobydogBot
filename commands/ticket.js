const discordTranscripts = require('discord-html-transcripts');

module.exports = {
    name:'ticket',
    description:"Register the slash commands",
    category:"test",
    aliases:['tic'],

    async execute(bot,msg,args){
        const channel = msg.channel; // or however you get your TextChannel
        // msg.delete();
        // Must be awaited
        const attachment = await discordTranscripts.createTranscript(channel);
        channel.send({
            files: [attachment],
        });
        // console.log(attachment)
    }
  }