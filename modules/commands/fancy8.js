module.exports.config = {
  name: 'fancy8',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy8 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'🅰', 'b':'🅱', 'c':'🅲', 'd':'🅳', 'e':'🅴','f':'🅵', 'g':'🅶', 'h':'🅷', 'i':'🅸', 'j':'🅹', 'k':'🅺', 'l':'🅻', 'm':'🅼', 'n':'🅽', 'o':'🅾', 'p':'🅿', 'q':'🆀', 'r':'🆁', 's':'🆂', 't':'🆃', 'u':'🆄', 'v':'🆅', 'w':'🆆', 'x':'🆇', 'y':'🆈', 'z':'🆉','A':'🅰', 'B':'🅱', 'C':'🅲', 'D':'🅳', 'E':'🅴','F':'🅵', 'G':'🅶', 'H':'🅷', 'I':'🅸', 'J':'🅹', 'K':'🅺', 'L':'🅻', 'M':'🅼', 'N':'🅽', 'O':'🅾', 'P':'🅿', 'Q':'🆀', 'R':'🆁', 'S':'🆂', 'T':'🆃', 'U':'🆄', 'V':'🆅', 'W':'🆆', 'X':'🆇', 'Y':'🆈', 'Z':'🆉',
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