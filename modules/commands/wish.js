module.exports.config = {
  name: "wish",
  version: "0.0.6",
  hasPermssion: 0,
  credits: "𝐓𝐀𝐍𝐕𝐈𝐑_6𝐗",
  description: "your friend birthday wish with my robot 🤙😘",
  commandCategory: "wish",
  usages: "i love you bbz😘❤️‍🩹",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 0
};

module.exports.wrapText = (ctx, name, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(name).width < maxWidth) return resolve([name]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = name.split(' ');
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
  let pathImg = __dirname + "/cache/background.png";
  let pathAvt1 = __dirname + "/cache/Avtmot.png";
  
 const { threadID, messageID, senderID, body } = event;
  const ser = await axios.get(`https://server.credit-6x.repl.co/credit`);
  var dw = ser.data.brithday_wish_api;
  var l = ser.data.line;
  var info = await api.getUserInfo(event.senderID);
  var id = Object.keys(event.mentions) || args.join(" ");
  if (!id[0]) return api.sendMessage("<= যার বার্থডে উইশ করবা!  তাকে মেনশন করো ❤️‍🩹🤙 =>", threadID, messageID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender})
  var name = (await Users.getData(id)).name || " missing";
var ThreadInfo = await api.getThreadInfo(event.threadID);
  
  var background = [

    "https://i.ibb.co/T2m7Z0V/xDZBh8o.jpg"
];
  var rd = background[Math.floor(Math.random() * background.length)];
  
  let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  
  let baseImage = await loadImage(pathImg);
  let baseAvt1 = await loadImage(pathAvt1);
 
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "400 23px Arial";
	  ctx.fillStyle = "#ffffff";
	  ctx.textAlign = "start";
	  
	  
	  const lines = await this.wrapText(ctx, name, 500);
	  ctx.fillText(lines.join(''), 145,470);//comment
	  ctx.beginPath();


  ctx.drawImage(baseAvt1, 259, 133, 180, 230);
  
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvt1);
  return api.sendMessage({ body: `‎❐ 𝙃𝙀𝙍𝙀 𝙄𝙎 𝙔𝙊𝙐𝙍 𝘽𝙍𝙄𝙏𝙃𝘿𝘼𝙔 𝘾𝘼𝙍𝘿 & 𝘾𝘼𝙋𝙏𝙄𝙊𝙉 😊🖤\n${l}\n___𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚𝐢𝐤𝐮𝐦-🌺🖤\n\nসুন্দর এই পৃথিবীতে সুন্দরতম জীবন হোক তোমার,\nপূরণ হোক প্রতিটি স্বপ্ন, প্রতিটি আশা,\nবেঁচে থাকো হাজার বছর ধরে।\n\n ~শুভ জন্মদিন~ ${name}🎊\n\n🎁 শুভেচ্ছান্তে: ${nameSender}\n${l}\n${nameSender} 🤗\nThanks for Using Our ${global.config.BOTNAME}🤗\n${l}\n${dw}`,mentions: arraytag,            attachment: fs.createReadStream(pathImg) },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID);
    }





