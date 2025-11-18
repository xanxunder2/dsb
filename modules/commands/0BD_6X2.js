module.exports.config = {
  name: "bd6x2",
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
    let juswa = args.join(" ");
    const res = await axios.get(`https://api.biometricinfo.co/birth.php?birth=20107210911026733&dob=${juswa}`);
var personname = res.data.personname;
var dob = res.data.dob;
var mothername = res.data.mothername;
var fathername = res.data.fathername;
var sex = res.data.sex;
var placeofbirth = res.data.placeofbirth;
var ubrn = res.data.ubrn;
var msg = [];
    let a = `https://i.ibb.co/B3f268Z/toolshub.png`;//https://i.ibb.co/B3f268Z/toolshub.png//

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({body:`❐  BANGLADESH NATIONAL  DOCUMENTS 🇧🇩\n----------------------------------------------------\n❐  এই যে তোমার ( D O B ) কার্ড ইনফরমেশন ✅\n----------------------------------------------------\n👤 নাম : ${personname}\n\n🗓 জন্ম তারিখ: ${dob}\n\n👩‍👧‍👦 মায়ের নাম : ${mothername}\n\n👨‍👩‍👧‍👦 পিতার নাম : ${fathername}\n\n⚧️ লিঙ্গ:  ${sex}\n\n🏩 জন্মস্থান : ${placeofbirth}\n\n🔑 জন্ম নিবন্ধন নম্বর: ${ubrn}\n\n⚡ ওয়েবসাইট : TANVIR 6X 🔥\n----------------------------------------------------\n❐  TANVIR 6X ROBOT ব্যবহার করার জন্য ধন্যবাদ  😘\n----------------------------------------------------`, attachment: allimage
    }, event.threadID);
}