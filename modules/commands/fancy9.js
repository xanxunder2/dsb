module.exports.config = {
  name: 'fancy9',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy9 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'ል', 'b':'ጌ', 'c':'ር', 'd':'ዕ', 'e':'ቿ', 'f':'ቻ', 'g':'ኗ', 'h':'ዘ', 'i':'ጎ', 'j':'ጋ', 'k':'ጕ', 'l':'ረ', 'm':'ጠ', 'n':'ክ', 'o':'ዐ', 'p':'የ', 'q':'ዒ', 'r':'ዪ', 's':'ነ', 't':'ፕ', 'u':'ሁ', 'v':'ሀ', 'w':'ሠ', 'x':'ሸ', 'y':'ሃ', 'z':'ጊ','A':'ል', 'B':'ጌ', 'C':'ር', 'D':'ዕ', 'E':'ቿ', 'F':'ቻ', 'G':'ኗ', 'H':'ዘ', 'I':'ጎ', 'J':'ጋ', 'K':'ጕ', 'L':'ረ', 'M':'ጠ', 'N':'ክ', 'O':'ዐ', 'P':'የ', 'Q':'ዒ', 'R':'ዪ', 'S':'ነ', 'T':'ፕ', 'U':'ሁ', 'V':'ሀ', 'W':'ሠ', 'X':'ሸ', 'Y':'ሃ', 'Z':'ጊ',
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