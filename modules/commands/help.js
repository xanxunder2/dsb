module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "تنفير احمد",
	description: "😘",
	commandCategory: "system",
	usages: "module name",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 100
	}
  
};

module.exports.languages = {
	"en": {
		"moduleInfo": "≺━━━━━━━━━━━━◉━━━━━━━━━━━━≻\n 📝 Name : %1\n\n ⚙️ Permission :  %6 \n\n 🔖 Credits : 𝐒𝐈_𝐓𝐀𝐍𝐕𝐈𝐑_𝟲𝐗 (تنفير احمد) \n\n  📂 Description :  %2 \n\n  🪧Category :  %4 \n\n 📡 usages :  %3 \n\n ♻️ cooldowns :  %5 seconds(s) \n≺━━━━━━━━━━━━◉━━━━━━━━━━━━≻",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += ` ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join('  ')}\n\n`);
  
    return axios.get('').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100053660923670";
      
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:``, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 100);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
		if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 15;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
   }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `├⪦ ❐     [ ${++i} ]=> ${prefix}${item}\n`;
    
    const siu = `🎀𝘾𝙐𝙍𝙍𝙀𝙉𝙏𝙇𝙔 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎🎀\n\n⚡ 𝐓𝐡𝐢𝐬 𝐢𝐬 𝐓𝐚𝐧𝐯𝐢𝐫 𝐑𝐨𝐛𝐨𝐭 𝐒𝐲𝐬𝐭𝐞𝐦 ⚡\n┌────────────────────────⭓`;
    
 const text = `└───────────────────────────────⧕\n\🕋 Islamic Command Available 🌺\n\n🎗️Section No: [ ${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)} ] 🎗️
┌────────────────────────⭓\n├⪦ ❐    ${prefix}islam\n├⪦ ❐    ${prefix}Quran\n├⪦ ❐    ${prefix}ghazal\n├⪦ ❐    ${prefix}Hadith\n├⪦ ❐    ${prefix}surah\n└───────────────────────────────⧕\n🔖 [ DEVELOPED BY☄️SI TANVIR 6X ]\n\n
🔗  Facebook=> https://m.me/100073314773850\n\n📧 E-mail=> nurinakther7680@gmail.com\n\n⚡️More new commands will be added inshallah 💝`;
    var link = [
      "https://i.ibb.co/fMhh6N5/OIG-jt-KTvw-MRu-Ky-Kx60x.jpg",
      "https://i.ibb.co/Vg0y362/OIG-18.jpg",
      "https://i.ibb.co/4t4SYW0/OIG-19.jpg",
      "https://i.ibb.co/zftPKsv/OIG-20.jpg",
      "https://i.ibb.co/jk3R1my/OIG-21.jpg",
      "https://i.ibb.co/RQ3pDCn/OIG-22.jpg"
    ]
     var callback = () => api.sendMessage({ body: siu + "\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close",() => callback());
	} 
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [ "https://i.ibb.co/fMhh6N5/OIG-jt-KTvw-MRu-Ky-Kx60x.jpg",
              "https://i.ibb.co/Vg0y362/OIG-18.jpg",
              "https://i.ibb.co/4t4SYW0/OIG-19.jpg",
              "https://i.ibb.co/zftPKsv/OIG-20.jpg",
              "https://i.ibb.co/jk3R1my/OIG-21.jpg",
              "https://i.ibb.co/RQ3pDCn/OIG-22.jpg" ] 
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close", () => callback());
};
