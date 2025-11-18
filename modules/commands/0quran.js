module.exports.config = {
  name: "quran",//type your commands name!
  version: "0.0.6",// don't change this version!
  hasPermssion: 0,
  credits: "SI TANVIR 6X",// respect the main owner//
  description: "Some more Islamic quran reciting audio available our (TANVIR_6X) server ✅",//here is this commands description//
  commandCategory: "QURAN_AUDIO",// here is  this commands category()
  usages: "/quran",// here is using helper//
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": ""
  }
};

const musicURL = "https://siapiquran-april-2023.hot-video-api-6x.repl.co/quran";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/QURAN_6X_@2019')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/QURAN_6X_@2019');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/QURAN_6X_@2019').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/QURAN_6X_@2019/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(musicURL)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.link), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/QURAN_6X_@2019/${Date.now()}.mp3`;
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
