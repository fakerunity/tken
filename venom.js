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


client.login("ODQxNjYzNTE1MDA1NTUwNjQy.YJqNaQ.Zu-A5Ac8lEoHpl_ch6iHRx9fNU8")//Hesap Tokeni Token
client.login("ODQxNjgyMzM1Mzc5NzUwOTM1.YJqUHQ.c8-Cx853djaegJo-346g11eL1ak")


client.on('ready', ()=>{
client.channels.get('833051879822589972').join()
client.user.setPresence({ status: "dnd" });
})

client1.on('ready', ()=>{
client1.channels.get('833051741372940308').join()
client1.user.setPresence({ status: "dnd" });
})