module.exports.config = {
  name: 'fancy7',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: false,
  usages: '/fancy7 Its me tanvir 6x robot ',
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
  const inputText = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");

  const fontMap = {
    ' ': ' ', 'a':'𝐀', 'b':'𝐁', 'c':'𝐂', 'd':'𝐃', 'e':'𝐄','f':'𝐅', 'g':'𝐆', 'h':'𝐇', 'i':'𝐈', 'j':'𝐉', 'k':'𝐊', 'l':'𝐋', 'm':'𝐌', 'n':'𝐍', 'o':'𝐎', 'p':'𝐏', 'q':'𝐐', 'r':'𝐑', 's':'𝐒', 't':'𝐓', 'u':'𝐔', 'v':'𝐕', 'w':'𝐖', 'x':'𝐗', 'y':'𝐘', 'z':'𝐙','A':'𝐀', 'B':'𝐁', 'C':'𝐂', 'D':'𝐃', 'E':'𝐄','F':'𝐅', 'G':'𝐆', 'H':'𝐇', 'I':'𝐈', 'J':'𝐉', 'K':'𝐊', 'L':'𝐋', 'M':'𝐌', 'N':'𝐍', 'O':'𝐎', 'P':'𝐏', 'Q':'𝐐', 'R':'𝐑', 'S':'𝐒', 'T':'𝐓', 'U':'𝐔', 'V':'𝐕', 'W':'𝐖', 'X':'𝐗', 'Y':'𝐘', 'Z':'𝐙',
  };

  const outputText = inputText
    .split('')
    .map(char => fontMap[char] || char) // Replace characters with stylized versions
    .join('');

  var msg = [];
    let a = `https://i.ibb.co/3ScKkzb/Si-tanvir-6x-cp.png`;//https://i.ibb.co/B3f268Z/toolshub.png//

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/tanvir6x.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/tanvir6x.png"));
     return api.sendMessage({body: `${outputText}`,
attachment: allimage
    }, event.threadID);
    }