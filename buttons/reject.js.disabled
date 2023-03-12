const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name:"reject",

    async execute(inter,Discord){
        const mem = inter.message.embeds[0].description.match(/[0-9]+/)[0];
        const modal = new ModalBuilder()
            .setCustomId(`reject-${mem}`)
            .setTitle('拒絕考生');

        const reason = new TextInputBuilder()
            .setCustomId('reason')
            .setLabel("原因")
            // Paragraph means multiple lines of text.
            .setPlaceholder("遊戲ID輸入錯誤、槍種輸入錯誤...")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        // An action row only holds one text input,
        // so you need one action row per text input.
        const firstActionRow = new ActionRowBuilder().addComponents(reason);

        // Add inputs to the modal
        modal.addComponents(firstActionRow);
        const row = new ActionRowBuilder()
            .setComponents(
                inter.message.components[0].components.map((v,i)=>{
                  
                    v.data['disabled']=true;
                    
                    return v
                // console.log(v.data)
            }));
        
        const memb = await inter.guild.members.fetch(mem);
        await inter.message.edit({components:[row]})
        await memb.roles.remove("1045664098014203924");
        // Show the modal to the user
        await inter.showModal(modal);
    }
}