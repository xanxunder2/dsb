module.exports.config = {
  name: 'fancy10',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy10 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'𝘈', 'b':'𝘉', 'c':'𝘊', 'd':'𝘋', 'e':'𝘌', 'f':'𝘍', 'g':'𝘎', 'h':'𝘏', 'i':'𝘐', 'j':'𝘑', 'k':'𝘒', 'l':'𝘓', 'm':'𝘔', 'n':'𝘕', 'o':'𝘖', 'p':'𝘗', 'q':'𝘘', 'r':'𝘙', 's':'𝘚', 't':'𝘛', 'u':'𝘜', 'v':'𝘝', 'w':'𝘞', 'x':'𝘟', 'y':'𝘠', 'z':'𝘡','A':'𝘈', 'B':'𝘉', 'C':'𝘊', 'D':'𝘋', 'E':'𝘌', 'F':'𝘍', 'G':'𝘎', 'H':'𝘏', 'I':'𝘐', 'J':'𝘑', 'K':'𝘒', 'L':'𝘓', 'M':'𝘔', 'N':'𝘕', 'O':'𝘖', 'P':'𝘗', 'Q':'𝘘', 'R':'𝘙', 'S':'𝘚', 'T':'𝘛', 'U':'𝘜', 'V':'𝘝', 'W':'𝘞', 'X':'𝘟', 'Y':'𝘠', 'Z':'𝘡',
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