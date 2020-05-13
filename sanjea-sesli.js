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

const swisha1 = new Discord.Client();
const swisha2 = new Discord.Client();
const swisha3 = new Discord.Client();
const swisha4 = new Discord.Client();
const swisha5 = new Discord.Client();
const swisha6 = new Discord.Client();
const swisha7 = new Discord.Client();
const swisha8 = new Discord.Client();
const swisha9 = new Discord.Client();
const swisha10 = new Discord.Client();
const swisha11 = new Discord.Client();
const swisha12 = new Discord.Client();
const swisha13 = new Discord.Client();
const swisha14 = new Discord.Client();
const swisha15 = new Discord.Client();
const swisha16 = new Discord.Client();
const swisha17 = new Discord.Client();
const swisha18 = new Discord.Client();
const swisha19 = new Discord.Client();
const swisha20 = new Discord.Client();



swisha1.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



swisha2.on("message", async msg => {
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

swisha3.on("message", async msg => {
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

swisha4.on("message", async msg => {
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

swisha5.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha6.on("message", async msg => {
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

swisha7.on("message", async msg => {
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

swisha8.on("message", async msg => {
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

swisha9.on("message", async msg => {
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

swisha10.on("message", async msg => {
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

swisha11.on("message", async msg => {
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

swisha12.on("message", async msg => {
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

swisha13.on("message", async msg => {
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

swisha14.on("message", async msg => {
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

swisha15.on("message", async msg => {
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

swisha16.on("message", async msg => {
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

swisha17.on("message", async msg => {
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

swisha18.on("message", async msg => {
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

swisha19.on("message", async msg => {
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

swisha20.on("message", async msg => {
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



swisha1.login("NjcwMjA2ODc1MjUzNDczMjkw.XirA6A.UkdW7u9O9ARelph1pyRaC-d7drI");
swisha2.login("NjcwNjA5OTM1NjkxODA4Nzcx.Xiw4nA.WZFehud9sFxWlzVJ-9FjbOftkuI");
swisha3.login("NjcyMTMyMzI1OTQ0OTgzNTcw.XjHCGw.2eO_1jRIzTWS_XW-xp5mhDqFpQU");
swisha4.login("TOKEN");
swisha5.login("TOKEN");
swisha6.login("TOKEN");
swisha7.login("TOKEN");
swisha8.login("TOKEN");
swisha9.login("TOKEN");
swisha10.login("TOKEN");
swisha11.login("TOKEN");
swisha12.login("TOKEN");
swisha13.login("TOKEN");
swisha14.login("TOKEN");
swisha15.login("TOKEN");
swisha16.login("TOKEN");
swisha17.login("TOKEN");
swisha18.login("TOKEN");
swisha19.login("TOKEN");
swisha20.login("TOKEN");