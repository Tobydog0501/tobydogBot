const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  data:new SlashCommandBuilder()
	      .setName('fail')
	      .setDescription('考試失敗')
      	,
  async execute(inter,Discord){

    await inter.deferReply({ephemeral:true});
    if(inter.channel.parent.id!="1045350645135327322"){
        await inter.editReply({content:"此指令只能在\"考試申請\"類別中輸入"});
        return;
    }
    if(!inter.member.roles.cache.some(v=>v.id == "1044264943874224228")){    //then
        await inter.editReply({content:"此指令只有考官能輸入"});
        return;
    }
    await inter.channel.edit({parent:"1045667352445993044",lockPermissions:true});

    const row = new ActionRowBuilder()
			.setComponents([
                new ButtonBuilder()
                    .setCustomId("delete")
                    .setLabel("刪除此頻道")
                    .setStyle(ButtonStyle.Danger)
                    .setDisabled(false)
        ]);

    await inter.channel.send({content:"考生考試失敗",components:[row]});
	await inter.editReply({content:"完成"});
    
  }
}