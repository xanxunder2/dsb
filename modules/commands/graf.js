module.exports.config = {
    name: "graf",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "logoeditor",
    commandCategory: "image",
    usages: "[12,TANVIR]",
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

const content = args.join(" ").split(",").map(item => item = item.trim());
let text1 = content[0]
let text2 = content [1]

if (!args[0])
    return api.sendMessage("Wrong format!\nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);
	 var callback = () => api.sendMessage({body:`❐- 𝐈𝐌𝐀𝐆𝐄 🌀 𝐃𝐄𝐒𝐈𝐆𝐍 ♻️ 𝐀 𝐏 𝐈 ☄️ 𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗🔥`,            attachment: fs.createReadStream(__dirname + "/cache/grafart6x.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/grafart6x.png"),event.messageID);
	 return request(encodeURI(`https://s1--s3x-6x.repl.co/api/textpro/6xgrafart${text1}?apikey=e9ffe3a5&text=${text2}`)).pipe(fs.createWriteStream(__dirname+'/cache/grafart6x.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("sorry 6x server busy🙂💔", event.threadID, event.messageID)
}   
}}