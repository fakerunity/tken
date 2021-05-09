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



const data = new Map();


client.login("NzE0MjA0NDA3MDc1NTY5NzA3.YJUJUg.Frpxy5WjZcy2_Vz4b__2tve44j")//Hesap Tokeni Token


client.on('ready', ()=>{
client.channels.get('715276281423331468').join()
client.user.setPresence({ status: "dnd" });
})