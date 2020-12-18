const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http:${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);
const log = message => {
  console.log(`${message}`);
};

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const token1 = new Discord.Client();
const token2 = new Discord.Client();
const token3 = new Discord.Client();
const token4 = new Discord.Client();






token1.on("ready", () => {
  token1.channels.get("776901001327935518").join(); 
});

token2.on("ready", () => {
  token2.channels.get("776901001327935518").join(); 
});

token3.on("ready", () => {
  token3.channels.get("776901001327935518").join(); 
});

token4.on("ready", () => {
  token4.channels.get("776901001327935518").join(); 
});






token1.login("NzYyNjkzNjQyNzY1OTkxOTM2.X3s4NQ.fpfk_EEnl4hmxpkoIyV_ZTCwrXI");
token2.login("NzYyNjk0NjMyMDYwMjIzNTgx.X3s5Gg.RO0tOzMzYmj1Hur_Xle172nFvw8");
token3.login("NzYyNjk1MzIxNjk5NzQ1ODEz.X3s5rg.kAU5u2Tcc2zAmGyPHdZHFNVHYvw");
token4.login("NzYyNjk2NjA3OTU0NzYzODA4.X3s67w.bpoulhDBwqIHBHa8vg9BTaflXa8");
