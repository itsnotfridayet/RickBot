const ytdl = require("discord-ytdl-core");
const ffmpeg = require("ffmpeg");
//const Discord = require("discord.js");
//const client = new Discord.Client();
const path = require('path')
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const express = require('express');
const app = express();
const port = 3000;

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

client.on("ready", () => {
    console.log("ready")
});

client.login(token);
//client.login("OTI3NjQxMDI2MTgzNzA4NzEy.YdNLBw.KkXnmt4Z2PK4F9r9EpuWQ7ojntA");


//put new stuff here






client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}






});

















client.on("message", msg => {
  if (msg.content === '!Version') {
    msg.reply('RickBot™ alpha 1.2.1');

  } 
  if (msg.content === 'music') {
    msg.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    msg.reply('!play');
  }
    if (msg.author.bot || !msg.guild) return;
    if (msg.content === "!play") {
        if (!msg.member.voice.channel) return msg.channel.send("You're not in a voice channel?");
        let stream = ytdl("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {
            filter: "audioonly",
            opusEncoded: true,
            encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
        });
        
        msg.member.voice.channel.join()
        .then(connection => {
            let dispatcher = connection.play(stream, {
                type: "opus"
            })
            .on("finish", () => {
                msg.guild.me.voice.channel.leave();
            })
        });
    }
});

