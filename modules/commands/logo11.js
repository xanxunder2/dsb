module.exports.config = {
    name: "logo11",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "logoeditor",
    commandCategory: "image",
    usages: "airtel-red-red-Tanvir6x-<01678934567>\n\nbKash -DeepPink-white-tanvir6x-<01760226034>\n\nnagad -red-orange-tanvir6x-<01760226034>\n\nrocket -DeepPink-white-tanvir6x-<01760226034>\n\ngrameenphone -blue-white-tanvir6x-<01760226034>\n\nteletalk -lime-green-tanvir6x-<01760226034>\n\nrobi -red-yellow-tanvir6x-<01760226034>\n\n banglalink -orange-red-tanvir6x-<01760226034>",
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
  var tle = Math.floor(Math.random() * 101);
  var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender})
try {
const content = args.join(" ").split("-").map(item => item = item.trim());
let name1 = content[0]
let name2 = content [1]
  let name3 = content [2]
  let name4 = content [3]
  let name5 = content [4]
if (!args[0])
    return api.sendMessage("<Social media logo example>\n\n "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);
api.sendMessage(`___𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚𝐢𝐤𝐮𝐦-🌺🖤\n\n ${nameSender}, I'm TANVIR-6X BOT\n\nYour [ ${name1} ] Template Designing Almost ${tle}% Done🔥`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 5000));
	 var callback = () => api.sendMessage({body:"❐-  THIS IS YOUR LOGO✌️\n🇧🇩 LOGO-EDITOR-API👉TANVIR_6X🔥",                          attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://okay--s5-t4nv1r-6x.repl.co/${name1}?color1=${name2}&color2=${name3}&tenchinh=${name5}&ten_phu=${name4}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("sorry 6x server busy🙂💔", event.threadID, event.messageID)
}   
}}