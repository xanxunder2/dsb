module.exports.config = {
name: "fbcoverv3",
version: "1.0.0",
hasPermssion: 0,
credits: "SI TANVIR 6X",
description: "Create a facebook cover page",
commandCategory: "Tạo ảnh",
usages: "Create a facebook cover page",
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
  if(!args[0]) return api.sendMessage('🇧🇩 Hey  Fast system run With> Your Name 🫤\nExample>> /fbcoverv3 Md Shariful Islam', threadID, messageID)
  else return api.sendMessage(`😘Your Name Accept In My Template ✅\n\nNow Reaply Your Nickname ✌️`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "Tanvir",
        name: `fbcoverv3`,
        author: senderID,
        tanviradr: args.join(" ").toUpperCase(),
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
  var tanviradr = handleReply.tanviradr;
  //=================CONFIG TEXT=============//
  switch (handleReply.type) {
    case "Tanvir": {
      var tanviradr = handleReply.tanviradr;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Your Nickname Received This System  ☑️\n\nNow Reaply Your PhoneNumber 👈`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "tanvirtst",
          name: `fbcoverv3`,
          author: senderID,
          Tanvir: event.body,
          tanviradr: tanviradr,
          messageID: info.messageID
        });
      },messageID)
    }
    case "tanvirtst": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Your Number Seding To Our Project  ♻️\n\nNow Reaply Your Email Address 👈`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "email",
          name: `fbcoverv3`,
          author: senderID,
          tanvirtst: event.body,
          tanviradr: handleReply.tanviradr,
          Tanvir: handleReply.Tanvir,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "email": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Your E-mail Address Apply  this project  ✔️\n\nNow Reaply Your Youtube Channel 👈`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "color",
          name: `fbcoverv3`,
          author: senderID,
          tanvirtst: handleReply.tanvirtst,
          tanviradr: handleReply.tanviradr,
          Tanvir: handleReply.Tanvir,
          email: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Youtube Channel Almost Taking My Project  🤗\nNow Reaply your Choices Color🔥`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "create",
          name: `fbcoverv3`,
          author: senderID,
          tanvirtst: handleReply.tanvirtst,
          tanviradr: handleReply.tanviradr,
          Tanvir: handleReply.Tanvir,
          tanvirnm: event.body,
          email: handleReply.email,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "create": {
      var color = event.body
      if (color.toLowerCase() == "no") var color = `#ffffff`
      var address = handleReply.tanvirnm.toUpperCase()
      var name = handleReply.tanviradr.toUpperCase()
      var email = handleReply.email.toUpperCase()
      var subname = handleReply.Tanvir.toUpperCase()
      var phoneNumber = handleReply.tanvirtst.toUpperCase()
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`🌸 Template Designing Almost 98% Done🌸`,threadID, (err, info) => {
      setTimeout(() => {
              api.unsendMessage(info.messageID);
     }, 1000);
          }, messageID);
      //=================CONFIG IMG=============//
      let avtAnime = (
        await axios.get(encodeURI(
          `https://graph.facebook.com/${senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`),
          { responseType: "arraybuffer" }
        )
      ).data;
      let background = (
        await axios.get(encodeURI(`https://i.ibb.co/wgBRddS/Orginalbodyv3fbcp-tanvir6x.jpg`), {
          responseType: "arraybuffer",
        })
      ).data;
      let hieuung = (
        await axios.get(encodeURI(`https://i.ibb.co/9TJz1kh/Orginalstalkv3fbcp-tanvir6x.png`), {
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
      ctx.fillStyle = `#F57F17`
      ctx.font = "50px UTMAvoBold";
      ctx.fillText(name, 750, 360);
      ctx.font = "30px JameelNoori";
      ctx.fillStyle = "#000000";
      ctx.textAlign = "start";
      ctx.fillText(subname, 390, 400);
      ctx.font = "25px UTMAvoBold";
      ctx.fillStyle = "#000000";
      ctx.textAlign = "start";
      ctx.fillText(phoneNumber, 490, 660);
      ctx.fillText(email, 100, 660);
      ctx.fillText(address, 770, 660);
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(baseLine, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = color
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(baseAva, 1065, 178, 440, 440);
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
      return api.sendMessage(
        { 
         body: `THIS IS YOUR COVER BBY😘\n\n🖥️ TANVIR PROJECT 🖥️`,
         attachment: fs.createReadStream(pathImg) },
        threadID,messageID
      );
    }
  }
}