const Discord = require("discord.js");
const { color, botName } = require('../config.json');
module.exports = {
	name: 'ping',
	description: 'get the API response time',
	usage: '/ping',
	class: 'Useful',
	execute(msg, args, client) {
		console.log('\x1b[31m%s\x1b[0m',"API Latency: " +  Math.round(client.ws.ping));
		const pingEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setTitle(botName + ' Ping')
			.addField('API Latency', Math.round(client.ws.ping) + "ms", true);
		msg.channel.send(pingEmbed);		
	},
};