const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  data:new SlashCommandBuilder()
	      .setName('modal')
	      .setDescription('test')
      	,
  async execute(inter,Discord){
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('guns')
					.setLabel('點擊來申請考試')
					.setStyle(ButtonStyle.Success),
			);

    const exampleEmbed = new EmbedBuilder()
        .setTitle("<<考試規則>>")
        .setDescription("考生可選一到二個槍種(考生需指定槍支)\n地圖：殺戮禁區（散彈槍在貨櫃考ㄛ）\n隨機殲滅(20取13)\n🈲卡版(卡版考官會直接退出,且考試直接作廢)/卡點/NA-45/Rytec AMR爆炸彈匣.鋁熱彈匣/JAK-12/投擲物/終極技能/連殺技能\n僅限使用主武器，不得同時持有兩把主武器\n\n如違反以上規範 考試將不列入計算")
        .setColor("Green")

	await inter.reply({ content:"<<入前須知>>\n1.要考試（歷史最少5傳奇 妹子1傳）\n2.成員需加Dc群\n3.強制改名格式：TD_XXX\n4.妹子不用考，但會審核\n\n<<戰隊規範>>\n1.🈲惹事、滋事、翻群、吵架、廚房、前男友\n2.🈲七天未上線(可以請假ㄛ"
		,embeds: [exampleEmbed] , components: [row] });
    
  }
}