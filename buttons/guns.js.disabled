const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name:"guns",

    async execute(inter,Discord){
      if(inter.member.roles.cache.some(v=>v.id == "1045664098014203924")){
        await inter.reply({content:"你已申請過一次",ephemeral:true})
        return;
      }
        const modal = new ModalBuilder()
        .setCustomId('guns')
        .setTitle('考試申請');

        const gameId = new TextInputBuilder()
        .setCustomId('ID')
          // The label is the prompt the user sees for this input
        .setLabel("遊戲ID(或UID)")
          // Short means only a single line of text
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const gun1 = new TextInputBuilder()
        .setCustomId('gun1')
          // The label is the prompt the user sees for this input
        .setLabel("槍種一")
          // Short means only a single line of text
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const gun2 = new TextInputBuilder()
        .setCustomId('gun2')
        .setLabel("槍種二")
          // Paragraph means multiple lines of text.
          .setStyle(TextInputStyle.Short)
        .setRequired(true);

      // An action row only holds one text input,
      // so you need one action row per text input.
      const firstActionRow = new ActionRowBuilder().addComponents(gameId);
      const secondActionRow = new ActionRowBuilder().addComponents(gun1);
      const thirdActionRow = new ActionRowBuilder().addComponents(gun2);

      // Add inputs to the modal
      modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

      // Show the modal to the user
      await inter.showModal(modal);
    }
}