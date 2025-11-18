const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: 'save',
  version: '0.0.6',
  hasPermission: 0,
  credits: 'SI TANVIR 6X',
  description: 'save media from a link (supports jpeg, jpg, png, mp4, mp3, mpeg)',
  commandCategory: 'Media',
  usages: ['/save [link]'],
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const url = args[0];

  if (!url) {
    return api.sendMessage('Please provide a valid link to saving.', event.threadID, event.messageID);
  }

  const validExtensions = ['.jpeg', '.jpg', '.png', '.mp4', '.mp3', '.mpeg'];
  const extension = url.substring(url.lastIndexOf('.'));

  if (!validExtensions.includes(extension.toLowerCase())) {
    return api.sendMessage('Supported saving: jpeg, jpg, png, mp4, mp3, mpeg', event.threadID, event.messageID);
  }

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    if (response.status !== 200) {
      return api.sendMessage('fuxkss', event.threadID, event.messageID);
    }

    const filename = `saved${extension}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));

    api.sendMessage(
      {
        body: `Saved Done 🤙❤️‍🩹`,
        attachment: fs.createReadStream(filename),
      },
      event.threadID,
      () => fs.unlinkSync(filename)
    );
  } catch (error) {
    api.sendMessage('❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔', event.threadID, event.messageID);
    console.error(error);
  }
};