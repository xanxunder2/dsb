module.exports.config = {
  name: "fonttranslate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ulol",
  description: "English",
  commandCategory: "translator",
  usages: "[Text]",
  cooldowns: 5,
  dependencies: {
    "request":  ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const request = global.nodemodule["request"];
  var content = args.join(" ");
  if (content.length == 0 && event.type != "message_reply") return global.utils.throwError(this.config.name, event.threadID, event.messageID);

  // Mapping for font text to normal text
  const fontText = "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯 𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕";
  const normalText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const translationTable = Object.fromEntries([...fontText].map((c, i) => [c, normalText[i]]));

  var translateThis = content.slice(0, content.indexOf(" ->"));
  var lang = content.substring(content.indexOf(" -> ") + 4);
  if (event.type == "message_reply") {
    translateThis = event.messageReply.body;
    if (content.indexOf("-> ") !== -1) lang = content.substring(content.indexOf("-> ") + 3);
    else lang = 'bn';
  } else if (content.indexOf(" -> ") == -1) {
    translateThis = content.slice(0, content.length);
    lang = 'bn';
  }

  // Translate the font text to normal text
  translateThis = translateThis.split('').map(char => translationTable[char] || char).join('');

  return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${translateThis}`), (err, response, body) => {
    if (err) return api.sendMessage("translate", event.threadID, event.messageID);
    var retrieve = JSON.parse(body);
    var text = '';
    retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0];
    api.sendMessage(`${text}`, event.threadID, event.messageID);
  });
}
