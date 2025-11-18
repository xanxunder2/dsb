module.exports.config = {
    name: "adminUpdate",
    version: "1.1.1",
    hasPermssion: 1,
    credits: "DC-Nam",
    description: "Turn on/off anti-out temple",
    commandCategory: "Group",
    usages: "",
    cooldowns: 0
}
module.exports.run = async function({
    api: a,
    event: e,
    args: g,
    Threads: T
}) {
    const {
        threadID: t,
        messageID: m,
        senderID: s
    } = e
    let getDataThread = await T.getData(t) || {}
    const {
        data,
        threadInfo
    } = getDataThread
    if (typeof data.threadUpdate == "undefined") {
        data.threadUpdate = {
            status: true,
            send: true,
            unsend: true,
            timeout: 10,
            storage: []
        }
        await T.setData(t, {
            data
        });
        await global.data.threadData.set(t, data)
    }
    var msg = `❐- 6Xserver busy🥺💔`
    a.sendMessage(msg, t, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: s
      })
    }, m)
}
module.exports.handleReply = async function ({ api: a, event: e, handleReply: h, Threads: T }) {
  const { threadID: t, messageID: m, senderID: s, body: y } = e
  let getDataThread = await T.getData(t) || {}
    const {
        data,
        threadInfo
    } = getDataThread
  var msg = ""
  const arr = y.split(" ")
  if (arr[0] == "1") {
    const status = data.threadUpdate.send == true ? false : true
    data.threadUpdate.send = status
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    msg = `➝ Already ${status == true ? "turn on" : "turn off"} group update notification`
    a.sendMessage(msg, t, m)
  }
  if (arr[0] == "2") {
    const status = data.threadUpdate.unsend == true ? false : true
    data.threadUpdate.unsend = status
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    msg = `➝ Already ${status == true ? "turn on" : "turn off"} automatically unsend group update notifications`
    a.sendMessage(msg, t, m)
  }
  if (arr[0] == "3") {
    data.threadUpdate.timeout = parseInt(arr[1])
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    msg = `➝ Set self-unsend time for group update notifications is ${arr[1]}s`
    a.sendMessage(msg, t, m)
      }
}