const sendWaiting = true; // enable or disable sending "images in progress, please wait...";
const textWaiting = "Image initialization, please wait a moment";
const fonts = "/cache/Lobster.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 15
const colorName = "#FF00FF"

module.exports.config = {
  name: "cardinfov2",
  version: "0.0.6",
  hasPermssion: 2,
  credits: "XANVIR",
  description: "facebook profile information make an canvas desing",
  commandCategory: "template",
  usages: "/cardinfo",
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
  if ((this.config.credits) != "XANVIR") { return api.sendMessage(`⚡️Detected credits have been changed`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
const Canvas = require("canvas")
  let pathImg = __dirname + `/cache/1.png`;
  let pathAvata = __dirname + `/cache/2.png`;
  /*                 */
  if (args.join().indexOf('@') !== -1){ let id = Object.keys(event.mentions) }
      else let id = args[0] || event.senderID;
      if(event.type == "message_reply") { let id = event.messageReply.senderID };
    const res = await axios.get(`https://www.nguyenmanh.name.vn/api/fbInfo?id=${id}&apikey=ogDIVInu`); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${id}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/AJdZtK9.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 80, 73, 295, 295);
  
    var gender = res.data.result.gender == 'male' ? "Suxs" : res.data.result.gender == 'female' ? "Female" : "sorry";
var name = res.data.result.name;
  var birthday = res.data.result.birthday ? `${res.data.result.birthday}` : "missing";
    
var love = res.data.result.love ? `${res.data.result.love}` : "not find 6x"
var relationship = res.data.result.relationship ? `${res.data.result.relationship}` : "missing"
  
  var location = res.data.result.location ? `${res.data.result.location}` : "sorry"
	
var hometown = res.data.result.hometown ? `${res.data.result.hometown}` : "Where are you from but don't know?"
   
 var link = res.data.result.profileUrl;
  
Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Lobster"
    });
  ctx.font = `${fontsInfo}px Lobster`;
  ctx.fillStyle = "#FFEC8B";
  ctx.textAlign = "start";
  fontSize = 15;
  ctx.fillText(`${name}`,680, 163);
  ctx.fillText(`${name}`, 590, 205);
  ctx.fillText(`${name}`, 590, 244);
  ctx.fillText(`${love}`, 590, 279);
  ctx.fillText(`${birthday}`, 590, 318);
  ctx.fillText(`${location}`, 590, 354);
  ctx.fillText(`${id}`, 590, 393);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#F08080";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`» Profile: ${link}`, 19, 468);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { body: `🇧🇩 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 😘 𝐏𝐑𝐎𝐅𝐈𝐋𝐄-𝐀𝐏𝐈 👉 𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗🔥`,attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

 