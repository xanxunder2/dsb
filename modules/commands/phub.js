const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "0.0.6",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function ({ api, event, args, Threads, Users }) {
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  const img = __dirname + `/cache/${event.senderID}.png`;
  const { threadID, messageID } = event;
  const id = event.senderID;
  const idgr = `${event.threadID}`;
  const name = await Users.getNameUser(event.senderID);
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);

  const tl = ["আমাকে মেনশন দিয়ে লাভ নেই-!!😐🥲", "আমাকে না ডেকে এই সময় টুকু ভাকো কাজে লাগাও-!!❤️😌"];
  const rand = tl[Math.floor(Math.random() * tl.length)];
//
    if ((event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
     return api.sendMessage(" ওয়ালাইকুম সালাম-!!🖤💫", threadID);
   };

    if ((event.body.toLowerCase() == "kemon acho") || (event.body.toLowerCase() == "Kemon acho")){
     return api.sendMessage("আল্লাহামদুলিল্লাহ আমি ভালো আছি আপনি কেমন আছেন-!!✨💜", threadID);
   };

    if ((event.body.toLowerCase() == "তুমার নাম কি") || (event.body.toLowerCase() == "tumar nam ki")) {
     return api.sendMessage(" আমার নাম ইসলামিক চেট-!!✨🧡", threadID);
   };

   if ((event.body.toLowerCase() == "ki koro") || (event.body.toLowerCase() == "কি করো") || (event.body.toLowerCase() == "ki koren")) {
     return api.sendMessage("আমি তুমাদের গ্রুপ এ আল্লাহর দিন ও তার মহিমা প্রচার করি-!!✨🧡", threadID);
   };

   if ((event.body.toLowerCase() == "tumar bari kothay") || (event.body.toLowerCase() == "tumi thako kothay")) {
     return api.sendMessage("আমার স্থান ইসলামিক গ্রুপ এর মধ্যে-!!😌\nআমি থাকি ইসলামিক গ্রুপ এ-!!✨🧡", threadID);
   };

   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("কি হুম-!!👀", threadID);
   };

  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "ok")) {
     return api.sendMessage("আর কিছু বলবা না-!!😌💔", threadID);
   };

   if ((event.body.toLowerCase() == "allah ke") || (event.body.toLowerCase() == "আল্লাহ কে")) {
     return api.sendMessage("আল্লাহ তিনি এই সকল কিছুর এক মাত্রো মালিক-!!✨🌺", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "আমি তুমায় ভালোবাসি")) {
     return api.sendMessage("আমাকে না ভালোবেসে আল্লাহ কে ভালোবাস-!!✨🌺", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "Hi")) {
     return api.sendMessage("Hello", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hlw")) {
     return api.sendMessage("hi", threadID);
   };


   if ((event.body.toLowerCase() == "koi tumi") || (event.body.toLowerCase() == "kothay tumi")) {
     return api.sendMessage("️এই তো আমি তুমার বুকে-!!🫂👩‍❤️‍💋‍👨", threadID);
   };

   if ((event.body.toLowerCase() == "cole gele") || (event.body.toLowerCase() == "kothay gele")) {
     return api.sendMessage("আছি তো এই যে আমি এখানে-!!🙋‍♀️", threadID);
   };

   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "miss u")) {
     return api.sendMessage("️আমি তো আছি miss করার কি আছে-!!💔🙂", threadID);
   };

   if ((event.body.toLowerCase() == "নামাজ কয় ওয়াক্ত") || (event.body.toLowerCase() == "namaj koy oyakto")) {
     return api.sendMessage("️৫ ওয়াক্ত-!!❤️🖤", threadID);
   };

   if ((event.body.toLowerCase() == "jannat ki") || (event.body.toLowerCase() == "জান্নাত কি")) {
     return api.sendMessage("️জান্নাত কি আর তা কতো টা সুন্দর  তুমি জান্নাতে গেলেই বুঝতে পারবে-!!✨🌺", threadID);
   };

   if ((event.body.toLowerCase() == "jahannam ki") || (event.body.toLowerCase() == "জাহান্নাম কি")) {
     return api.sendMessage("️জাহান্নাম কি আর কতো ভয়াবহ তা আল্লাহ কে অবিশ্বাস কারি রাই বুজতে পারবে জাহান্নামে জাবার পর-!!🥺", threadID);
   };

   if ((event.body.toLowerCase() == "hug me") || (event.body.toLowerCase() == " জরিয়ে ধর")) {
     return api.sendMessage("বুকে আসো জরিয়ে ধরি-!!🫂😌", threadID);
   };

   if ((event.body.toLowerCase() == "kuttar bacha") || (event.body.toLowerCase() == "madarcud")) {
     return api.sendMessage("️গালা গালি করিস নাহ রে কাফেরের দল এটা ইসলামিক গ্রুপ-!!🥺❤️", threadID);
   };

   if ((event.body.toLowerCase() == "mc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("️গালি দিবি বেন খাবি-!!🥱", threadID);
   };

   if ((event.body.toLowerCase() == "bot bana do") || (event.body.toLowerCase() == "kew ekta bot baniye dau")) {
     return api.sendMessage("️গ্রুপ ওনার কে ইনবক্সে করুন বট বানাতে চাইলে-!!😊", threadID);
   };

   if ((event.body.toLowerCase() == "allahamdulilah") || (event.body.toLowerCase() == "আল্লাহামদুলিল্লাহ")) {
     return api.sendMessage("আল্লাহামদুলিল্লাহ-!!✨🌺", threadID);
   };

   if ((event.body.toLowerCase() == "done") || (event.body.toLowerCase() == "Done")) {
     return api.sendMessage("️মাশাল্লাহ-!!✨🌺", threadID);
   };

   if ((event.body.toLowerCase() == "mashallah") || (event.body.toLowerCase() == "মাশাল্লাহ")) {
     return api.sendMessage("✨🧡", threadID);
   };

   if ((event.body.toLowerCase() == "file diba") || (event.body.toLowerCase() == "ekta file diba")) {
     return api.sendMessage("কনো ফাইল দেওয়া যাবে না ফাইল পেলে তুমরা আমাদের ভুলে যাও-!!🥲🥺", threadID);
   };

   if ((event.body.toLowerCase() == "noti") || (event.body.toLowerCase() == "magi")) {
     return api.sendMessage("তুমি নাহ মুসলিম তুমার মুখে বাজে কথা মানায়-!!😾", threadID);
   };

   if ((event.body.toLowerCase() == "tumar ma baba kemon achen") || (event.body.toLowerCase() == "tumar baba ma kemon achen")) {
     return api.sendMessage("আমার বাবা মা নেই-!!😭", threadID);
   };

   if ((event.body.toLowerCase() == "sorry") || (event.body.toLowerCase() == "Sorry")) {
     return api.sendMessage("আচ্ছা বেপার নাহ-!!🥲", threadID);
   };

   if ((event.body.toLowerCase() == "sobai kemon acho") || (event.body.toLowerCase() == "সবাই কেমন আছো")) {
     return api.sendMessage("আল্লাহামদুলিল্লাহ ভালো আছি আপ্নি-!!✨🧡", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone kemon acho") || (event.body.toLowerCase() == "@everyone ki obostha")) {
     return api.sendMessage("আল্লাহামদুলিল্লাহ ভালো তুমার-!!✨🌺", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone ki koro") || (event.body.toLowerCase() == "@everyone কি করো সবাই")) {
     return api.sendMessage("কিছু নাহ আপনি", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone") || (event.body.toLowerCase() == "@everyobe")) {
     return api.sendMessage("বুজলাম নাহ ডাকলেন যে-!!😐", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone koi gele") || (event.body.toLowerCase() == "@everyone kothay gele")) {
     return api.sendMessage("আছি তো-!!🙄", threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    //Img subtract //
    const DP = (
      await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
        responseType: "arraybuffer",
      })
    ).data;
    fs.writeFileSync(img, Buffer.from(DP, "utf-8"));

    const send = {
      body: `╭•┄┅════❁🌺❁════┅┄•╮\n ${rand}\n╰•┄┅════❁🌺❁════┅┄•╯\n\n•—»✨${name}✨«—•`,
      attachment: fs.createReadStream(img),
    };

    api.sendMessage(send, threadID, () => fs.unlinkSync(img), messageID);
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) { }
