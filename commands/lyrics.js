const puppeteer = require('puppeteer');
const {Client,Message} = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

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
 * @returns {Promise<object>}
 */
async function lyrics(msg){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com.tw/');
    await page.waitForSelector('input[name="q"]')
    await page.type('input[name="q"]', `${msg} lyrics`);
    await page.keyboard.press("Enter");
    await wait(3000);
    const ret = await page.$eval(`div[jsname="WbKHeb"]`,el=>el.innerText);
    await page.click(`div[class="hUqmeb"]`)
    await wait(1000)
    const url = await page.$eval(`img[jsname="HiaYvf"]`,el=>el.src)
    const title = await page.$eval(`div[class="PyJv1b gsmt PZPZlf"]`,el=>el.innerText);
    await browser.close();
    // console.log(url)
    return new Promise(res=>res({"content":ret,"image":url,"title":title}));
}

module.exports = {
  name:'ly',
  description:"Register the slash commands",
  category:"test",
  
  /**
   * 
   * @param {Client} bot 
   * @param {Message} msg 
   * @param {string[]} args 
   * @returns 
   */
  async execute(bot,msg,args){
    const ret = await lyrics(args.join(" "));
    const ebd = new EmbedBuilder()
      .setTitle(`${ret["title"]} lyrics`)
      .setDescription(ret["content"])
      .setColor("Random")
      .setThumbnail(ret["image"]);
    msg.channel.send({embeds:[ebd]})
      
    
  }
}