module.exports.config = {
    name:"rimi",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "Talk to the most lost Rimi ;-;",
    commandCategory: "General",
    usages: "[question]/[on,off]",
    cooldowns: 5
};

const axios = require('axios');

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'sim.json');
    if (!existsSync(path)) {
        const obj = {
            sim: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('sim')) data.sim = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'sim.json');
    const { sim } = require(path);

    if (sim.hasOwnProperty(threadID) && sim[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://okay--s5-t4nv1r-6x.repl.co/sim?type=ask&ask=${event.body}`)).then(res => {
            if (res.data.answer == "null" || res.data.answer == "I don't understand what you say Fuxcs") {
                api.sendMessage("xan doesn't understand, Traning Rimi",threadID,messageID)
            } else {
                return api.sendMessage(res.data.answer, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'sim.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { sim } = database;

    if (!args[0]) { api.sendMessage("~ হে ব্যাপ্স বলো গো🫦", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                sim[threadID] = true;
                api.sendMessage("Successfully enabled My dear Xan Rimi😚", threadID, messageID);
                break;
            }
            case "off": {
                sim[threadID] = false;
                api.sendMessage("Rimi has been successfully disabled!", threadID, messageID);
                break;
            }
            default:
            axios.get(encodeURI(`https://okay--s5-t4nv1r-6x.repl.co/sim?type=ask&ask=${args.join(" ")}`)).then(res => {
            if (res.data.answer == "null" || res.data.answer == "I don't understand what you say Fuxcs") {
                api.sendMessage("Sim doesn't understand, Teach Okay🥺",threadID,messageID)
            } else {
                return api.sendMessage(res.data.answer, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
    }