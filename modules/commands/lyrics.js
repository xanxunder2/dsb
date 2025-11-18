module.exports.config = {
  name: "lyrics",
  version: "2.0.4",
  hasPermssion: 0,
  credits: "Leiam Nash",
  description: "lyrics finder",
  commandCategory: "youtube",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}lyrics\n\nExample:\n${global.config.PREFIX}lyrics marshmallow friend\n`,
  cooldowns: 5,
  dependencies: {
            "fs-extra": "",
            "request": "",
            "axios": "",
            "youtubei.js": ""
  }
};

module.exports.run = async({api, event}) => {
	const axios = require("axios");
    const fs = require("fs-extra");
    const Innertube = require("youtubei.js");
    const request = require("request");
    let input = event.body;
 
    var text = input;
  text = text.substring(8)
let data = input.split(" ");
  
if (data.length < 2) {               return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}lyrics\n\nExample:\n${global.config.PREFIX}lyrics marshmallow friend\n\nCreated by: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘`, event.threadID, event.messageID);
}
  

data.shift()

const res = await axios.get(`https://api-saikidesu-beta.herokuapp.com/api/utility/lyrics?title=${text}&apikey=freelang`);
let saiki = Object.values(res.data.result);
           
  const youtube = await new Innertube();
 
  const search = await youtube.search(text);
if (search.videos[0] === undefined){
api.sendMessage("Error: Invalid request.",event.threadID,event.messageID)
api.setMessageReaction("❎", event.messageID, (err) => {}, true)
}else{
api.sendMessage(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n 【 ${text} 】`,  event.threadID,event.messageID);
api.setMessageReaction("✅", event.messageID, (err) => {}, true)
var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  //  api.sendMessage("A video has found!\n\nStarting to Download", event.threadID, event.messageID);
    }
  timeleft -= 1;
}, 1000);
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4',
    type: 'audio',
    audioQuality: 'lowest',
    loudnessDB: '20',
    audioBitrate: '320',
    fps: '30'
  });
  
  
stream.pipe(fs.createWriteStream(__dirname + `/cache/${event.senderID}.m4a`))

  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
    console.log(info)
  });
  stream.on('end', () => {
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
    console.info(`[DOWNLOADER] Downloaded`)
    
if (fs.statSync(__dirname + `/cache/${event.senderID}.m4a`).size > 26214400) return api.sendMessage('[ERR] The file could not be sent because it is larger than 25MB.', event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.m4a`), event.messageID);

    var message = {
          body:(""+search.videos[0].title+"\n\n𝗹𝘆𝗿𝗶𝗰𝘀:\n\n"+ saiki[3]),
         attachment:[ 
fs.createReadStream(__dirname + `/cache/${event.senderID}.m4a`)]}
           api.sendMessage(message, event.threadID,event.messageID);
  }); 
stream.on('error', (err)=> console.error('[ERROR]',err))

  stream.on('end', async () => {                                             if (fs.existsSync(__dirname + `/cache/${event.senderID}.m4a`)) {
                                    fs.unlink(__dirname + `/cache/${event.senderID}.m4a`, function (err) {
                                  if (err) console.log(err);                                        
                                  console.log(__dirname + `/cache/${event.senderID}.m4a is deleted!`);
                                                        });
                                                     }
             })
 
}
      } 
                                     
