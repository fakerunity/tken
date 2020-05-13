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

const creax1 = new Discord.Client();
const creax2 = new Discord.Client();
const creax3 = new Discord.Client();
const creax4 = new Discord.Client();
const creax5 = new Discord.Client();
const creax6 = new Discord.Client();
const creax7 = new Discord.Client();
const creax8 = new Discord.Client();
const creax9 = new Discord.Client();
const creax10 = new Discord.Client();
const creax11 = new Discord.Client();
const creax12 = new Discord.Client();
const creax13 = new Discord.Client();
const creax14 = new Discord.Client();
const creax15 = new Discord.Client();
const creax16 = new Discord.Client();
const creax17 = new Discord.Client();
const creax18 = new Discord.Client();
const creax19 = new Discord.Client();
const creax20 = new Discord.Client();
const creax21 = new Discord.Client();


creax1.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



creax2.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax3.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax4.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax5.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax6.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax7.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax8.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax9.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax10.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax11.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax12.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax13.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax14.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax15.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax16.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax17.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax18.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax19.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax20.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

creax21.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



creax1.login("NzEwMTY3Nzg2NDYyMzgwMTAy.XrwhwA.OzyAD9f-ahKBtd3D8InhVbMqwbM");
creax2.login("NzEwMTcxMDY0MDY3NDI0Mjc4.Xrwncw.8x1g6bwVNY6Vuzscu0i0vwSGvzs");
creax3.login("TOKEN");
creax4.login("TOKEN");
creax5.login("TOKEN");
creax6.login("TOKEN");
creax7.login("TOKEN");
creax8.login("TOKEN");
creax9.login("TOKEN");
creax10.login("TOKEN");
creax11.login("TOKEN");
creax12.login("TOKEN");
creax13.login("TOKEN");
creax14.login("TOKEN");
creax15.login("TOKEN");
creax16.login("TOKEN");
creax17.login("TOKEN");
creax18.login("TOKEN");
creax19.login("TOKEN");
creax20.login("TOKEN");
creax21.login("TOKEN");


////Alıntıdır.///