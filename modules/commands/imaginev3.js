const FB_URL = `m.me/T4NV1R.BR4ND.Y0UR.N3X7.D4D`;
const WP_NUMBER = `8801760226034`;
const _U = "1Zyd4aBvFp-Oy-bf2InRJXDBl506rN6czskINhopSV7l-8oRALx__T9TCpJvBofK8fGpa6pubhMvvpkEi6JeTVj6bpwd2GmEcUIv2M7bw2NTnBGz0A2EXQkO4i60wfeHS7unELIxLIX5zBjKmRt2_TjeilOMvolPY0SeuJ3XrW3ELcnCTz08HfF8GZznQfuinQzvDMEQQyN4bSzrzPcuV3A";
let systemStatus = "off"; // Initial system status is "on"

module.exports.config = {
  name: "create",
  version: "0.0.6",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "TANVIR_6X AI Image generator Working 📌",
  usages: "create a cute boy",
  commandCategory: "6X_AI",
  cooldowns: 0,
};

module.exports.run = async function ({ api, event, args, Currencies }) {
  if (systemStatus === "off") {
    return api.sendMessage("The system is temporarily off. Please try again later. ❌", event.threadID, event.messageID);
  }

  const axios = require("axios");
  const fs = require("fs-extra");
  const path = require("path");
  const { threadID, messageID } = event;

  let prompt = args.join(" ");
  if (!prompt) {
    await api.sendMessage(`Describe what you'd like to create 🌸🖤`, event.threadID, event.messageID);
    return;
  }

  const T4NmsG = await api.sendMessage(`Creating...\n\n               Please wait 😽🌸`, event.threadID);

  try {
    const ser = await axios.get(`https://brand3.xanxunder11.repl.co/boom?prompt=${prompt}&_U=${_U}`);
    const imageUrls = ser.data.imageUrls;
    const CR = await axios.get(`https://server.credit-6x.repl.co/credit`);
    const credit = CR.data.imagine_art;

    // User balance control
    var data = await Currencies.getData(event.senderID);
    var money = data.money;
    var bltxt = `<!--===============[ ENGLISH ]===============-->\n\nYour account does not have enough balance 💔\n\nTo recharge the account balance, message the admin 🖤\n\n📌 Admin ID => \n[ ${FB_URL} ]\n\n📞Admin WhatsApp=>\n[ wa.me/+${WP_NUMBER} ]\n\n<!--===============[ BANGLA ]===============-->\n\nআপনার একাউন্ট এ পর্যাপ্ত পরিমাণ ব্যালেন্স নাই 💔\n\nএকাউন্ট এ ব্যালেন্স রিচার্জ করতে এডমিন কে মেসেজ করুন!\n\n📌 এডমিন আইডি=>\n[ ${FB_URL} ]\n\n📞 এডমিন হোয়াটসঅ্যাপ=>\n[ wa.me/+${WP_NUMBER} ]`;

    if (money < 5) {
      return api.sendMessage(`${bltxt}`, event.threadID, event.messageID);
    } else {
      // Deduct 5 from user's balance
      Currencies.setData(event.senderID, { money: money - 5 });

      api.sendMessage(`Successfully deducted BDT 5 from your balance.`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 5000));

      // Download and send all images
      const imgData = [];

      for (let i = 0; i < imageUrls.length; i++) {
        const imgResponse = await axios.get(imageUrls[i], { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        imgData.push(fs.createReadStream(imgPath));
      }
      api.unsendMessage(T4NmsG.messageID);

      return api.sendMessage({
        body: credit,
        attachment: imgData,
      }, threadID);
    }
  } catch (e) {
    console.log(e.message);
    return api.sendMessage(`Error 🫠💔`, event.threadID, event.messageID);
  }
};
