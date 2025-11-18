module.exports.config = {
  name: 'fancy',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making with tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy Its me tanvir 6x robot ',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { threadID, messageID, senderID, body } = event;
  var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender})
  var txt = (event.type == "message_reply") ? event.messageReply.body : args.join(" ")
  if (!txt) return api.sendMessage(`❐ Please Type your text or replay other's message😊🖤`, event.threadID, event.messageID);
  const ser = await axios.get(`https://fancy.xanxunder11.repl.co/font?text=${encodeURIComponent(txt)}`);
  var text = ser.data.result;
    return api.sendMessage({body: `${text}`,
attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
}, event.threadID);
                   }
