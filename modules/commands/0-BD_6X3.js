module.exports.config = {
    name: "bd6x3",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "SI TANVIR 6X",
    description: "BD 6X SERVER",
    commandCategory: "documents",
    usages: "❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔",
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
const content = args.join(" ").split(" ").map(item => item = item.trim());
let nid = content[0]
let dob = content [1]
if (!args[0])
    return api.sendMessage(+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:"",                            attachment: fs.createReadStream(__dirname + "/cache/biden.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.jpg"),event.messageID);
	 return request(encodeURI(`https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/https://api.biometricinfo.co/servercopy.php?nid=${nid}&dob=${dob}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.jpg')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔", event.threadID, event.messageID)
}   
}}