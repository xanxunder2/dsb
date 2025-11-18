module.exports.config = {
    name: "grafv2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "logoeditor",
    commandCategory: "image",
    usages: "To use this system you must first ephoto360.com you have to visit this website by \n\nvisiting the website you will get many different \n\ndesigns then among those designs you will get text effect one design\nYou can design those designs with this robot but very simple tricks to design\n\nJust click on that design then a link will be created in your search bar just copy that link & go to the\n\nmessenger group and sent msg [ /grafv2 (your copied link)👉 (enter your name)  ] \n\nin a while your name design will be done\n\n💔And after each section you must give (👉) this emoji 🙂",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
try {
const content = args.join(" ").split("👉").map(item => item = item.trim());
let text1 = content[0]
let text2 = content [1]
if (!args[0])
    return api.sendMessage("Wrong format!\n "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

	 const res = await axios.get(`https://api.akuari.my.id/ephoto/scraper-1?link=${text1}&text=${text2}`);
var url = res.data.respon;
       var callback = () => api.sendMessage({body:`❐- 𝐈𝐌𝐀𝐆𝐄 🌀 𝐃𝐄𝐒𝐈𝐆𝐍 ♻️ 𝐀 𝐏 𝐈 ☄️ 𝐓𝐀𝐍𝐕𝐈𝐑_6𝐗🔥`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.png"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.png')).on('close',() => callback());  } 
catch (err){
return api.sendMessage("sorry 6x server busy🙂💔", event.threadID, event.messageID)
}   
}}