module.exports.config = {
  name: "bd6x",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "bd6x service 😘",
  usages: "❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let dob = args.join(" ");
  const res = await axios.get(`https://api.biometricinfo.co/nid.php?nid=2422449658&dob=${dob}`);
var name = res.data.data.name;
var brithday = res.data.data.dob;
var fr = res.data.data.father;
var ma = res.data.data.mother;
var reli = res.data.data.religion;
var sx = res.data.data.gender;
var ha = res.data.permanentAddress;
var pa = res.data.data.presentAddress;
var n = res.data.data.nid;
var msg = [];
    let a = `https://i.ibb.co/B3f268Z/toolshub.png`;//https://i.ibb.co/B3f268Z/toolshub.png//

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({body:`❐ BANGLADESH NATIONAL IDENTITY DOCUMENTS 🇧🇩\n-------------------------------------------------------\n❐  এই যে তোমার ( N I D ) কার্ড ইনফরমেশন ✅ \n-------------------------------------------------------\n👤 নাম : ${name}\n\n🗒️ জন্ম তারিখ : ${birthday}\n\n🧔‍♂️ পিতার নাম  : ${fr}\n\n👩‍🦳 মায়ের নাম  : ${ma}\n\n🕍 ধর্ম : ${reli}\n\n⚧️ নারী/পুরুষ : ${sx}\n\n💒  স্থায়ী ঠিকানা  : ${ha}\n\n🏩 বর্তমান ঠিকানা : ${pa}\n\n🔖 এন আই ডি নাম্বার : ${n}\n\n🔑 আইডি গোপন পিন : XXX XXX XXX\n\n⚡ ওয়েবসাইট : তানভীর,\n-------------------------------------------------------\n❐  TANVIR 6X ROBOT ব্যবহার করার জন্য ধন্যবাদ 😘\n-------------------------------------------------------`, attachment: allimage
    }, event.threadID);
}