module.exports = {
	name: 'coinflip',
	description: 'flip a coin',
	usage: '/coinflip',
	class: 'Useful',
	execute(msg, args) {
		msg.channel.send('Flipping...');
		var number = Math.floor(Math.random() * 10);
		if (number > 5){
			msg.channel.send('Heads wins!');	
		}else{
			msg.channel.send('Tails wins!');	
		}
		
	},
};