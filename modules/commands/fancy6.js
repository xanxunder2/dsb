module.exports.config = {
  name: 'fancy6',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy6 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'𝒜', 'b':'𝐵', 'c':'𝒞', 'd':'𝒟', 'e':'𝐸','f':'𝐹', 'g':'𝒢', 'h':'𝐻', 'i':'𝐼', 'j':'𝒥', 'k':'𝒦', 'l':'𝐿', 'm':'𝑀', 'n':'𝒩', 'o':'𝒪', 'p':'𝒫', 'q':'𝒬', 'r':'𝑅', 's':'𝒮', 't':'𝒯', 'u':'𝒰', 'v':'𝒱', 'w':'𝒲', 'x':'𝒳', 'y':'𝒴', 'z':'𝒵','A':'𝒜', 'B':'𝐵', 'C':'𝒞', 'D':'𝒟', 'E':'𝐸','F':'𝐹', 'G':'𝒢', 'H':'𝐻', 'I':'𝐼', 'J':'𝒥', 'K':'𝒦', 'L':'𝐿', 'M':'𝑀', 'N':'𝒩', 'O':'𝒪', 'P':'𝒫', 'Q':'𝒬', 'R':'𝑅', 'S':'𝒮', 'T':'𝒯', 'U':'𝒰', 'V':'𝒱', 'W':'𝒲', 'X':'𝒳', 'Y':'𝒴', 'Z':'𝒵',
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