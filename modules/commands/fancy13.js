module.exports.config = {
  name: 'fancy13',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'stylish text making with tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/fancy13 Its me tanvir 6x robot ',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { threadID, messageID, senderID, body } = event;
  //Trying //
  const tr = {'a':'𝙖', 'b':'𝙗', 'c':'𝙘', 'd':'𝙙',  'e':'𝙚','f':'𝙛', 'g':'𝙜', 'h':'𝙝', 'i':'𝙞', 'j':'𝙟', 'k':'𝙠','l':'𝙡', 'm':'𝙢', 'n':'𝙣', 'o':'𝙤', 'p':'𝙥', 'q':'𝙦', 'r':'𝙧', 's':'𝙨', 't':'𝙩','u':'𝙪','v':'𝙫','w':'𝙬'a, 'x':'𝙭', 'y':'𝙮', 'z':'𝙯','A':'𝘼', 'B':'𝘽', 'C':'𝘾', 'D':'𝘿',  'E':'𝙀','F':'𝙁', 'G':'𝙂', 'H':'𝙃', 'I':'𝙄', 'J':'𝙅', 'K':'𝙆', 'L':'𝙇', 'M':'𝙈', 'N':'𝙉', 'O':'𝙊', 'P':'𝙋', 'Q':'𝙌', 'R':'𝙍', 'S':'𝙎', 'T':'𝙏', 'U':'𝙐', 'V':'𝙑', 'W':'𝙒', 'X':'𝙓', 'Y':'𝙔', 'Z':'𝙕', '0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗',};
  //trying//

  var ip = "❐ Please Type your text or replay other's message😊🖤";
  const steping = ip
  .split('')
  .map(char => tr[char] || char) // Replace characters with stylized versions
  .join('');
  //ensmds//
  var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender})
  const inputText = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  if (!inputText) return api.sendMessage(`${steping}`, event.threadID, event.messageID);

  const fontMap = {'a':'𝙖', 'b':'𝙗', 'c':'𝙘', 'd':'𝙙',  'e':'𝙚','f':'𝙛', 'g':'𝙜', 'h':'𝙝', 'i':'𝙞', 'j':'𝙟', 'k':'𝙠','l':'𝙡', 'm':'𝙢', 'n':'𝙣', 'o':'𝙤', 'p':'𝙥', 'q':'𝙦', 'r':'𝙧', 's':'𝙨', 't':'𝙩','u':'𝙪','v':'𝙫','w':'𝙬', 'x':'𝙭', 'y':'𝙮', 'z':'𝙯','A':'𝘼', 'B':'𝘽', 'C':'𝘾', 'D':'𝘿',  'E':'𝙀','F':'𝙁', 'G':'𝙂', 'H':'𝙃', 'I':'𝙄', 'J':'𝙅', 'K':'𝙆', 'L':'𝙇', 'M':'𝙈', 'N':'𝙉', 'O':'𝙊', 'P':'𝙋', 'Q':'𝙌', 'R':'𝙍', 'S':'𝙎', 'T':'𝙏', 'U':'𝙐', 'V':'𝙑', 'W':'𝙒', 'X':'𝙓', 'Y':'𝙔', 'Z':'𝙕', '0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗',};

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
