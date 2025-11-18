module.exports.config = {
name: "fbcoverv2",
version: "1.0.0",
hasPermssion: 0,
credits: "SI TANVIR 6X",
description: "Create facebook service style cover photo",
commandCategory: "Tạo ảnh",
usages: "Create facebook service style coverphoto",
cooldowns: 0,
dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": ""
 }
};
module.exports.run = async function ({ api, args, event, permssion }) {
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage('🇧🇩 Hey Bro Fast system run With> Your Name 🫤\nExample>> /fbcoverv2 Md Shariful Islam', threadID, messageID)
  else return api.sendMessage(`😘Your Name Accept In My Template ✅\n\nNow Reaply Your Nickname ✌️`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "alex1",
        name: `fbcoverv2`,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  module.exports.circle = async (image) => {
    const jimp = require("jimp")
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
  if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  let pathImg = __dirname + `/cache/${senderID+20}.png`;
  let pathAva = __dirname + `/cache/${senderID+30}.png`;
  let pathLine = __dirname + `/cache/${senderID+40}.png`;
  const path = require("path")
  const Canvas = require("canvas")
  const __root = path.resolve(__dirname, "cache");
  var tenchinh = handleReply.tenchinh;
  //=================CONFIG TEXT=============//
  switch (handleReply.type) {
    case "alex1": {
      var tenchinh = handleReply.tenchinh;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`😘Your Nickname Received This System  ☑️\n\nNow Reaply Your PhoneNumber 👈`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "alex2",
          name: `fbcoverv2`,
          author: senderID,
          alex1: event.body,
          tenchinh: tenchinh,
          messageID: info.messageID
        });
      },messageID)
    }
    case "alex2": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`😘Your Number Seding To Our Project  ♻️\n\nNow Reaply Your Email Address 👈`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "email",
          name: `fbcoverv2`,
          author: senderID,
          alex2: event.body,
          tenchinh: handleReply.tenchinh,
          alex1: handleReply.alex1,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "email": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`😘Your E-mail Address Apply  this project  ✔️\n\nNow Reaply Your Address 👈`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "color",
          name: `fbcoverv2`,
          author: senderID,
          alex2: handleReply.alex2,
          tenchinh: handleReply.tenchinh,
          alex1: handleReply.alex1,
          email: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`😘Your Address Almost Taking My Project  🤗\nNow Reaply your Choices Color🔥`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "create",
          name: `fbcoverv2`,
          author: senderID,
          alex2: handleReply.alex2,
          tenchinh: handleReply.tenchinh,
          alex1: handleReply.alex1,
          diachi: event.body,
          email: handleReply.email,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "create": {
      var color = event.body
      if (color.toLowerCase() == "no") var color = `#ffffff`
      var address = handleReply.diachi.toUpperCase()
      var name = handleReply.tenchinh.toUpperCase()
      var email = handleReply.email.toUpperCase()
      var subname = handleReply.alex1.toUpperCase()
      var phoneNumber = handleReply.alex2.toUpperCase()
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`🌸 Template Designing Almost 95% Done🌸`,threadID, (err, info) => {
      setTimeout(() => {
              api.unsendMessage(info.messageID);
     }, 1000);
          }, messageID);
      //=================CONFIG IMG=============//
      let avtAnime = (
        await axios.get(encodeURI(
          `https://graph.facebook.com/${senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`),
          { responseType: "arraybuffer" }
        )
      ).data;
      let background = (
        await axios.get(encodeURI(`https://i.ibb.co/qCw0xyD/Newcover6xv2beground.jpg`), {
          responseType: "arraybuffer",
        })
      ).data;
      let hieuung = (
        await axios.get(encodeURI(`https://i.ibb.co/BPR0Qpk/Newdesingmask6x.png`), {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
      fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
      fs.writeFileSync(pathLine, Buffer.from(hieuung, "utf-8"));
      var avatar = await this.circle(pathAva);
      //=================DOWNLOAD FONTS=============//
      if(!fs.existsSync(__dirname+`/cache/UTMAvoBold.ttf`)) { 
          let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1DuI-ou9OGEkII7n8odx-A7NIcYz0Xk9o&export=download`, { responseType: "arraybuffer" })).data;
           fs.writeFileSync(__dirname+`/cache/UTMAvoBold.ttf`, Buffer.from(getfont2, "utf-8"));
        };
      //=================DRAW BANNER=============//
      let baseImage = await loadImage(pathImg);
      let baseAva = await loadImage(avatar);
      let baseLine = await loadImage(pathLine);
      let canvas = createCanvas(baseImage.width, baseImage.height);
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      Canvas.registerFont(__dirname+`/cache/UTMAvoBold.ttf`, { family: "UTMAvoBold" });
      ctx.strokeStyle = "rgba(255,255,255, 0.2)";
      ctx.lineWidth = 3;
      ctx.font = "100px UTMAvoBold"     
      ctx.textAlign = "right"
      ctx.fillStyle = `#ffffff`
      ctx.font = "40px UTMAvoBold";
      ctx.fillText(name, 1400, 95);
      ctx.font = "40px UTMAvoBold";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "right";
      ctx.fillText(subname, 1380, 160);
      ctx.font = "35px UTMAvoBold";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "start";
      ctx.fillText(phoneNumber, 1020, 245);
      ctx.fillText(email, 1020, 332);
      ctx.fillText(address, 1020, 410);
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(baseLine, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = color
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(baseAva, 255, 115, 395, 395);
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
      return api.sendMessage(
        { 
          body: `THIS IS YOUR COVER BBY😘`,
          attachment: fs.createReadStream(pathImg) },
        threadID,messageID
      );
    }
  }
}