const ud = require('urban-dictionary')
const Discord = require("discord.js");
const { color } = require("../config.json");
module.exports = {
	name: 'define',
	description: 'Get a definition from Urban Dictionary',
	usage: '/define [subject]',
	class: 'NSFW',
	execute(msg, args, client) {
		if (!args.length) {
			msg.channel.send('You need to supply a subject to be defined');
        } else {
            var definition = args.join(" ");
            ud.term(definition, (error, entries, tags, sounds) => {
                if (error) {
                  console.error(error.message)
                  msg.channel.send(error.message);
                } else {
                    var def = entries[0].definition.replace(/[^a-zA-Z0-9()"'?!;:., \n]/g, "");
                    var exa = entries[0].example.replace(/[^a-zA-Z0-9()"'?!;:., \n]/g, "");
                    if (!def || !exa){
                        msg.channel.send("API Error");
                    } else {
                        const udEmbed = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(entries[0].word)
                        .addField("Definition: ", def, true)
                        .addField("Example: ", exa, true)
                    msg.channel.send(udEmbed);   
                    }                             
                }
            })
        }       
	},
};