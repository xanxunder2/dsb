module.exports.config = {
  name: "nnc",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Hinata",
  description: "bbm memes",
  commandCategory: "memes",
  usages: "text 1 | text 2",
  cooldowns: 1
};

module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise((resolve) => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText("W").width > maxWidth) return resolve(null);
    const words = text.split(" ");
    const lines = [];
    let line = "";
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
        line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = "";
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const Canvas = global.nodemodule["canvas"];
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/drake.png`;
  const text = args.join(" ").split("🏆").map(item => item = item.trim());
  let getImage = (
    await axios.get(encodeURI(`https://i.ibb.co/89PX1Kb/20230804-195838.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getImage, "utf-8"));
if(!fs.existsSync(__dirname+'/cache/UTMAvoBold.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1DuI-ou9OGEkII7n8odx-A7NIcYz0Xk9o&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/UTMAvoBold.ttf", Buffer.from(getfont, "utf-8"));
    };
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  Canvas.registerFont(__dirname+`/cache/UTMAvoBold.ttf`, {
        family: "UTMAvoBold"
    });
  ctx.font = "130px UTMAvoBold";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "start";
  const line = await this.wrapText(ctx, text[0], 464);
  const lines = await this.wrapText(ctx, text[1], 464);
  ctx.fillText(line.join(""), 1090, 690)
  ctx.fillText(lines.join(""), 1290, 980)
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { body:`❐-  𝐍𝐍𝐂  𝐓𝐎𝐔𝐑𝐍𝐀𝐌𝐄𝐍𝐓  𝐁𝐀𝐍𝐍𝐄𝐑  𝐎𝐅  𝐋𝐔𝐃𝐔 💠`,
      attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};