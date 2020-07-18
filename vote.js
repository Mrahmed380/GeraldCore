const Discord = require("discord.js");
const { color } = require('../config.json');
module.exports = {
	name: 'vote',
	description: 'Vote on a topic of your choice',
	usage: '/vote [topic]',
	class: 'Useful',
	execute(msg, args, client) {
		if (!args){
            msg.channel.send("You need to supply a topic");
        } else {
            var str = args[0];
            for (i = 1; i < args.length; i++) {
                var str = str + " " + args[i];
            }
            const voteEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle("Current Vote")
            .addField("Topic:",str,true)
            msg.channel.send(voteEmbed).then(function (message) {
                message.react("✅")
                message.react("❌")
            });
        }
	},
};