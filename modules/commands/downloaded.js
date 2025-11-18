module.exports.config = {
    name: "download",
    version: "1.1.12",
    hasPermssion: 0,
    credits: "",
    description: "",
    commandCategory: "media",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
module.exports.run = async function ({ event, api, args, Users }) {
 switch (args[0].toLowerCase()) {
    case "facebook":
       const link = args[1];
  try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
const res = await axios.get(`https://ok--lexi-fex.repl.co/api/downloader/facebook?url=${link}&apikey=beta`);
var url = res.data.result.link.hd;
var callback = () => api.sendMessage({body:`❐-  𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 👉𝐀𝐏𝐈-𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗 🌺`,attachment: fs.createReadStream(__dirname + "/cache/fab.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fab.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/fab.mp4')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("🫠💔", event.threadID);
    }  
      break;
     
    case "reel":
      try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
    const link = args[1];
 const res = await axios.get(`https://ok--lexi-fex.repl.co/api/downloader/facebook?url=${link}&apikey=beta`);
var url = res.data.result.link.hd;
       var callback = () => api.sendMessage({body:`❐-  𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 👉𝐀𝐏𝐈-𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗 🌺`,attachment: fs.createReadStream(__dirname + "/cache/reel.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/reel.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/reel.mp4')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("💔🫠", event.threadID);
    }
      break;
  default:
     break;
}
  }