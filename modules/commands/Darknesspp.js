var se = "TANVIR";
module.exports.config = {
  name: "drak",
  version: "1.0.1",
  hasPermssion: 0,
  credits: `${se}`,
  description: "pp banner",
  commandCategory: "banner",
  usages: "link🔥",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  var url = event.messageReply.attachments[0].url || args.join(" ");
    if(!url) return api.sendMessage('Please reply to image.', event.threadID, event.messageID);
  let getWanted = (
    await axios.get(`https://s1--s3x-6x.repl.co/api/maker/darkness?no=50&apikey=1b48f17c&url=${encodeURIComponent(url)}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  return api.sendMessage(
    { body:"🇧🇩DRAKNESS-PHOTO-EDIT-API👉TANVIR_6X🔥",
      attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};