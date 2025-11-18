module.exports.config = {
    name: "yt",
    version: "1.1.12",
    hasPermssion: 2,
    credits: "",
    description: "",
    commandCategory: "media",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
module.exports.run = async function ({ event, api, args, Users }) {
 switch (args[0].toLowerCase()) {
    case "video":
       const link = args[1];
  try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
const res = await axios.get(`https://s1--s3x-6x.repl.co/api/dowloader/yt?url=${link}&apikey=1b48f17c`);
var url = res.data.result.mp4.result;
       var callback = () => api.sendMessage({body:`${res.data.result.title}`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp4')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("🫠💔", event.threadID);
    }  
      break;
     
    case "music":
      try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
    const link = args[1];
const res = await axios.get(`https://s1--s3x-6x.repl.co/api/dowloader/yt?url=${link}&apikey=1b48f17c`);
var url = res.data.result.mp3.result;
       var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp3"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp3')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("💔🫠", event.threadID);
    }
      break;
  default:
     break;
}
 }