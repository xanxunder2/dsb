const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "game",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Yah This Bot creator : SHARIFUL ISLAM -   link => https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D", "তুমি কি আমাকে ডাকলে বন্ধু 🤖?", "I love you 💝", "ভালোবাসি তোমাকে 🤖", "Hi, I'm massanger Bot i can help you.?🤖","Use callad to contact admin!", "Hi, Don't disturb 🤖 🚘Now I'm going to Sylhet ,Bangladesh..bye", "Hi, 🤖 i can help you~~~~"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


   if ((event.body.toLowerCase() == "fuck") || (event.body.toLowerCase() == "/fuck")) {
    return api.sendMessage("“কিরে ভালো হবি কবে?..fuck আবার কি? বেদ্দফ ", threadID);
  };

   if ((event.body.toLowerCase() == "বাল") ||  (event.body.toLowerCase() == "bal")) {
    return api.sendMessage("~ দূর বাল বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
  };


  
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "❤️")) {
    return api.sendMessage("", threadID);
  };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
    return api.sendMessage("I love you too 🥺! মনে লাগে ঢেউ ভালোবাসে না কেউ....💦💔", threadID);
  };



  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }