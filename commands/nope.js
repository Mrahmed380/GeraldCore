module.exports = {
	name: 'nope',
	description: 'Says no in an interesting way',
	usage: '/nope',
	class: 'Fun',
	execute(msg, args) {
		msg.channel.send({files: ["https://www.meme-arsenal.com/memes/4c9c39fff507b49c9c4910780e8e560f.jpg"]});		
	},
};