module.exports.config = {
	name: "lofi",//type your commands name!
	version: "0.0.6",// don't change this version!
	hasPermssion: 0,
	credits: "SI TANVIR 6X",// respect the main owner//
	description: "Some more romantic love shorts video available our (TANVIR_6X) server ✅",//here is this commands description//
	commandCategory: "lOFI_VIDEO",// here is  this commands category()
	usages: "/lofi",// here is using helper//
	cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": ""
  }
};

const musicURL = "https://its.xan-xunder-t4n.repl.co/lofi";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/6X_LOFI_#2023')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/6X_LOFI_#2023');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/6X_LOFI_#2023').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/6X_LOFI_#2023/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(musicURL)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.link), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/6X_LOFI_#2023/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          var cap = res.data.caption;
          var tit = res.data.title;
          var aut = res.data.author;
          var ad = res.data.admin;
          api.sendMessage({
            body:`${cap}`,
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => 
            global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("❐ 𝟔𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("❐ 𝟔𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔", event.threadID, event.messageID);
    return;
  });

  return;
  }