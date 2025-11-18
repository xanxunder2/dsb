module.exports.config = {
	name: "ramadan",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Countdown to NEW YEAR",
	commandCategory: "Tools",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("March 22, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`-𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐚𝐥𝐚𝐢𝐤𝐮𝐦!-🙂🖤\n\n\n-- 𝐀𝐝𝐯𝐚𝐧𝐜𝐞 𝐑𝐚𝐦𝐚𝐝𝐚𝐧 𝐌𝐮𝐛𝐚𝐫𝐚𝐤-🌸🤗\n—𝐓𝐨𝐝𝐚𝐲 𝐢𝐬 𝐚 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐃𝐚𝐲 𝐅𝐨𝐫 𝐌𝐮𝐬𝐥𝐢𝐦'𝐬 🌸🤲\n\n-𝐑𝐚𝐦𝐚𝐝𝐚𝐧 𝐜𝐨𝐦𝐢𝐧𝐠 𝐬𝐨𝐨𝐧- 😍💐\n\n🌸${days} days ${hours} hours ${minutes} mins ${seconds} secs🌸\n\n🌺 সবাই'কে পবিত্র মাহে রমজানের অগ্রিম শুভেচ্ছা রইলো 🌺`, event.threadID, event.messageID);
                           }