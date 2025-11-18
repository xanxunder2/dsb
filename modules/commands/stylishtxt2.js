module.exports.config = {
    name: "stylishtxt2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "Stylish text making for ai 6X",
    commandCategory: "game",
    usages: "❐- 6Xserver busy🥺💔",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
  text = text.replace(/\./g, `ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ`)
  .replace(/a/g, `ᴀ`  ) .replace(/b/g, `ʙ`)
    .replace(/c/g, `ᴄ`)
    .replace(/d/g, `ᴅ`)
    .replace(/e/g, `ᴇ`)
    .replace(/f/g, `ꜰ`)
    .replace(/g/g, `ɢ`)
    .replace(/h/g, `ʜ`)
    .replace(/i/g, `ɪ`)
    .replace(/j/g, `ᴊ`)
    .replace(/k/g, `ᴋ`)
   . replace(/l/g,`ʟ`)
    .replace(/m/g, `ᴍ`)
    .replace(/n/g, `ɴ`)
    .replace(/o/g, `ᴏ`)
    .replace(/p/g, `ᴘ`)
    .replace(/q/g, `Q`)
    .replace(/r/g, `ʀ`)
    .replace(/s/g, `ꜱ`)
    .replace(/t/g, `ᴛ`)
    .replace(/u/g, `ᴜ`)
    .replace(/v/g, `ᴠ`)
    .replace(/w/g, `ᴡ`)
    .replace(/x/g, `x`)
    .replace(/y/g, `ʏ`)
    .replace(/z/g, `ᴢ`)
    .replace(/🙂/g, `　`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"", event.threadID, event.messageID);
}