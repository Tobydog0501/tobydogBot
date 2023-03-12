
/**
 * Replace old stuff.
 * @param {string} msg The msg content.
 * @returns {Promise<string>} String to put inside embed.
 * @example
 * const new_msg = await require("check.js")(msg.content);
 */

module.exports = async(msg)=>{
    msg = msg.replace(/:/,"：");
    var hw = msg.split("考試：")[0].replace("作業：","");
    var test = msg.split("考試：")[1].split("需帶物品：")[0];
    var brings = msg.split("考試：")[1].split("需帶物品：")[1];

}