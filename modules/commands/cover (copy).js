module.exports.config = {
    name: "cover2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "Facebook Cover Photo Design",
    commandCategory: "image",
    usages: "tanvir ahmed, tanvir_6x,01760226034,Sylhet Bangladesh, tanvir6x@gmail,yellow",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    const fs = require("fs-extra");
    const request = require("request");
	 const { threadID, messageID, senderID, body } = event; 
  var uid = Object.keys(event.mentions)[0] || event.senderID;
var info = await api.getUserInfo(event.senderID);
  var tle = Math.floor(Math.random() * 101);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
try {
const content = args.join(" ").split(",").map(item => item = item.trim());
let name1 = content[0]
let name2 = content [1] || "Missing";
let name3 = content [2] || "Missing";
let name4 = content [3] || "Missing";
let name5 = content [4] || "Missing";
let name6 = content [5] || "Missing";
api.sendMessage(`___𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚𝐢𝐤𝐮𝐦-🌺🖤\n\n ${nameSender},\n\nTANVIR_6X Template Designing Almost ${tle}% Done🌸`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 5000));
if (!args[0])
    return api.sendMessage("< Fbcover Using Example >\n\n"+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:`❐-𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑 & 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐁𝐘😘\n-------------------------------------------------------------------------\n🙋‍♂️𝐍𝐀𝐌𝐄: ${name1}\n\n🫰 𝐒𝐔𝐁𝐍𝐀𝐌𝐄: ${name2}\n\n📌  𝐈𝐃: ${senderID}\n\n📂 𝐍𝐔𝐌𝐁𝐄𝐑: ${name3}\n\n🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: ${name4}\n\n📧 𝐄𝐌𝐀𝐈𝐋: ${name5}\n\n🌈 𝐂𝐎𝐋𝐎𝐑: ${name6}\n-------------------------------------------------------------------------\n${nameSender} Thanks For Using 𝐓𝐀𝐍𝐕𝐈𝐑_6𝐗 Robot\n-------------------------------------------------------------------------\n　　🇧🇩-𝐂𝐎𝐕𝐄𝐑-𝐄𝐃𝐈𝐓𝐎𝐑-𝐀𝐏𝐈👉𝐓𝐀𝐍𝐕𝐈𝐑_6𝐗🔥`,mentions: arraytag,     attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://okay--s5-t4nv1r-6x.repl.co/fbcover/v4?name=${name1}&subname=${name2}&uid=${uid}&sdt=${name3}&address=${name4}&email=${name5}&color=${name6}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("sorry 6x server busy🙂💔", event.threadID, event.messageID)
}   
}}