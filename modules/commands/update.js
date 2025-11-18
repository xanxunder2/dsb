module.exports.config = {
  name: "create2",
  version: "0.0.6",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "sorry💔",
  usages: "TANVIR_6X AI Image generator Working 📌",
  commandCategory: "6X_AI",
  cooldowns: 0,
};

module.exports.run = async function ({ api, event, args, Currencies }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const { threadID, messageID } = event;

  let prompt = args.join(" ");
  if (!prompt) {
    await api.sendMessage(`Please type your art 🤙`, event.threadID, event.messageID);
    return;
  }

  const T4NmsG = await api.sendMessage(`Please wait 😽`, event.threadID);

  try {
    const ser = await axios.get(`https://brand3.xanxunder11.repl.co/boom?prompt=${prompt}`);
    const imageUrls = ser.data.imageUrls;

    // User balance control
    var data = await Currencies.getData(event.senderID);
    var money = data.money;
    var bltxt = "<!--===============[ ENGLISH ]===============-->\n\nYour account does not have enough balance 💔\n\nTo recharge the account balance, message the admin 🖤\n\n📌 Admin ID => \n[ m.me/T4NV1R.BR4ND.Y0UR.N3X7.D4D ]\n\n📞Admin WhatsApp =  > [ wa.me/+8801760226034 ]\n\n<!--===============[ BANGLA ]===============-->\n\nআপনার একাউন্ট এ পর্যাপ্ত পরিমাণ ব্যালেন্স নাই 💔\n\nএকাউন্ট এ ব্যালেন্স রিচার্জ করতে এডমিন কে মেসেজ করুন!\n\n📌 এডমিন আইডি=>\n[ m.me/T4NV1R.BR4ND.Y0UR.N3X7.D4D ]\n\n📞 এডমিন হোয়াটসঅ্যাপ=>\n[ wa.me/+8801760226034 ]";

    if (money < 5) {
      return api.sendMessage(`${bltxt}`, event.threadID, event.messageID);
    } else {
      // Deduct 5 from user's balance
      Currencies.setData(event.senderID, { money: money - 5 });

      // Download and send all images
      const downloadAndSendImages = async () => {
        const imageAttachments = [];

        for (const imageUrl of imageUrls) {
          const imageBuffer = await axios.get(imageUrl, { responseType: "arraybuffer" });
          const imageName = `image_${imageUrls.indexOf(imageUrl) + 1}.png`;
          const imagePath = __dirname + `/cache/${imageName}`;

          fs.writeFileSync(imagePath, Buffer.from(imageBuffer.data, "utf-8"));

          imageAttachments.push({
            body: "",
            attachment: fs.createReadStream(imagePath),
          });

          // Optional: Uncomment the line below to delete the downloaded image after sending
          // fs.unlinkSync(imagePath);
        }

        return imageAttachments;
      };

      const imageAttachments = await downloadAndSendImages();

      api.unsendMessage(T4NmsG.messageID);

      for (const attachment of imageAttachments) {
        await api.sendMessage(attachment, threadID);
      }

      return;
    }
  } catch (e) {
    console.log(e.message);
    return api.sendMessage("❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔", threadID, messageID);
  }
};
