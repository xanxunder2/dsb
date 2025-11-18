module.exports.config = {
    name: "rell",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "Get facebook any [ video,reels video,stories video]  Download😌",
    commandCategory: "media",
    usages: "/facebook [url]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    },
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'fb.json');
    if (!existsSync(path)) {
        const obj = {
            fb: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('fb')) data.fb = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.run = async function({ api, event, args }) {
    const { createReadStream, unlinkSync, writeFileSync } = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'fb.json');
    const { fb } = require(path);

    let url = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    if (!url) {
        api.sendMessage('❐ 𝘗𝘓𝘌𝘈𝘚𝘌 𝘌𝘕𝘛𝘌𝘙 𝘠𝘖𝘜𝘙 𝘍𝘈𝘊𝘌𝘉𝘖𝘖𝘒 𝘝𝘐𝘋𝘌𝘖 𝘓𝘐𝘕𝘒 😊', threadID, messageID);
        return;
    }

    try {
        if (fb.hasOwnProperty(threadID) && fb[threadID] == true) {
            const T4NFB = (
                await axios.get(
                    'https://drive.google.com/uc?export=download&id=1Bl5mFKXYJDNtYNmT-JtCI6pZZJheyYU9',
                    { responseType: 'stream' }
                )
            ).data;

            const T4NmsG = await api.sendMessage(
                {
                    body: '❐ 𝘠𝘖𝘜𝘙 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋 𝘗𝘙𝘖𝘊𝘌𝘚𝘚 𝘏𝘈𝘚 𝘚𝘛𝘈𝘙𝘛𝘌𝘋 ♻️\n\n 𝘗𝘓𝘌𝘈𝘚𝘌 𝘞𝘈𝘐𝘛 𝘈 𝘍𝘌𝘞 𝘔𝘐𝘕𝘜𝘛𝘌𝘚...',
                    attachment: T4NFB,
                },
                threadID
            );

            const ser = await axios.get(`https://sigojolislamapi-april-2023.hot-video-api-6x.repl.co/gazal`);
            var { data } = await axios.get(`https://ok--lexi-fex.repl.co/api/downloader/facebook?url=${url}&apikey=beta`);
            var path = __dirname + `/cache/6xfacebook.mp4`;
            if (data.success == false) throw new Error(data.error);

            const { data: stream } = await axios.get(data.result.links.sd, { responseType: 'arraybuffer' });
            api.unsendMessage(T4NmsG.messageID);
            writeFileSync(path, Buffer.from(stream, 'utf-8'));
            var credit = ser.data.admin;
            return api.sendMessage({ body: ``, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage(`❌ An error occurred while processing your request. Please try again later.`, threadID, messageID);
    }
    // Continue with the rest of your existing code...
}
