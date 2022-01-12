
// *IGNORE THIS FILE*

const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const CommandHandler = require("wokcommands");
var rand = Math.random();

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
	console.log('Ready!');
});

client.login('OTI3NjQxMDI2MTgzNzA4NzEy.YdNLBw.KkXnmt4Z2PK4F9r9EpuWQ7ojntA');



var number = 0;



client.on('message', msg => {
  if (msg.content === 'happy') {
    console.log("test")
    client.user.setStatus('available')
    client.user.setActivity("with saddness", {
      type: "STREAMING",
      url: "https://www.twitch.tv/example-url"
    });
  }
  if (msg.content === '!DuccVer') {
    msg.reply('DuccBot™ alpha 1.0.0');

  } 





  if (msg.content === 'rick') {
    msg.reply("https://tenor.com/view/rick-astley-never-gonna-give-you-up-rickroll-dance-moves-dancing-guy-gif-20856902");
    msg.reply("We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy  I just wanna tell you how I'm feeling Gotta make you understand  Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you  We've known each other for so long Your heart's been aching, but You're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it  And if you ask me how I'm feeling Don't tell me you're too blind to see  Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you  Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you  (Ooh, give you up) (Ooh, give you up) Never gonna give, never gonna give (Give you up) Never gonna give, never gonna give (Give you up)  We've known each other for so long Your heart's been aching, but You're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it  I just wanna tell you how I'm feeling Gotta make you understand  Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you  Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you  Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you");

  }


  //for (var start = 1; start < 5000; start++) {
  //  setTimeout(function() {
  //    client.channels.cache.get('927646321937121394').send(number);
   //   number++
   // }, 2000);
 // }
  if (msg.content === 'never') {
    msg.reply("gonna give you up!")
    msg.reply("never gonna let you down!")
  }

  if (msg.content === 'Hello') {
    msg.reply('Hello, Im rick.');

  }
  if (msg.content === 'music') {
    msg.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    msg.reply('!play');
  }






//MUSIC VVV

const queue = new Map();

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }
}
start()
async function start() {
const songInfo = await ytdl.getInfo(args[1]);
}
const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
};

if (!serverQueue) {

}else {
 serverQueue.songs.push(song);
 console.log(serverQueue.songs);
 return message.channel.send(`${song.title} has been added to the queue!`);
}

// Creating the contract for our queue
const queueContruct = {
 textChannel: message.channel,
 voiceChannel: voiceChannel,
 connection: null,
 songs: [],
 volume: 5,
 playing: true,
};
// Setting the queue using our contract
queue.set(message.guild.id, queueContruct);
// Pushing the song to our songs array
queueContruct.songs.push(song);

try {
 // Here we try to join the voicechat and save our connection into our object.
 async function start() {
 var connection = await voiceChannel.join();
 }
 queueContruct.connection = connection;
 // Calling the play function to start a song
 play(message.guild, queueContruct.songs[0]);
} catch (err) {
 // Printing the error message if the bot fails to join the voicechat
 console.log(err);
 queue.delete(message.guild.id);
 return message.channel.send(err);
}



function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
}

const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(`Start playing: **${song.title}**`);

const serverQueue = queue.get(message.guild.id);

if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
} else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
} else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
} else {
    message.channel.send("You need to enter a valid command!");
}














    
});