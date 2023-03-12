const { ContextMenuCommandBuilder,ApplicationCommandType,ContextMenuCommandInteraction } = require('discord.js');
const discord = require('discord.js');
const puppeteer = require('puppeteer');


module.exports = {
    data:new ContextMenuCommandBuilder()
      .setName('翻譯火星文')
      .setType(ApplicationCommandType.Message),
      
    /**
     * 
     * @param {ContextMenuCommandInteraction} inter 
     * @param {discord} Discord 
     */
    
    async execute(inter,Discord){
      await inter.deferReply();
      const msg = await inter.channel.messages.fetch(inter.targetId);
      await inter.editReply({content:"正在戳神奇網站..."})
      const ret = await translate(msg.content);
      await inter.editReply({content:ret})
    }
}

async function wait(sec){
  return new Promise(res=>{
    setTimeout(()=>{
      res()
    },sec)
  })
}

/**
 * 
 * @param {string} msg 
 * @returns {Promise<string>}
 */
async function translate(msg){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.toolskk.com/zhuyin-decode');
    await page.type('input[id="decode-input"]', msg);
    await page.keyboard.press("Enter");
    await wait(1000);
    const ret = await page.$eval(`input[id="decode-output"]`,we=>we.value);
    await browser.close();
    return new Promise(res=>res(ret))
}







