const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: 'souce',
  version: '1.1.0',
  hasPermission: 1,
  credits: 'August Quinn',
  description: 'soue data from a URL using AbstractAPI',
  commandCategory: 'Developer Tools',
  usages: ['/Scrape [URL]'],
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const apiKey = 'dc3fc7bc7dc540a7b1df7827fe205360';
  const url = args[0];

  if (!url) {
    api.sendMessage('Please provide a URL to scrape.', threadID, messageID);
    return;
  }

  const processingGIF = (
    await axios.get(
      'https://drive.google.com/uc?export=download&id=1Im1nktqQ59ErykI7Rg-01UpKm7E951NJ',
      { responseType: 'stream' }
    )
  ).data;

  const processingMessage = await api.sendMessage(
    {
      body: 'Processing your request. Scraping...',
      attachment: processingGIF,
    },
    threadID
  );

  try {
    const response = await axios.get(`https://scrape.abstractapi.com/v1/?api_key=${apiKey}&url=${encodeURIComponent(url)}`);
    const { status, data } = response;
    api.unsendMessage(processingMessage.messageID);

    if (status === 200) {
      const limitedResult = data.substring(0, 19000);

      const filename = 'sexyka.txt';
      fs.writeFileSync(filename, data);

      api.sendMessage(`${limitedResult}`, threadID, (error, info) => {
        if (!error) {
          api.sendMessage({ attachment: fs.createReadStream(filename) }, threadID, () => fs.unlinkSync(filename));
        }
      });
    } else {
      api.sendMessage('Failed to scrape the URL. Please check the URL or try again later.', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('An error occurred while scraping the URL. Please try again later.', threadID, messageID);
  }
};