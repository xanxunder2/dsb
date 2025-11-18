function _0x4889(){var _0x394277=['3749312YazGsG','68ymRWQI','Leiam Nash','36035790IqoHKT','8779096jBRyUV','1.0.0','3535568yidFZe','leiamnash','5vkMvTZ','Người\x20chửi','an\x20khỏi\x20hệ','\x20bot\x20sẽ\x20tự','8899785cmETMh','noprefix','3lBhDkr','config','server','5508282LfrgYn','exports','\x20thống\x20<3','\x20động\x20bị\x20b','39315BAKsct'];_0x4889=function(){return _0x394277;};return _0x4889();}function _0xdc3d(_0x389c7f,_0x35f4e3){var _0x48c40a=_0x4889();return _0xdc3d=function(_0x57793e,_0x3daebb){_0x57793e=_0x57793e-(-0x7e1*-0x3+-0x1ddc+0x7be);var _0xf805c=_0x48c40a[_0x57793e];return _0xf805c;},_0xdc3d(_0x389c7f,_0x35f4e3);}var _0x59f692=_0xdc3d;(function(_0x5ec849,_0x50e3d0){var _0x24aa3d=_0xdc3d,_0x151671=_0x5ec849();while(!![]){try{var _0x4bf05f=-parseInt(_0x24aa3d(0x187))/(-0x92c*-0x2+0x10ed+0x25*-0xf4)*(parseInt(_0x24aa3d(0x189))/(0x9c7*-0x1+-0x27c+0xc45))+-parseInt(_0x24aa3d(0x196))/(0x26e*0xe+0xaa2*-0x2+-0x3*0x43f)*(-parseInt(_0x24aa3d(0x18e))/(0x15c9+0xd19+-0x22de))+parseInt(_0x24aa3d(0x190))/(-0x1*0x1c64+0xc89*-0x1+0x28f2)*(-parseInt(_0x24aa3d(0x199))/(0x23fb+0x1a88+-0x3e7d))+parseInt(_0x24aa3d(0x188))/(-0x4*-0x8a1+0x2074+-0x42f1)+-parseInt(_0x24aa3d(0x18c))/(0x7*0x335+-0x1*-0x1b41+-0x31ac)+-parseInt(_0x24aa3d(0x194))/(0x10a+0x9c7*0x1+-0x18*0x73)+parseInt(_0x24aa3d(0x18b))/(0x94a+0x1112+-0x1a52);if(_0x4bf05f===_0x50e3d0)break;else _0x151671['push'](_0x151671['shift']());}catch(_0x274327){_0x151671['push'](_0x151671['shift']());}}}(_0x4889,-0x13f*-0xb2+0xea929+-0x51e99),module[_0x59f692(0x19a)][_0x59f692(0x197)]={'name':_0x59f692(0x18f)+_0x59f692(0x198),'version':_0x59f692(0x18d),'hasPermssion':0x0,'credits':_0x59f692(0x18a),'description':_0x59f692(0x191)+_0x59f692(0x193)+_0x59f692(0x186)+_0x59f692(0x192)+_0x59f692(0x185),'commandCategory':_0x59f692(0x195),'usages':'','cooldowns':0x0,'denpendencies':{}});

module.exports.handleEvent = async ({
	event: o,
	api: t,
	Users: n
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	const i = require("moment-timezone").tz("Asia/Manila").format("HH:MM:ss L");
	if (s == t.getCurrentUserID()) return;
	let c = await n.getNameUser(o.senderID);
    //Sửa câu trả lời của Bạn
	var h = {
		body: `𝐎𝐓𝐇𝐄𝐑𝐁𝐎𝐓\n${c}\n\𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐁𝐞𝐞𝐧 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐚𝐥𝐥𝐲 𝐁𝐚𝐧𝐧𝐞𝐝 𝐓𝐨 𝐓𝐚𝐧𝐯𝐢𝐫 𝟔𝐱 𝐒𝐞𝐫𝐯𝐞𝐫 𝐓𝐨 𝐏𝐫𝐞𝐯𝐞𝐧𝐭 𝐒𝐩𝐚𝐦`
	};
    //Add curse words without capital letters
	["your keyboard hero level has reached level"].forEach((a => { //ilalim
		
        const s = o.senderID;
    let leiam = o.body.toString();
	if (leiam.includes("your keyboard hero level has reached level") || leiam.includes("The command you used doesn't exist, is that") || leiam.includes("Im here senpai!") || leiam.includes("Bot Notify 🇵🇭 Philippines") || leiam.includes("Random bible verse every 60 minutes") || leiam.includes("Random Fact every 60 minutes") || leiam.includes("You have no permission to use command") || leiam.includes("Page Cmds") || leiam.includes("Random Bible Verse Per Hour") || leiam.includes("It's 9:00PM time to sleep Goodnight everyone") || leiam.includes("remove this message") || leiam.includes("unsent this message") || leiam.includes("removed 1 message") || leiam.includes("unsent this photo") || leiam.includes("just removed 1 Attachments") || leiam.includes("just removed 2 Attachments") || leiam.includes("just removed 3 Attachments") || leiam.includes("just removed 4 Attachments") || leiam.includes("just removed 5 Attachments") || leiam.includes("just removed 6 Attachments") || leiam.includes("just removed 7 Attachments") || leiam.includes("just removed 8 Attachments") || leiam.includes("just removed 9 Attachments") || leiam.includes("you have been automatically banned to TANVIR-6X Server to prevent spam")) {
			modules = "[ BOT BAN ]", console.log(c, modules, a);
			const o = n.getData(s).data || {};
			n.setData(s, {
				data: o
			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
				reason: o.reason,
				dateAdded: o.dateAdded
			}), t.sendMessage(h, e, (() => {
				const o = global.config.ADMINBOT;
				var n = o;
				for (var n of o) t.sendMessage(`𝐎𝐓𝐇𝐄𝐑𝐁𝐎𝐓 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃\n\𝐍𝐀𝐌𝐄: ${c}\𝐔𝐈𝐃: ${s}\n\n𝚂𝚎𝚛𝚟𝚎𝚛 𝚋𝚊𝚗`, n)
			}))
		} //d == b
	})) //for each 
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘 𝗦𝗲𝗿𝘃𝗲𝗿", o.threadID);