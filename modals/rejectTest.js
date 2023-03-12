const { PermissionsBitField,ActionRowBuilder, ButtonBuilder, ButtonStyle,EmbedBuilder } = require('discord.js');

module.exports = {
    name:"reject",

    async execute(inter,Discord,mem){
        
        const reason = inter.fields.getTextInputValue('reason');
        const chn = await inter.guild.channels.fetch("1045680048658710588");
        const exampleEmbed = new EmbedBuilder()
            .setTitle("申請失敗")
            .setDescription(`<@${mem}>的申請失效\n原因：${reason}`)
            .setColor("Yellow");
        
        
        await chn.send({content:`<@${mem}>`,embeds:[exampleEmbed]});
        await inter.reply({content:`完成`,ephemeral:true})
    }
}