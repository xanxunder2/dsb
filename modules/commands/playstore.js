module.exports.config = { usePrefix: true,
  name: "dbc2",
  version: "0.0.6",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "dbc fake news poster template",
  commandCategory: "NEWS_DBC",
  usages: "/dbc sorry",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 0
};
module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);
    const words = text.split(' ');
    const lines = [];
    let line = '';
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
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = '';
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
} 


module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  //CALL CREDIT SERVER//
  const server = await axios.get(`https://server--credit-6x.repl.co/credit`);
//IMG HOSTING// 
  let dbcbg = __dirname + "/cache/putkimariBG.png";
  let dbcextpp = __dirname + "/cache/fucker6X.png";
  //var calling//
  var dbccr = server.data.dbc;
  var text = args.join(" ");
  var url = event.messageReply.attachments[0].url || args.join(" ");
//BACKGROUND IMAGE CALL//
  var background = "https://i.imgur.com/SUt1tsm.jpg";
  let getEXTPP = (
    await axios.get(
      `${url}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(dbcextpp, Buffer.from(getEXTPP, "utf-8"));
  //CALL BACKGROUND CONTROL//
   let getbackground = (
    await axios.get(`${background}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(dbcbg, Buffer.from(getbackground, "utf-8"));
// CALLING LET PATH//
  let dbcimg = await loadImage(dbcbg);
  let dbcPP1 = await loadImage(dbcextpp);
  let canvas = createCanvas(dbcimg.width, dbcimg.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(dbcimg, 0, 0, canvas.width, canvas.height);
  //CALL CTX SQUARE/CIRCLE//
  ctx.font = "400 26px  SVN-Arial 2";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  let fontSize = 26;
  while (ctx.measureText(text).width > 2250) {
    fontSize--;
    ctx.font = `400 ${fontSize}px SVN-Arial2`;
  }
  const lines = await this.wrapText(ctx, text, 390);//text splitting//
  ctx.fillText(lines.join('\n'), 60, 345);//text position//CTX
  ctx.beginPath();
  ctx.drawImage(dbcPP1, 39,66, 402, 240);
  //IMAGE BUFFERING//
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(dbcbg, imageBuffer);
  fs.removeSync(dbcextpp);
  return api.sendMessage({ body: `❐ ${dbccr}\n\n𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧:「 𝗥𝘅 𝗣𝗮𝘃𝗲𝗹 𝗜𝘀𝗹𝗮𝗺 」`, attachment: fs.createReadStream(dbcbg) },
      event.threadID,
      () => fs.unlinkSync(dbcbg),
      event.messageID);
    }
