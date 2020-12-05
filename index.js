require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const token = process.env.token
const prefix = process.env.prefix

// Configure the array used for random replies
let replies = [""];
let svenska = [""];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'test') {
    let random = Math.floor(Math.random() * replies.length);
    msg.reply(replies[random]);
  }
});

client.on('message', msg => {
    if (msg.content === 'svenska') {
      let randomsvenska = Math.floor(Math.random() * svenska.length);
      msg.reply(svenska[randomsvenska]);
    }
  });

client.on('message', msg => {
    if (msg.content === '!dog') {
request.get('https://dog.ceo/api/breeds/image/random', {

}, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body); //Parse the json data.
      var embed = new Discord.MessageEmbed()
      .setTitle("Dog picture")
      .setDescription("Here is a picture of a dog")
      .setImage(parsedData.message)
      .setColor("RED")
      msg.channel.send(embed);
    } else {
        console.log(error);
    }
})
}
});

client.on('message', msg => {
    if (msg.content === '!cat') {
request.get('https://aws.random.cat/meow', {

}, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body); //Parse the json data.
      var embed = new Discord.MessageEmbed()
      .setTitle("Cat picture")
      .setDescription("Here is a picture of a cat")
      .setImage(parsedData.file)
      .setColor("RED")
      msg.channel.send(embed);
    } else {
        console.log(error);
    }
})
}
});

client.login(token);