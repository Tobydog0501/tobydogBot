const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data:new SlashCommandBuilder()
	      .setName('url')
	      .setDescription('創建邀請')
      	,
  async execute(inter,Discord){
    if(!inter.member.roles.cache.some(v=>v.id=="1044264943874224228")&&!inter.member.roles.cache.some(v=>v.id=="1044264999100612638")){
        await inter.reply({content:"你不能這樣做",ephemeral:true});
        return;
    }
    const invite = await inter.guild.invites.create("1044265231842545756",{maxAge:0,maxUses:1,unique:true});
    const ebd = new EmbedBuilder()
        .setTitle("邀請連結生成成功")
        .setDescription(`invite link: ${invite} `)
        .setFooter({text:"此連結僅能使用一次"})
        .setColor("Random");


    await inter.reply({embeds:[ebd],ephemeral:true});
    
  }
}