module.exports.config = {
	name: "exam",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "愚かな切断者",
	description: "𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧",
	commandCategory: "system",
	usages: "module name",
	cooldowns: 1,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 300
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": "",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("exam") != 0) return;
	const splitBody = body.slice(body.indexOf("exam")).trim().split(/\s+/);
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
    group.forEach(commandGroup => msg += `☂︎ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);
  
    return axios.get('https://apikanna.maduka9.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100053660923670";
      
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧\n\n` + msg + `\nSpamming the bot are strictly prohibited\n\nTotal Commands: ${commands.size}\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥:https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
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
    const numberOfOnePage = 1;
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    
    for (let cmds of helpView) msg += `⚡ 𝐓𝐡𝐢𝐬 𝐢𝐬 𝐞𝐱𝐚𝐦𝐩𝐥𝐞 𝐏𝐚𝐠𝐞 𝐨𝐟 𝐭𝐚𝐧𝐯𝐢𝐫 𝟔𝐗 ⚡`;
    
    const siu = `🎀𝙇𝙀𝘼𝙍𝙉 𝙃𝙊𝙒 𝙏𝙊 𝙐𝙎𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙁𝙍𝙊𝙈 𝙃𝙀𝙍𝙀🎀`;
    
 const text = `\n\n❐-/x -bangla voice 🔥\n 　　 example:-> /x আমি তোমাকে ভালবাসি \n 
<------------------------------------------------------------------------------->\n 
❐-/en - English Voice🔥\n　　 example:-> /en I Love  you\n 
<------------------------------------------------------------------------------->\n 
❐-/ar - Arabic Voice🔥\n 　　 example:-> /ar السلام عليكم\n 
<------------------------------------------------------------------------------->\n 
❐-/vi - Vietnamese Voice🔥\n 　　 example:-> /vi Anh Yêu Em\n 
<------------------------------------------------------------------------------->\n 
❐-/fr -frans voice 🔥\n 　　example:-> /fr Je t'aime\n 
<------------------------------------------------------------------------------->\n 
❐-/arabic - Any Text Arabic Translate 🔥\n\n  　　 Reply any text -> /arabic\n \n 
<------------------------------------------------------------------------------->\n 
❐-/bangla - Any Text Bangla Translate🔥\n \n 　　 Reply any text -> /bangla\n
<------------------------------------------------------------------------------->\n
❐-/english- Any Text English  Translate🔥\n\n　　 Reply any text -> /English\n
<------------------------------------------------------------------------------->\n
❐-/hindi - Any Text Hindi Translate🔥\n\n　　 Reply any text -> /hindi\n
<------------------------------------------------------------------------------->\n
❐-/spotify - Spotify Any Song Direct 🔥\n\n 　　 example:-> /spotify kasariya song\n
<------------------------------------------------------------------------------->\n
❐-/song - Youtube song,! 🔥\n\n 　　 example:-> /song kasariya song\n
<------------------------------------------------------------------------------->\n
❐-/video - YouTube Any Video 🔥\n\n　　example:-> /video kasariya song video\n
<------------------------------------------------------------------------------->\n
❐-/lofi - Love Status Short Video 🔥\n\n　　 example:-> /lofi\n
<------------------------------------------------------------------------------->\n
❐-/pair - Try it once🔥\n\n　　 example:-> /pair\n
<------------------------------------------------------------------------------->\n
❐-/love - love person tied in a frame 🔥\n\n　　 example:-> /love @Md Shariful Islam\n
<------------------------------------------------------------------------------->\n
❐-/fbcover - Facebook Cover Design 🔥\n\n　　example:-> /fbcover MD Shariful\n
<------------------------------------------------------------------------------->\n
❐-/fbcoverv2 - New Design Template 🔥\n\n　　example:-> /fbcoverv2 MD Shariful\n
<------------------------------------------------------------------------------->\n
❐-/fbcoverv3 - New Design Template 🔥\n\n　　example:-> /fbcoverv3 MD Shariful\n
<------------------------------------------------------------------------------->\n
❐-/fbcoverv4 - New Design Template 🔥\n\n　　 example:-> /fbcoverv4 MD Shariful\n     
<------------------------------------------------------------------------------->\n
❐-/edit - Awesome Name  Edit 🔥\n\n　　example:-> /edit Tanvir 6x\n
<------------------------------------------------------------------------------->\n
❐-/graf - Name Edit🔥\n\n　　example:-> /graf Tanvir 6x\n
<------------------------------------------------------------------------------->\n
❐-/logo - Extractive Logo Design🔥\n\n　　example:-> /logo 6x\n
<------------------------------------------------------------------------------->\n
❐-/NID - New Psd File Editable 🔥\n\n　　example:-> /NID MD.SARIFUL ISLAM\n
<------------------------------------------------------------------------------->\n
❐-/sms- Sms Bombing 🔥\n\n　　example:-> /sms 01700000999 > 10\n
<------------------------------------------------------------------------------->\n
❐-/tempmail - Unlimited Fack E-mail 🔥\n\n　　example:-> /tempmail new\n
<------------------------------------------------------------------------------->\n
❐-/chatgpt  -Any problem Slove Google 🔥\n\n　　example:-> /bot make a website make html code\n
<------------------------------------------------------------------------------->\n
❐-/removebg -Any Photo background removed 🫣🔥\n\n　　Reply any photo:-> /removebg\n
<------------------------------------------------------------------------------->\n
❐-facebook - Facebook Vudeo Download [Audio | Video ] .🔥\n\n　　example:-> /facebook [ audio | video ] Link\n
<------------------------------------------------------------------------------->\n
❐-/time - World Time 🔥\n\n　　example:-> /time Bangladesh\n
<------------------------------------------------------------------------------->\n
❐-/math - Solve Mathematics🔥\n\n　　 example:-> /math 1212+6767\n
<------------------------------------------------------------------------------->\n
❐-/ss - full Link Page Screenshots🔥v\n　　 example:-> /ss https://www.google.com\n
<------------------------------------------------------------------------------->\n
❐-/uid - Link to your own ID.🔥\n\n　　 example:-> /uid or /uid @Md Shariful Islam\n
<------------------------------------------------------------------------------->\n
❐-/report - If there is a complaint about the bot.💔🙂\n\n　　example:->/report dear admin we cannot use your bot\n\n𝐎𝐰𝐧𝐞𝐫: 𝙼𝚍 𝚂𝚑𝚊𝚛𝚒𝚏𝚞𝚕 𝙸𝚜𝚕𝚊𝚖 𝚃𝚊𝚗𝚟𝚒𝚛\n\𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗  𝚙𝚛𝚘𝚏𝚒𝚕𝚎:-!\nhttps://its.tanvir-ahmed.repl.co/\n\n⚡️𝙈𝙤𝙧𝙚 𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣⚡️`;
    var link = [
"https://i.ibb.co/8PbVtQk/20230212-222435.jpg",
"https://i.ibb.co/nb8VT7Q/20230212-222422.jpg",
"https://i.ibb.co/SK9gsGC/20230212-222347.jpg",
"https://i.ibb.co/Cv6G9mQ/20230212-222253.jpg",
"https://i.ibb.co/bmprrbb/20230212-001918.jpg",
"https://i.ibb.co/LpC86Pr/20230212-001524.jpg",
    ]
     var callback = () => api.sendMessage({ body: siu + "\n\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close", () => callback());
	} 
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [
"https://i.ibb.co/8PbVtQk/20230212-222435.jpg",
"https://i.ibb.co/nb8VT7Q/20230212-222422.jpg",
"https://i.ibb.co/SK9gsGC/20230212-222347.jpg",
"https://i.ibb.co/Cv6G9mQ/20230212-222253.jpg",
"https://i.ibb.co/bmprrbb/20230212-001918.jpg",
"https://i.ibb.co/LpC86Pr/20230212-001524.jpg",
    ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close", () => callback());
};
