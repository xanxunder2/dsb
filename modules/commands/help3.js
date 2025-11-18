module.exports.config = {
	name: "help3",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "愚かな切断者",
	description: "𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧",
	commandCategory: "system",
	usages: "module name",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 1000
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": "≺━━━━━━━━━━━━◉━━━━━━━━━━━━≻\n 📝 Name : 「 %1 」\n\n ⚙️ Permission : 「 %6 」\n\n 🔖 Credits : 「 تنفير احمد 」\n\n  📂 Description : 「 %2 」\n\  🪧Category : 「 %4 」\n\n 📡 usages : 「 %3 」\n\n ♻️ cooldowns : 「 %5 」seconds(s) \n≺━━━━━━━━━━━━◉━━━━━━━━━━━━≻",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help3") != 0) return;
	const splitBody = body.slice(body.indexOf("help3")).trim().split(/\s+/);
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

    
    for (let cmds of helpView) msg += `⚡ 𝐓𝐡𝐢𝐬 𝐢𝐬 𝐓𝐚𝐧𝐯𝐢𝐫 𝐑𝐨𝐛𝐨𝐭 𝐒𝐲𝐬𝐭𝐞𝐦 ⚡`;
    
    const siu = `🎀𝘾𝙐𝙍𝙍𝙀𝙉𝙏𝙇𝙔 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎🎀`;
    
 const text = `\n💡🔻𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 : Gʀᴏᴜᴘ Aᴅᴍɪɴ🔻💡\n\n🔹/all- count all botuser \n🔹/box - bot used all group list\n🔹 /unsent - unsent bot message \n🔹/fbuser - remove fbuser ID\n🔹/kick - Member Remove\n🔹/remove - Removed bot message\n🔹/unsend - Check Unsend Message\n\n💡🔻𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲:  Iꜱʟᴀᴍɪᴄ Cᴏᴍᴍᴀɴᴅꜱ🔻💡\n\n🔹/quran - Quran recitation \n🔹/ Hadith - Hadith Bengali\n🔹/ Surah - Islamic essential prayers.\n🔹/ Ghazal - Beautiful Ghazal\n🔹/Islamic - Maulana said some Islamic words \n🔹/ Surah - Surah of Quran Sharif \n\n💡🔻𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲: Mᴜꜱɪᴄ & Vɪᴅᴇᴏ Cᴏᴍᴍᴀɴᴅꜱ🔻💡\n\n🔹/x -bangla voice \n🔹/en - English Voice\n🔹/ar - Arabic Voice\n🔹/vi - Vietnamese Voice\n🔹/fr -frans voice \n🔹/arabic - Any Text Arabic Translate \n🔹/bangla - Any Text Bangla Translate\n🔹/english- Any Text English  Translate\n🔹/hindi - Any Text Hindi Translate\n🔹/spotify - Spotify Any Song Direct \n🔹/song - Youtube song,! \n🔹/video - YouTube Any Video \n🔹/facebook -Facebook Audio & Video Download \n🔹/v2a - Any video convert audio \n🔹/lofi - Love Status Short Video \n🔹/downloading - any video audio photo download from Messenger 🫣\n🔹/pair - Try it once\n🔹/love - love person tied in a frame \n\n💡🔻𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲: Pʜᴏᴛᴏ Eᴅɪᴛ & Gʀᴀᴘʜɪᴄ Dᴇꜱɪɢɴ 🔻💡\n\n🔹/fbcover - Facebook Cover Design \n🔹/fbcoverv2 - New Design Template \n🔹/fbcoverv3 - New Design Template \n🔹/fbcoverv4 - New Design Template \n🔹 /cover - Facebook Cover Design  Short\n🔹 /cover2 - Facebook Cover Design  Short\n🔹 /cover3 - Facebook Cover design Short\n🔹 /wish - BIRTHDAY Wish & Unique Gift👀\n🔹logo11 -Robi,Grameenphone,airtel,teletalk\nbkash,nagad,rocket Logo Design By own😶‍🌫️\n🔹 /logo12 - Your choices Logo Art✌️\n🔹/edit - Awesome Name  Edit \n🔹/graf - Name Edit\n🔹/logo - Extractive Logo Design\n\n💡🔻𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲: Tᴏʟʟꜱ Tʏᴘᴇ Cᴏᴍᴍᴀɴᴅꜱ 🔻💡\n\n🔹/NID - New Psd File Editable \n🔹/sms- Sms Bombing \n🔹/tempmail - Unlimited Fack E-mail \n🔹/chatgpt  -Any problem Slove Google \n🔹/removevg -Any photo Background Remove🫣\n🔹/art -Any Photo Edit Anime Style\n🔹/time - World Time \n🔹/math - Solve Mathematics\n🔹/ss - full Link Page Screenshots\n🔹/uid - Link to your own ID.\n\n💡🔻𝐁𝐨𝐭 𝐀𝐛𝐨𝐮𝐭🔻💡\n\n🔹/info - Learn about bots.🎀\n\n🔹/Report - If there is a complaint about the bot.💔🙂\n\nType /example to learn how to use these commands 😴\n\n💖 Here only the commands which are used more are given \n\n𝐎𝐰𝐧𝐞𝐫: 𝙼𝚍 𝚂𝚑𝚊𝚛𝚒𝚏𝚞𝚕 𝙸𝚜𝚕𝚊𝚖 𝚃𝚊𝚗𝚟𝚒𝚛\n\𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗  𝚙𝚛𝚘𝚏𝚒𝚕𝚎🫣:-!\n\nhttps://its.tanvir-ahmed.repl.co/\n\n⚡️𝙈𝙤𝙧𝙚 𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣⚡️`;
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
