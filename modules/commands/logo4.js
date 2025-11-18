module.exports.config = {
    name: "logo4",
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
if (!args[0])
    return api.sendMessage("Wrong format!\nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:"🇧🇩LOGO-EDITOR-API👉TANVIR_6X",                            attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://okay--s1-fucx-6x.repl.co/api/canvas/logo4?teks1=${name1}&teks2=${name2}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("sorry 6x server busy🙂💔", event.threadID, event.messageID)
}   
}}