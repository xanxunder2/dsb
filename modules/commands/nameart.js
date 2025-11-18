const API ="https://s1--s3x-6x.repl.co/api/maker/attp?apikey=e9ffe3a5&text="
module.exports.config = {
	name: "nameart",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TANVIR 6X",
	description: "awesome Name art edit 6X🔖",
	commandCategory: "Editor😴",
	usages: "6X<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
  const god = ["100053660923670","100031920160760"];
  if (!god.includes(event.senderID)) 
return api.sendMessage("SI TANVIR 6X only can use this command", event.threadID, event.messageID);
    alextanvir = args.join(" ");
    (event.type == "message_reply") ? alextanvir = event.messageReply.attachments[0].url: alextanvir = args.join(" ");
    const pathsave = __dirname + `/cache/banner.gif`;
    let imageBuffer;
    api.sendMessage("YOUR TEXT ALREADY APPROVED 6X SERVER☺️\n\nPLEASE WAIT FOR YOUR FINAL RESULT", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(alextanvir)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `🌺 NAME-ART EDIT👉 API -TANVIR🌺`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`sorry 6x server busy😓🥹`, event.threadID, event.messageID);
        })
};
