const { PermissionsBitField,ActionRowBuilder, ButtonBuilder, ButtonStyle,EmbedBuilder } = require('discord.js');

module.exports = {
    name:"take1",

    async execute(inter,Discord){
        await inter.deferReply({ephemeral:true});
        const member = await inter.guild.members.fetch(inter.message.embeds[0].description.match(/[0-9]+/)[0]);
        const chn = await inter.guild.channels.create({name:`${member.user.tag.slice(0,-5)}第一考場`,parent:"1045350645135327322",permissionOverwrites: [
            {
                id: inter.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel],
            },
            {
                id: inter.user.id,
                allow: [PermissionsBitField.Flags.ViewChannel],
            },
            {
                id: member.id,
                allow: [PermissionsBitField.Flags.ViewChannel],
            },
        ]});

        const row = new ActionRowBuilder()
        .setComponents(
            inter.message.components[0].components.map((v,i)=>{
                if(i==0||i==2){
                    v.data['disabled']=true;
                }
                return v
        // console.log(v.data)
        }));
        const gun = inter.message.embeds[0].fields[0].value;
        const exampleEmbed = new EmbedBuilder()
            .setTitle("考試申請成功")
            .setDescription(`${inter.member}將成為您本次測驗${gun}的考官\n請在此與考官討論關於考試的內容\n若考官違反任何規定，請通知管理員`)
            .setColor("Green");

        await inter.message.edit({components:[row]})
        chn.send({content:`<@${member.id}>`,embeds:[exampleEmbed]})
        await inter.editReply({content:"完成",ephemeral:true});
    }
}