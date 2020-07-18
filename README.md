# GeraldCore: Self-Deployable Discord Bot with customisable commands

Installation:

Download and install NodeMon
```npm install -g nodemon```

Download GeraldCore

Install dependencies
```npm install package.json```

Running GeraldCore:

LINUX:
run once: ```sudo chmod +x ./start.sh```

Then to start: ```./start.sh```

WINDOWS:
Double-click ```start.cmd``` to run

OR

Open command prompt inside GeraldCore folder

Run ```start.cmd```

File Descriptions:

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
