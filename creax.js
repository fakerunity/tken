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
const token5 = new Discord.Client();
const token6 = new Discord.Client();
const token7 = new Discord.Client();
const token8 = new Discord.Client();
const token9 = new Discord.Client();

////////////////////////////////////////////////// VALORANT
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

///////waffen

token5.on("ready", () => {
  token5.channels.get("776901002199826453").join(); 
});

token6.on("ready", () => {
  token6.channels.get("776901002199826453").join(); 
});

token7.on("ready", () => {
  token7.channels.get("776901002199826453").join(); 
});

token8.on("ready", () => {
  token8.channels.get("776901002199826453").join(); 
});

token9.on("ready", () => {
  token9.channels.get("776901002199826453").join(); 
});



token1.login("NzYyNjkzNjQyNzY1OTkxOTM2.X3s4NQ.fpfk_EEnl4hmxpkoIyV_ZTCwrXI");
token2.login("NzYyNjk0NjMyMDYwMjIzNTgx.X3s5Gg.RO0tOzMzYmj1Hur_Xle172nFvw8");
token3.login("NzYyNjk1MzIxNjk5NzQ1ODEz.X3s5rg.kAU5u2Tcc2zAmGyPHdZHFNVHYvw");
token4.login("NzYyNjk2NjA3OTU0NzYzODA4.X3s67w.bpoulhDBwqIHBHa8vg9BTaflXa8");

token5.login("NzYyNjk3MjMzNDM4NDc0Mjcx.X3s7ig.6pozoicr8FZangy-f0M3L2h7CrY");
token6.login("NzYyNjk5MTkwOTA3NDM3MDg2.X3s9Sg.sfn_mZz7JswI0_78Dj6pP00QqZI");
token7.login("NzYyNzAwNzIwOTE0Njk0MjA1.X3s-9A.UeJp601iP7XG00869Pfe1x9YPdA");
token8.login("NzYyNzU3ODE0NDI2MTQwNjcz.X3t0HQ.YAN01Lc4b11xjfz3OPCRKxXIAYw");
token9.login("NzYyNzU4NjYyNzc0MTk0MTc2.X3t0sg.N_o_1mBWERRWeYVhWB_SN360jME"); 

