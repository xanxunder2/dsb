module.exports.config = {
  name: "namaz",
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
    let city = args.join(" ");
  
 if (!city) return api.sendMessage('please type your  city name', event.threadID, event.messageID);
  
    const ser = await axios.get(`https://api.akuari.my.id/textpro/scraper-2?link=https://textpro.me/create-3d-retro-text-effect-online-free-1065.html&text=Namaz%20time%20&text2=${city}`);
    const response = await axios.get(`https://prayer.time-hosting-bd.repl.co/api/${city}`);
        const respon = ser.data.respon;
        const date = response.data.date;
        const Fajr = convertTo12Hour(response.data.today.Fajr);
        const Dhuhr = convertTo12Hour(response.data.today.Dhuhr);
        const Asr = convertTo12Hour(response.data.today.Asr);
        const Maghrib = convertTo12Hour(response.data.today.Maghrib);
        const Ishaa = convertTo12Hour(response.data.tomorrow.Ishaa);
      const author = `TANVIR_6X`;

    var msg = [];
    let a = `${ser.data.respon}`;//https://i.ibb.co/B3f268Z/toolshub.png//

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.jpg", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.jpg"));


  //
  function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = (hours % 12) || 12;
    return `${hours12}:${minutes} ${period}`;
  }
  //
  const result = `「 ${date} Namaz Time Of 🕌 ${city} 🌍」\n\n❏ ফজর: ${Fajr}\n\n❏ জোহর : ${Dhuhr}\n\n❏ আছর : ${Asr}\n\n❏ মাগরিব : ${Maghrib}\n\n❏ এশাহ্ : ${Ishaa}\n\n❏ ওয়েবসাইট  : ${author} 🕋`;
  ///
    return api.sendMessage({body:`${result}`, attachment: allimage
    }, event.threadID);
  }