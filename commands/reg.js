const Discord = require("discord.js");

module.exports = {
    name: "reg",
    description: "測試用啦",
    category: "test",

    /**
     * 
     * @param {Discord.Client} bot 
     * @param {Discord.Message} msg 
     * @param {String} args 
     * @param {Discord} Discord 
     */
    async execute(bot, msg, args, Discord) {
        if (msg.author.id!='606668363531288577')return;
        await msg.channel.send('Reloading slash command...');
        // await msg.guild.commands
        //     .set(bot.commands)
        //     .then(() => {
        //         msg.reply('Deployed!');
        //     })
        //     .catch(err => {
        //         msg.reply('Could not deploy commands! Make sure the bot has the application.commands permission!');
        //         console.error(err);
        //     });
        const reg = require('../register');
        await reg(msg,args.length!=0?true:false)
            .then(async m=>{
                await msg.channel.send('Successfully reloaded');
            })
            .catch(async err=>{
                console.error(err);
                await msg.channel.send(`Something went wrong`);
            });
    }
}