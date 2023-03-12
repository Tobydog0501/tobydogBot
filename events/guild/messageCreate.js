const prefix = "t/"

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
  }
  
  
}
