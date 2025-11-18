module.exports.config = {
  name: 'fancy11',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy11 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'Ａ', 'b':'Ｂ', 'c':'Ｃ', 'd':'Ｄ', 'e':'Ｅ','f':'Ｆ', 'g':'Ｇ', 'h':'Ｈ', 'i':'Ｉ', 'j':'Ｊ', 'k':'Ｋ', 'l':'Ｌ', 'm':'Ｍ', 'n':'Ｎ', 'o':'Ｏ', 'p':'Ｐ', 'q':'Ｑ', 'r':'Ｒ', 's':'Ｓ', 't':'Ｔ', 'u':'Ｕ', 'v':'Ｖ', 'w':'Ｗ', 'x':'Ｘ', 'y':'Ｙ', 'z':'Ｚ','A':'Ａ', 'B':'Ｂ', 'C':'Ｃ', 'D':'Ｄ', 'E':'Ｅ','F':'Ｆ', 'G':'Ｇ', 'H':'Ｈ', 'I':'Ｉ', 'J':'Ｊ', 'K':'Ｋ', 'L':'Ｌ', 'M':'Ｍ', 'N':'Ｎ', 'O':'Ｏ', 'P':'Ｐ', 'Q':'Ｑ', 'R':'Ｒ', 'S':'Ｓ', 'T':'Ｔ', 'U':'Ｕ', 'V':'Ｖ', 'W':'Ｗ', 'X':'Ｘ', 'Y':'Ｙ', 'Z':'Ｚ',
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