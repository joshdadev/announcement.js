const {Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'announce',
    description : 'Used to announce something',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run : async(client, message, args) => {
        let channel = message.mentions.channels.first();
      if(!channel) return message.reply("Please provide a **valid** channel to send the announcement in.")
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply("You don't have permissions to use this!") // Permission lock
        const embed = new MessageEmbed()
        .setTitle(`**There's an announcement!**`)
        .setDescription(args.slice(1).join(' '))
        .setColor('#be55ed')
        .setFooter(`Announcement made by ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`) // Change the stuff in the footer to make it anonymous
        .setTimestamp()

        await channel.send({ embeds: [embed] });
    }
}
