module.exports.config = {
    name: "logo12",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "logoeditor",
    commandCategory: "image",
    usages: "[name | name2]",
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
try {
const content = args.join(" ").split("-").map(item => item = item.trim());
let name1 = content[0]
let name2 = content [1]
  let name3 = content [2]
if (!args[0])
        api.sendMessage(`Please Wait Few Minute-downloading...`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 5000),event.messageID);

	 var callback = () => api.sendMessage({body:`❐-𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 & 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐁𝐘😘\n-------------------------------------------------------------------------\n🙋‍♂️𝐍𝐀𝐌𝐄: ${name2}\n\n🖊️ 𝐒𝐈𝐆𝐍𝐀𝐓𝐔𝐑𝐄: ${name3}\n\n📂 𝐍𝐔𝐌𝐁𝐄𝐑: ${name1}\n-------------------------------------------------------------------------\n　　🇧🇩-𝐋𝐎𝐆𝐎-𝐄𝐃𝐈𝐓𝐎𝐑-𝐀𝐏𝐈👉𝐓𝐀𝐍𝐕𝐈𝐑_6𝐗`,            attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://okay--s5-t4nv1r-6x.repl.co/canvas/avatarwibu?id=${name1}&chu_nen=${name2}&chu_ky=${name3}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("sorry 6x server busy🙂💔", event.threadID, event.messageID)
}   
}}