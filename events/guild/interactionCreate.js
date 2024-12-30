const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const Discord = require('discord.js');

/**
 * 
 * @param {Discord} Discord 
 * @param {Discord.Client} bot 
 * @param {Discord.Interaction} inter 
 */
module.exports = async(Discord,bot,inter)=>{
  if(inter.isButton()){
    const buttons = bot.buttons.get(inter.customId);
    if(buttons){
      try{
        await buttons.execute(inter,Discord,bot);
      }catch(err){
        await inter.reply({content:"好像哪裡有問題...",ephemeral:true});
        console.error(err);
      }
    }
    
  }else if(inter.isStringSelectMenu()){
    
  }else if(inter.isCommand()||inter.isContextMenuCommand()){
    
    const slashCommand = bot.commands.get(inter.commandName);
    if(slashCommand){
      try{
        await slashCommand.execute(inter,Discord,bot);
      }catch(err){
        //await inter.reply({content:"好像哪裡有問題...",ephemeral:true});
        console.error(err);
      }
    }
    
    }else if(inter.isModalSubmit()){
      
      const modals = bot.modals.get(inter.customId.split('-')[0]);
      const a = inter.customId.split('-')[1]
      if(modals){
        try{
          await modals.execute(inter,Discord,a,bot);
        }catch(err){
          await inter.reply({content:"好像哪裡有問題...",ephemeral:true});
          console.error(err);
        }
      }

    }
  
}