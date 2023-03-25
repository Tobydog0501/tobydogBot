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
 * @returns {Promise<object>}
 */
async function news(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://tw.news.yahoo.com');
    await wait(3000);
    const ret = await page.$$eval(`a[class="D(ib) Ov(h) Whs(nw) C($c-fuji-grey-l) C($c-fuji-blue-1-c):h Td(n) Fz(16px) Tov(e) Fw(700)"]`,
      el=>{
        return el.map((v,i)=>{
            if (i<=25)
                return {name:v.textContent,value:v.getAttribute('href'),inline:true}
            else 
                return undefined
        })
    });
    // console.log(ret)
    await wait(1000)
    await browser.close();
    // console.log(url)
    return new Promise(res=>res(ret.slice(0,24)));
}

module.exports = {
  name:'news',
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
    const ret = await news();
    const ebd = new EmbedBuilder()
        .setFields(ret)
        .setTitle("今日頭條")
        .setColor("Random")

    await msg.channel.send({embeds:[ebd]})

      
    
  }
}