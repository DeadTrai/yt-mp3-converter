const Discord = require("discord.js");
const { Collection } = Discord;
const client = new Discord.Client({ intents: 32767 });

const { token } = require("./config.json");

client.commands = new Collection();
client.aliases = new Collection();
require("./handlers/Events.js")(client);
require(`./utils/komutcalistirici`)(client);

client
  .login(process.env.token)
  .catch((error) => console.error("Lütfen tokeni doğru biçimde girin!\n\n" + error));

Promise.prototype.del = (ms) => {
  if (this)
    this.then((m) => {
      if (m.deletable) setTimeout(() => m.delete(), Number(ms));
    });
};

process.on("uncaughtException", (err) => console.error(err.stack));
process.on("unhandledRejection", (err) => console.error(err.stack));
// Sunucu oluşturma ve proje aktivitesi sağlama.
const express = require('express');
const app = express();
const port = 3000;

// Web sunucu
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında yürütülüyor.`);
});
