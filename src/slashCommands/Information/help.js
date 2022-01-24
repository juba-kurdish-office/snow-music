const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "help",
    description: "Replies with help on how to use this bot",
    owner: false,


    run: async (client, interaction, prefix) => {
        await interaction.deferReply({
          ephemeral: false
        });
  const embed = new MessageEmbed()
    .setTitle("**Help - Menu**")
    .addField(":clever:İnformation","`setprefix`, `invite`, `status`") 
    .addField(":emoji_145:Music","`play`, `skip`, `stop`, `pause`, `resume`, `shuffle`, `seek`, `skipto`, `loop`, `remove`, `queue`, `filters`, `nowplaying`, `clearqueue`, `24/7`, `leave`") 
    .addField(":emoji_110:Filter","`party`, `bass`, `radio`, `pop`, `trablebass`, `soft`, `custom`, `off`")
    .setColor("RANDOM")
   await interaction.followUp({embeds: [embed]})
  }
}
