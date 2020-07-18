const randomPuppy = require('random-puppy');
const { color } = require('../config.json');
const Discord = require("discord.js");
module.exports = {
	name: 'meme',
	description: 'Get a random meme',
	usage: '/meme [subreddit] leave blank for a random subreddit',
	class: 'Fun',
	execute(msg, args) {
        const { reddit } = require("../redditList.json");
        var subreddit;
        if (!args[0]){
            subreddit = reddit[Math.floor(Math.random() * reddit.length)];            
        } else {
            subreddit = args[0];
        }
        try {
            randomPuppy(subreddit).then(async url => {
                const memeEmbed = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle("r/"+subreddit)
                .setImage(url);
                msg.channel.send(memeEmbed);
            })
        } catch (err){
            console.error(err); 
            msg.channel.send("Invalid Subreddit / No data collected");
        } 
        delete require.cache[require.resolve('../redditList.json')];
	},
};






