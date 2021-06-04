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


client.login("ODUwNDQ1MjA2NzM3MTI1NDM2.YLp08Q.ewWB6BmmGilASJI-F_CdmeiuhuE")


client.on('ready', ()=>{
client.channels.get('850004383969443891').join()
client.user.setPresence({ status: "dnd" });
})
