const prefix = "t/"
const OpenAI = require("../../plugins/chatGpt");
/**
 * 
 * @param {import("discord.js")} Discord 
 * @param {import("discord.js").Client} bot 
 * @param {import("discord.js").Message} msg 
 * @returns 
 */
module.exports = async (Discord,bot,msg)=>{
  if(msg.author.bot){
    return
  }
  if(msg.content.toLowerCase().startsWith(prefix)){ //execute commands
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase(); //改為小寫
    
    const command = bot.commands.get(cmd);
    if(command) {
      await command.execute(bot,msg,args,Discord);
      await msg.delete();
    }else{
      await msg.reply(`我好像沒有這個指令欸...`)
    }
    return;
  }else if(msg.content.toLowerCase().startsWith("gpt ")){
    if(msg.content.toLowerCase() == "gpt close"){
      bot.AI.set("gpt",new OpenAI(require("../../openAi.json")["tkn"]));
      await msg.reply(`Chat history cleared`)
      return;
    }
    const ai = bot.AI.get("gpt")?bot.AI.get("gpt"):new OpenAI(require("../../openAi.json")["tkn"]);

    await ai.generateText(msg.content.toLowerCase().replace('gpt ',''),800)
        .then(async res=>{
          await msg.reply(res);
        })
        .catch(async err=>{
          await msg.reply("Something went wrong...\n"+err);
        });
    bot.AI.set("gpt",ai);

    
  }
  
  
}
