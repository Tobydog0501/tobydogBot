const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name:"guns",

    async execute(inter,Discord){
        const gun1 = inter.fields.getTextInputValue('gun1');
        const gun2 = inter.fields.getTextInputValue('gun2');
        const id = inter.fields.getTextInputValue('ID');
        const chn = await inter.guild.channels.fetch("1045346751323852901");
        const exampleEmbed = new EmbedBuilder()
            .setTitle("考試申請")
            .setDescription(`${inter.member}(遊戲ID:${id})申請考下列槍種`)
            .setFields([{name:"槍種一",value:gun1,inline:true},{name:"槍種二",value:gun2,inline:true}])
            .setColor("Green");
        
        const row = new ActionRowBuilder()
			.setComponents([
                new ButtonBuilder()
                    .setCustomId('take1')
                    .setLabel(`擔任槍種一考官`)
                    .setStyle(ButtonStyle.Success)
                    .setDisabled(false),
                new ButtonBuilder()
                    .setCustomId('take2')
                    .setLabel(`擔任槍種二考官`)
                    .setStyle(ButtonStyle.Success)
                    .setDisabled(false),
                new ButtonBuilder()
                    .setCustomId("reject")
                    .setLabel("拒絕考生")
                    .setStyle(ButtonStyle.Danger)
                    .setDisabled(false)
        ]);

        await chn.send({embeds:[exampleEmbed],components:[row]});
        await inter.member.roles.add("1045664098014203924");
        await inter.reply({content:`申請完成`,ephemeral:true});
    }
}