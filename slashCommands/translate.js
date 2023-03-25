const { ContextMenuCommandBuilder,ApplicationCommandType,ContextMenuCommandInteraction } = require('discord.js');
const puppeteer = require('puppeteer');


module.exports = {
    data:new ContextMenuCommandBuilder()
      .setName('翻譯火星文')
      .setType(ApplicationCommandType.Message),
      
    /**
     * 
     * @param {ContextMenuCommandInteraction} inter 
     * @param {import("discord.js")} Discord 
     */
    
    async execute(inter,Discord){
      await inter.deferReply();
      const mesg = await inter.channel.messages.fetch(inter.targetId);
      const splits = ["3","4","6","7"," "];
      const letters = "1qaz2wsxedcrfv5tgbyhnujm8ik,9ol.0p;/-";
      var check = 0;
	  await inter.editReply({content:"正在轉換訊息..."})
      /**
       * @type {string}
       */
      var msg = mesg.content; 
	  for(let s of splits){
		  if(msg.endsWith(s))
			check = 1;
	  }
      if(check == 0){
        msg += " ";
      }
      
      var count = 0
      for(let i=0;i<msg.length;i++){
        count += 1;
        if(splits.includes(msg[i])){
          switch(count){
            case 1:
              // sus
              throw new Error(`SUSSY BAKA AT ${i}\n Total msg length:${msg.length}`);
              break;
            case 2:
              // normal
              break;
            case 3:
              if(letters.indexOf(msg[i-1])<letters.indexOf(msg[i-2])){
                msg = msg.slice(0,i-2)+msg[i-1]+msg[i-2]+msg.slice(i);
              }
              break;
            case 4:
              if(letters.indexOf(msg[i-2])<letters.indexOf(msg[i-3])){
                msg = msg.slice(0,i-2)+msg[i-1]+msg[i-2]+msg.slice(i);
              }if(letters.indexOf(msg[i-1])<letters.indexOf(msg[i-3])){
				msg = msg.slice(0,i-3)+msg[i-1]+msg[i-2]+msg[i-3]+msg.slice(i);
              }if(letters.indexOf(msg[i-1])<letters.indexOf(msg[i-2])){
				msg = msg.slice(0,i-2)+msg[i-1]+msg[i-2]+msg.slice(i);
			  }
              break;
          }
          count = 0
        }
      }
      
      await inter.editReply({content:"正在戳神奇網站..."})
      
      
      const ret = await translate(msg);
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







