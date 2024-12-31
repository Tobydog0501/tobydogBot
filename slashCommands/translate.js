const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');
const axios = require("axios");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('Translate')
    .setType(ApplicationCommandType.Message),
  async execute(inter) {
    await inter.deferReply();
    const mesg = await inter.channel.messages.fetch(inter.targetId);
    const splits = ["3", "4", "6", "7", " "];
    const letters = "1qaz2wsxedcrfv5tgbyhnujm8ik,9ol.0p;/-";
    let check = 0;
    await inter.editReply({ content: "正在轉換訊息..." });

    /**
     * @type {string}
     */
    let msg = mesg.content;
    for (let s of splits) {
      if (msg.endsWith(s))
        check = 1;
    }
    if (check === 0) {
      msg += " ";
    }

    let count = 0;
    for (let i = 0; i < msg.length; i++) {
      count += 1;
      if (splits.includes(msg[i])) {
        switch (count) {
          case 1:
            // sus
            throw new Error(`SUSSY BAKA AT ${i}\n Total msg length:${msg.length}`);
          case 2:
            // normal
            break;
          case 3:
            if (letters.indexOf(msg[i - 1]) < letters.indexOf(msg[i - 2])) {
              msg = msg.slice(0, i - 2) + msg[i - 1] + msg[i - 2] + msg.slice(i);
            }
            break;
          case 4:
            if (letters.indexOf(msg[i - 2]) < letters.indexOf(msg[i - 3])) {
              msg = msg.slice(0, i - 2) + msg[i - 1] + msg[i - 2] + msg.slice(i);
            }
            if (letters.indexOf(msg[i - 1]) < letters.indexOf(msg[i - 3])) {
              msg = msg.slice(0, i - 3) + msg[i - 1] + msg[i - 2] + msg[i - 3] + msg.slice(i);
            }
            if (letters.indexOf(msg[i - 1]) < letters.indexOf(msg[i - 2])) {
              msg = msg.slice(0, i - 2) + msg[i - 1] + msg[i - 2] + msg.slice(i);
            }
            break;
        }
        count = 0;
      }
    }

    await inter.editReply({ content: "正在戳神奇網站..." });

    try {
      const ret = await translate(msg);
      await inter.editReply({ content: ret });
    } catch (error) {
      console.error(error);
      await inter.editReply({ content: "翻譯時發生錯誤。" });
    }
  },
};

/**
 * Translates the given message using the Zhuyin Decode tool.
 * @param {string} msg - The message to translate.
 * @returns {Promise<string>}
 */
async function translate(msg) {
  try {
    const response = await axios.get(`https://inputtools.google.com/request?text=${encodeURI(msg).replace("%20","%3D")}&itc=zh-hant-t-i0-und&ie=utf-8&oe=utf-8&app=demopage`);
    const data = response.data;
    // console.log(data);
    return new Promise(res=>res(data[1][0][1][0]))
  } catch (error) {
    console.log(error);
  }

};
