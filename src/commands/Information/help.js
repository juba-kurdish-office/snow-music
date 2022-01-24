const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
      const embed = new MessageEmbed()

    .setTitle("**Help - Menu**")
    .addField("<a:clever:934459249470357514>İnformation","`setprefix`, `invite`, `status`") 
    .addField("<a:emoji_110:934441822233722951>Music","`play`, `skip`, `stop`, `pause`, `resume`, `shuffle`, `seek`, `skipto`, `loop`, `remove`, `queue`, `filters`, `nowplaying`, `clearqueue`, `24/7`, `leave`") 
    .addField("<a:emoji_1:928719172094001175>Filter","`party`, `bass`, `radio`, `pop`, `trablebass`, `soft`, `custom`, `off`")
    .setColor("RANDOM")

    message.channel.send({ embeds: [embed] }); 
  }
}
