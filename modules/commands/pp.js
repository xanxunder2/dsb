var tanvir = "𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗";
module.exports.config = {
  name: "dp",
  version: "0.0.6",
  hasPermssion: 0,
  credits: `${tanvir}`,//respect the main owner & Developer//
  description: "Facebook profile photo download with 6X",
  commandCategory: "dp",
  usages: "hey xanu🐸",
  cooldowns: 2,
};
//start security //

module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  const ser = await axios.get(`https://server.credit-6x.repl.co/gutibaz`);
  
 if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || event.senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }
  let getWanted = (
    await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  var credit = ser.data.name;
  return api.sendMessage(
    { body: `❐ 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊  𝐏𝐑𝐎𝐅𝐈𝐋𝐄  𝐏𝐇𝐎𝐓𝐎  𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n\n                𝐖𝐈𝐓𝐇 : ${credit}`,
      attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};