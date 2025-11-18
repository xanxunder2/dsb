module.exports.config = {
    name: "imgur",
    version: "0.0.6",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "imgur upload",
    commandCategory: "imgur",
    usages: "[reply to image /video]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];
  
var url = event.messageReply.attachments[0].url || args.join(" ");
    if(!url) return api.sendMessage('Please replay any video/audio 😊🖤', event.threadID, event.messageID);
  
const res = await axios.get(`https://okay--s5-t4nv1r-6x.repl.co/imgurupload?link=${encodeURIComponent(url)}`);    
var tanvir = res.data.uploaded.image;
    return api.sendMessage(`Here Is Your Hosting Port Link💖:\n\n${tanvir}`, event.threadID, event.messageID);

}