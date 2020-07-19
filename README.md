# GeraldCore: Self-Deployable Discord Bot with customisable commands

# Installation:

Download and install NodeMon
```npm install -g nodemon```

Download GeraldCore
```git clone https://github.com/Elementalmp4/GeraldCore```

Install dependencies
```npm install package.json```

# Running GeraldCore:

LINUX:

run once: ```sudo chmod +x ./start.sh```

Then to start: ```./start.sh```

WINDOWS:

Double-click ```start.cmd``` to run

OR

Open command prompt inside GeraldCore folder

Run ```start.cmd```

# Editing the config file:

config file: ```config.json```

```
{
	"prefix": "/", //Bot Command Prefix
	"token": "token-goes-here", //Bot token
	"activity": "/help", //Activity shown below name
	"ignoredChannels": [""], //Comma seperated channel IDs
	"blacklist": [""], //Comma seperated usernames and tags eg: user#1234
	"color": "#000000", //Colour code in HEX
	"botName": "Bot", //Bot Name
	"version": "3.4" //Version
}
```

# File Descriptions:

```commands```
contains all commands

```node_modules```
contains dependencies

```citrus.json```
used for 'Guess The Citrus'

```GeraldCore.js```
The heart of the Discord Bot

```package.json / package-lock.json```
used to install dependencies

```redditList.json```
contains the default subreddits for the random meme command

```start.cmd / start.sh```
used to boot GeraldCore

```template```
custom command template

```userstat.json```
contains user rank information

# Creating custom commands

Create a new file with the name of your command, and the file extension '.js' eg: ```command.js```

Copy and paste template into the file: 

```
module.exports = {
	name: 'name',
	description: 'description',
	usage: '/commandName [args]',
	class: 'Fun/Useful/Repetitive/NSFW',
	execute(msg, args, client) {
		
	},
};

```

Fill in command information ```name, description, usage, class```

Add the command code 

Use ```msg``` to get the message to act upon

Use ```args``` to get the command arguments

Use ```Client``` to get the Bot's Client object

Example Code:

```
module.exports = {
	name: 'reply-with-word',
	description: 'Replies what you said to the bot',
	usage: '/reply-with-word [string]',
	class: 'Fun',
	execute(msg, args, client) {
		var str = args.join(" ");
		msg.channel.send(str);
		console.log("Replied to message with: " + str);
	},
};

```

NodeMon will detect a new file and automatically restart. It will also restart on every file update
