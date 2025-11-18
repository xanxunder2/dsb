module.exports.config = {
  name: 'fancy3',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy3 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'𝑨', 'b':'𝑩', 'c':'𝑪', 'd':'𝑫', 'e':'𝑬','f':'𝑭', 'g':'𝑮', 'h':'𝑯', 'i':'𝑰', 'j':'𝑱', 'k':'𝑲', 'l':'𝑳', 'm':'𝑴', 'n':'𝑵', 'o':'𝑶', 'p':'𝑷', 'q':'𝑸', 'r':'𝑹', 's':'𝑺', 't':'𝑻', 'u':'𝑼', 'v':'𝑽', 'w':'𝑾', 'x':'𝑿', 'y':'𝒀', 'z':'𝒁','A':'𝑨', 'B':'𝑩', 'C':'𝑪', 'D':'𝑫', 'E':'𝑬','F':'𝑭', 'G':'𝑮', 'H':'𝑯', 'I':'𝑰', 'J':'𝑱', 'K':'𝑲', 'L':'𝑳', 'M':'𝑴', 'N':'𝑵', 'O':'𝑶', 'P':'𝑷', 'Q':'𝑸', 'R':'𝑹', 'S':'𝑺', 'T':'𝑻', 'U':'𝑼', 'V':'𝑽', 'W':'𝑾', 'X':'𝑿', 'Y':'𝒀', 'Z':'𝒁',
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