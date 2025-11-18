module.exports.config = {
  name: "stalk3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "hentai",
  usages: "password",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let juswa = args.join(" ");
  const xan = await axios.get(`https://sigojolislamapi-april-2023.hot-video-api-6x.repl.co/gazal`);
    const res = await axios.get(`https://www.nguyenmanh.name.vn/api/tikInfo?query=${juswa}&apikey=FSShCQne`);
    var heart = res.data.result.heart;
    var videoCount = res.data.result.videoCount;
    var heartCount = res.data.result.heartCount;
    var followerCount = res.data.result.followerCount;
    var followingCount = res.data.result.followingCount;
    var privateItem = res.data.result.privateItem;
    var privateAccount = res.data.result.privateAccount;
    var verified = res.data.result.verified;
    var signature = res.data.result.signature;
    var nickname = res.data.result.nickname;
    var uniqueId = res.data.result.uniqueId;
    var credit = xan.data.owner;
    var msg = [];
    let a = `${res.data.result.avatar}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/stalk36x.jpeg", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/stalk36x.jpeg"));
    return api.sendMessage({body:`❐ 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐁𝐘😘\n-------------------------------------------------------------------------\n🙎‍♂️ 𝐍𝐀𝐌𝐄 : ${nickname}\n\n🔗 𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄 : ${uniqueId}\n\n😘 𝐅𝐑𝐈𝐄𝐍𝐃𝐒 : ${followingCount}\n\n😍 𝐅𝐎𝐋𝐋𝐎𝐖𝐄𝐑 : ${followerCount}\n\n❤️ 𝐓𝐎𝐓𝐀𝐋 𝐋𝐎𝐕𝐄 : ${heart}\n-------------------------------------------------------------------------\n🇧🇩 𝐓𝐈𝐊𝐓𝐎𝐊 😘 𝐏𝐑𝐎𝐅𝐈𝐋𝐄-𝐀𝐏𝐈 👉 ${credit}`, attachment: allimage
    }, event.threadID);
  }