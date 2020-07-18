const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
	name: 'guess',
	description: 'Guess that citrus!',
    usage: '/citrus (to begin game) \n /guess [citrus name] \n /citrus get (lists citrus options)',
    class: 'Fun',
	execute(msg, args) {
        const { item, player, playername } = require("../citrus.json");
        str = args[0].toLowerCase();
        for (i = 1; i < args.length; i++) {
			var str = str + " " + args[i].toLowerCase();
        }
        if (player === msg.author.id){
            if (item === ""){
                msg.channel.send("Game has not been started Use **/citrus** to begin");
                return;
            } else if (item === str) {
                msg.channel.send("**Correct!** The citrus was " + item);
            } else {
                msg.channel.send("**Incorrect!** The citrus was " + item);
            }
            var gameData = {"item" : ""};		
            fs.writeFile("./citrus.json", JSON.stringify(gameData), (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                delete require.cache[require.resolve('../citrus.json')];
            });
        } else {
            msg.channel.send("Only **" + playername + "** can guess this round!");
        }     
	},
};