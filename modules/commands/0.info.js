module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var tanvir = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.ibb.co/fMhh6N5/OIG-jt-KTvw-MRu-Ky-Kx60x.jpg",
           "https://i.ibb.co/Vg0y362/OIG-18.jpg",
           "https://i.ibb.co/4t4SYW0/OIG-19.jpg",
           "https://i.ibb.co/zftPKsv/OIG-20.jpg",
           "https://i.ibb.co/jk3R1my/OIG-21.jpg",
           "https://i.ibb.co/RQ3pDCn/OIG-22.jpg"];
  
var callback = () => api.sendMessage({body:`❐ ADMIN AND BOT INFORMATION  🤖

❖  BOT NAME : ${global.config.BOTNAME}

❖ BOT ADMIN : 『মোছাঃ নুরিন আক্তার』

❖ FACEBOOK : https://www.facebook.com/100073314773850

❖ INBOX: https://m.me/100073314773850

❖ BOT PREFIX : ${global.config.PREFIX}

❖ BOT OWNER : 『MS: NURIN AKTHER 🙋‍♀️』 

❖ TODAY IS TIME : ${tanvir} 

❖ BOT IS RUNNING : ${hours}:${minutes}:${seconds}(s)

❖ THANKS FOR USING >
 > ${global.config.BOTNAME} < 『😽』`,attachment: fs.createReadStream(__dirname + "/cache/tanvir.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tanvir.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tanvir.jpg")).on("close",() => callback());
   };