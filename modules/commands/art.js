var se = "TANVIR";
module.exports.config = {
  name: "art",
  version: "0.0.6",
  hasPermssion: 0,
  credits: `${se}`,
  description: "Normal photo to anime style photo edit with tanvir 6x ",
  commandCategory: "banner",
  usages: "replay any photo",
  cooldowns: 1,
};
const axios = require("axios")
const fs = require("fs");
module.exports.run = async function({ api, event, args }) {
const { threadID, messageID } = event;
if (event.type == "message_reply"){
var t = event.messageReply.attachments[0].url
} else {
 var t = args.join(" ");
}
try {
api.sendMessage("", threadID, messageID);
    const r = await axios.get("https://free-api.ainz-sama101.repl.co/canvas/toanime?", {
                params: {
                    url: encodeURI(t)
    }
});
const result = r.data.result.image_data;
    let ly = __dirname+"/cache/anime.png";
    let ly1 = (await axios.get(result, {
    responseType: "arraybuffer"
  })).data;
  fs.writeFileSync(ly, Buffer.from(ly1, "utf-8"));
    return api.sendMessage({body: `❐  𝐀𝐍𝐈𝐌𝐄  𝐒𝐓𝐘𝐋𝐄  𝐏𝐇𝐎𝐓𝐎 𝐄𝐃𝐈𝐓𝐎𝐑 🔖\n\n𝐀𝐏𝐈 : 𝐒𝐈_𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗 (تنفير احمد) 🇧🇩`,
      attachment: fs.createReadStream(ly)}, threadID, () => fs.unlinkSync(ly), messageID)
  } catch (e){
        console.log(e.message);
          return api.sendMessage("Something went wrong.\n"+e.message, threadID, messageID)
   }
                                 }