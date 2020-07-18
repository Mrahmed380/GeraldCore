const Discord = require("discord.js");
const { color } = require('../config.json');
const fs = require("fs");
module.exports = {
	name: 'citrus',
	description: 'Guess that citrus!',
	usage: '/citrus (to begin game) \n /guess [citrus name] \n /citrus get (lists citrus options)',
	class: 'Fun',
	execute(msg, args) {
		var fruitNames = [
			"lemon",
			"grapefruit",
			"orange",
			"lime",
			"pomelo",
			"yuzu",
			"orangelo",
			"citron",
			"kumquat",
			"bergamot",
			"finger lime",
			"cantaloupe",
			"watermelon",
			"pumpkin",
			"honeydew melon"
		];
		var images = [
			"https://share.upmc.com/wp-content/uploads/2014/10/lemon.png",
			"https://i.ndtvimg.com/mt/cooks/2014-11/grapefruit.jpg",
			"https://www.quanta.org/orange/orange.jpg",
			"https://www.allmychefs.com/images/968/1200-auto/fotolia_60158073_subscription_l-copy.jpg?poix=50&poiy=50",
			"https://images-na.ssl-images-amazon.com/images/I/71kEAwiVH1L._AC_SL1500_.jpg",
			"https://img1.mashed.com/img/gallery/the-perfect-yuzu-juice-substitute/intro-1564609031.jpg",
			"https://i.pinimg.com/originals/e5/20/2b/e5202b706069b594f6ab828af0f9d038.jpg",
			"https://specialtyproduce.com/sppics/8713.png",
			"https://producemadesimple.ca/wp-content/uploads/2015/04/kumquat-2-ss.jpg",
			"https://cdn11.bigcommerce.com/s-295z9o5zsa/images/stencil/1280x1280/products/719/1955/Bergamot_orange_iso_edited_square__66892.1552850001.jpg?c=2",
			"https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/australian-finger-lime.jpg",
			"https://seedworld.com/site/wp-content/uploads/2019/01/GettyImages-845261084.jpg",
			"https://specialtyproduce.com/sppics/11357.png",
			"https://www.liveeatlearn.com/wp-content/uploads/2015/10/pumpkin-photo-1.jpg",
			"https://groceries.morrisons.com/productImages/210/210305011_0_640x640.jpg?identifier=6ff605c91cd0384439fa1acbd7de32a1"
		];
		if (args[0] === "get"){
			var str = fruitNames.join(", ");
			const citrusNamesEmbed = new Discord.MessageEmbed()
				.setColor(color)
				.setTitle('Guess That Citrus!')
           		.addField('Citrus Names', str, true)
			msg.channel.send(citrusNamesEmbed);
		} else {
			function getRandomInt(max) {
				return Math.floor(Math.random() * Math.floor(max));
			  };
			  itemNumber = getRandomInt(fruitNames.length);
			const gameStartEmbed = new Discord.MessageEmbed()
				.setColor(color)
				.setTitle(msg.member.user.tag + ', Guess That Citrus!')
				.setImage(images[itemNumber])
			msg.channel.send(gameStartEmbed);
	
			var gameData = {"item" : fruitNames[itemNumber], "player" : msg.author.id, "playername" : msg.member.user.tag};		
			fs.writeFile("./citrus.json", JSON.stringify(gameData), (err) => {
				if (err) {
					console.error(err);
					return;
				};
				delete require.cache[require.resolve('../citrus.json')];
			});
		}		
	},
};