var dek = "Deku";
module.exports.config = {
  name: "logo2",
  version: "1.0.1",
  hasPermssion: 1,
  credits: `${dek}`,
  description: "gfx banner",
  commandCategory: "banner",
  usages: "text",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  let text = args.join(" ");
  if (!text) {
    api.sendMessage('Please provide...TXT', threadID, messageID);
    return;
  }

  const processingGIF = (
    await axios.get(
      'https://drive.google.com/uc?export=download&id=1Im1nktqQ59ErykI7Rg-01UpKm7E951NJ',
      { responseType: 'stream' }
    )
  ).data;

  const processingMessage = await api.sendMessage(
    {
      body: 'Processing your request...',
      attachment: processingGIF,
    },
    threadID
  );
  let getWanted = (
    await axios.get(`https://okay--s1-fucx-6x.repl.co/api/canvas/logo2?teks=${text}`, {
      responseType: "arraybuffer",
    })
  ).data;
  api.unsendMessage(processingMessage.messageID);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  return api.sendMessage(
    { body:"🇧🇩LOGO-EDITOR-API👉TANVIR_6X",
      attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};