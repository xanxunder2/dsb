module.exports.config = {
  name: "cd1",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "JRT mod by Clarence-DK",
  description: "Create an interesting banner image",
  commandCategory: "Create a photo",
  usages: "card [text1 - text2]",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/${senderID}.png`;
  let pathAva = __dirname + `/cache/avtuser.png`;
  let text = args.join(" ")
  if (!text) return api.sendMessage('💢Please enter the correct format [text1 - text2] ', event.threadID, event.messageID);
  const text1 = text.substr(0, text.indexOf(' - ')); 
  if (!text1) return api.sendMessage('💢Please enter the correct format [text1 - text2] ', event.threadID, event.messageID);
  const text2 = text.split(" - ").pop()
  if (!text2) return api.sendMessage('💢Please enter the correct format [text1 - text2] ',
event.threadID, event.messageID);
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://i.ibb.co/30N0Ddc/20230626-180638.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  avatar = await this.circle(pathAva);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, 3264, 2176);
  ctx.drawImage(baseAva, 0, 0, 283, 283);
  ctx.shadowBlur = 10;
  ctx.shadowColor = "blue";
  ctx.font = "bold 300px Manrope";
  ctx.fillStyle = "#ffd700";
  ctx.textAlign = "center";
  fontSize = 40;
  ctx.fillText(text1, 950, 12500);
  ctx.shadowBlur = 20;
  ctx.shadowColor = "red";
  ctx.font = "blod 400px Manrope";
  ctx.fillStyle = "#ffd700";
  ctx.textAlign = "left";
  fontSize = 50;
  ctx.fillText(text2, 1050, 1200);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};