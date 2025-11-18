module.exports.config = {
  name: 'ai',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'talk ai better experience with tanvir 6x ',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/ai tumar name ki',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const { threadID, messageID, senderID, body } = event;
  var info = await api.getUserInfo(event.senderID);
  var nameSender = info[event.senderID].name;
  var arraytag = [];
  arraytag.push({id: event.senderID, tag: nameSender});
  var txt = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  if (!txt) return api.sendMessage(`Please ask any question`, event.threadID, event.messageID);

  // Check if the received text is a question about the name
  if (txt.toLowerCase().includes("how are you")) {
    return api.sendMessage({
      body: `I am just a bot, but thanks for asking!`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("who made you")) {
    return api.sendMessage({
      body: `I was created by TANVIR_6X.`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("what is your name")) {
    return api.sendMessage({
      body: `My name is 6X GPT.`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("who is your owner")) {
    return api.sendMessage({
      body: `My owner is TANVIR_6X.`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("where are you from")) {
    return api.sendMessage({
      body: `I am from Sylhet, Bangladesh.`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("gali dite paros")) {
    return api.sendMessage({
      body: `Sorry, I'm here to provide positive interactions. No insults, please.`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("do you know 6x")) {
    return api.sendMessage({
      body: `Yes, I know TANVIR_6X.\n\nNothing to say about TANVIR sir ☺️\n
He is a very kind hearted person\n
And he tells everyone that he is a normal person 💔🙂\n
But he is not a normal person 🥲\n
He is a very good codder 😱\n
But he doesn't want to tell anyone ☺️`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  } else if (txt.toLowerCase().includes("what are you doing")) {
    return api.sendMessage({
      body: `I'm here to assist you with any questions or tasks!`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID, event.messageID);
  }

  // User balance control
  var data = await Currencies.getData(event.senderID);
  var money = data.money;

  if (money < 10) {
    return api.sendMessage("You must have at least BDT 10 Taka to use this command!", event.threadID, event.messageID);
  } else {
    // Deduct 100 from user's balance
    Currencies.setData(event.senderID, { money: money - 10 });

    // Continue with the rest of your script
    const response = await axios.get(`https://chatgpt.xanxunder11.repl.co/chatgpt?q=${encodeURIComponent(txt)}`);
    var text = response.data.message;

    return api.sendMessage({
      body: `${text}`,
      attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
    }, event.threadID);
  }
};
