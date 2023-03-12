const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const fs = require('fs');


module.exports = {
    name:'clean_rec',
    description:"Clean deleted msg",
    category:"test",
    aliases:['cr'],
    async execute(bot,msg,args){
        if(msg.author.id!="606668363531288577") return;
        const ui = JSON.parse(fs.readFileSync('./env.json', 'utf-8'));
        ui[msg.guild.id][msg.channel.id] = [];
        await write(ui);
      
    }
  }

  async function write(w){
    var str = JSON.stringify(w)
    fs.writeFile('./env.json',str,(err)=>{
        if (err){
            console.warn(err)
        }
    })
    return new Promise(res=>res());
}