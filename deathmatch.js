const Discord = require("discord.js");
const { color } = require("../config.json");
module.exports = {
	name: 'deathmatch',
	description: 'Witness a fight to the death between two members!',
	usage: '/deathmatch [@user1] [@user2]',
	class: 'Fun',
	execute(msg, args, client) {
        var attacks = ["slaps", "punches","stabs","shoots","fish smacks","impales","clobbers","twats","flicks","impolitely nudges","violently shakes","unkindly utters towards","atomically wedgies"];
        var user1Health = 100;
        var user2Health = 100;
        var Events = [];
        var turn = 1;
        var winner;
        var user1 = args[0];
        var user2 = args[1];
        function getUserFromMention(mention) {
                if (!mention) return;        
                if (mention.startsWith('<@') && mention.endsWith('>')) {
                        mention = mention.slice(2, -1);        
                        if (mention.startsWith('!')) {
                                mention = mention.slice(1);
                        }        
                        return msg.guild.member(mention).nickname;
                }
        }
        var user1 = "**" + getUserFromMention(user1) + "**";
        var user2 = "**" + getUserFromMention(user2) + "**";
        while (user1Health > 0 && user2Health > 0){
                function getRandomInt(max) {
                        return Math.floor(Math.random() * Math.floor(max));
                };
                attack = attacks[getRandomInt(attacks.length)];
                damage = getRandomInt(20);
                if (turn == 1){
                        user2Health = user2Health - damage;
                        if (user2Health < 0) {
                                user2Health = 0;
                        }
                        Events.push(user1 + " "  + attack + " " + user2 + " for " + damage + " damage. (" + user1Health + "/" + user2Health + ")")
                        turn = 2;
                } else {
                        user1Health = user1Health - damage;
                        if (user1Health < 0) {
                                user1Health = 0;
                        }
                        Events.push(user2 + " "  + attack + " " + user1 + " for " + damage + " damage. (" + user1Health + "/" + user2Health + ")")
                        turn = 1;
                }
        }
        if (turn == 1){
                winner = user2;
        } else {
                winner = user1; 
        }
        var list = Events.join("\n");

        const gameEmbed = new Discord.MessageEmbed()
			.setColor(color)
                        .setTitle(user1 + " VS " + user2)
                        .setDescription(list);
                msg.channel.send(gameEmbed);
        const winnerEmbed = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle("👑 Winner 👑")
                        .setDescription("The winner is " + winner + "!")
                msg.channel.send(winnerEmbed);
	},
};