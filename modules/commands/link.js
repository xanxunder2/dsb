module.exports.config = {
    name: "upload",
    version: "0.0.6",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "6X upload",
    commandCategory: "6X_HOSTING",
    usages: "[reply to any attachment]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { threadID, messageID, senderID, body } = event;

var url = event.messageReply.attachments[0].url || args.join(" ")
    if(!url) return api.sendMessage(`Please replay any attachment 🥰🖤`, event.threadID, event.messageID);

const server = await axios.get(`https://upload.xanxunder11.repl.co/dir?url=${encodeURIComponent(url)}`);    
var tanvir = server.data.url_AP;
    return api.sendMessage(`Here Is Your Hosting Port Link💖:\n\n${tanvir}`, event.threadID, event.messageID);

}