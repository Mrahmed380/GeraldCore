const Discord = require("discord.js");
const moment = require("moment");
const { color } = require('../config.json');
module.exports = {
	name: 'userinfo',
	description: 'Get information about a user',
	usage: '/userinfo [@user]',
	class: 'Useful',
	execute(msg, args, client) {
        const { username, messageCount } = require("../userstat.json");
        if(!args[0]){
            user = msg.author;
        } else {
            user = msg.mentions.users.first();
        }
        const member = msg.guild.member(user);
        var position = username.indexOf(member.id);        
        var count = messageCount[position];
        var rankNumber = Math.floor(count/100) + 1;
        var roles = member.roles.cache.map(r => {if(r.name != "@everyone"){return r.name;}}).join(", ");
        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setThumbnail(user.avatarURL())
        .addField(`${user.tag}`, `${user}`, false)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, false)
        .addField("Status:", `${user.presence.status}`, false)
        .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, false)
        .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, false)
        .addField("Roles: ", roles, false)
        .addField("Messages sent: ", count , true)
        .addField("User Rank: ", rankNumber, true) 
        .addField("ID:", `${user.id}`, false)
    msg.channel.send(embed)
	},
};