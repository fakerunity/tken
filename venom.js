const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "  Token Sese Sokma | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const client1 = new Discord.Client();



const data = new Map();


client.login("ODU2Njg5NzE1MDc1MzUwNTU4.YNEsow.SQGxQqEGoCF6AbTl8xW6ZP9Jwcs")


client.on('ready', ()=>{
client.channels.get('787669593391890482').join()
client.user.setPresence({ status: "dnd" });
})
