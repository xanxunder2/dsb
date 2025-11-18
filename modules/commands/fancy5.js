module.exports.config = {
  name: 'fancy5',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making woith tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy5 Its me tanvir 6x robot ',
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
    ' ': ' ', 'a':'𝔸', 'b':'𝔹', 'c':'ℂ', 'd':'𝔻', 'e':'𝔼','f':'𝔽', 'g':'𝔾', 'h':'ℍ', 'i':'𝕀', 'j':'𝕁', 'k':'𝕂', 'l':'𝕃', 'm':'𝕄', 'n':'ℕ', 'o':'𝕆', 'p':'ℙ', 'q':'ℚ', 'r':'ℝ', 's':'𝕊', 't':'𝕋', 'u':'𝕌', 'v':'𝕍', 'w':'𝕎', 'x':'𝕏', 'y':'𝕐', 'z':'ℤ','A':'𝔸', 'B':'𝔹', 'C':'ℂ', 'D':'𝔻', 'E':'𝔼','F':'𝔽', 'G':'𝔾', 'H':'ℍ', 'I':'𝕀', 'J':'𝕁', 'K':'𝕂', 'L':'𝕃', 'M':'𝕄', 'N':'ℕ', 'O':'𝕆', 'P':'ℙ', 'Q':'ℚ', 'R':'ℝ', 'S':'𝕊', 'T':'𝕋', 'U':'𝕌', 'V':'𝕍', 'W':'𝕎', 'X':'𝕏', 'Y':'𝕐', 'Z':'ℤ',
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