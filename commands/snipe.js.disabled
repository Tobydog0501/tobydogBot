const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const fs = require('fs');


module.exports = {
    name:'snipe',
    description:"Check deleted msg",
    category:"test",
    aliases:['s'],
    async execute(bot,msg,args){
        const ui = JSON.parse(fs.readFileSync('./env.json', 'utf-8'));
        try{
            let msgList = ui[msg.guild.id][msg.channel.id]
            msgList = msgList.map((v,i)=>{
                
                return([{
                    name:"內容",
                    value:v["content"],
                    inline:true
                },{
                    name:"時間",
                    value:`${v["date"].split('T')[0]} ${v["date"].split("T")[1].split(".")[0]}`,
                    inline:true
                },{
                    name:"傳送者",
                    value:`<@${v["author"]}>`,
                    inline:true
                }])
            })
            if(msgList.length>7){
                var index = 0
                while(msgList.length){
                    let ebd = new EmbedBuilder()
                        .setTitle("訊息刪除查詢功能")
                        .setColor("Random")
                        .setDescription("於本頻道刪除的訊息:")
                        .setTimestamp();

                    const a = msgList.slice(index,(index+7<=msgList.length?index+7:undefined));
                    for(var s of a){
                        ebd.addFields(s[0]);
                        ebd.addFields(s[2]);
                        ebd.addFields(s[1]);
                    }
                    await msg.channel.send({embeds:[ebd]});
                    msgList.splice(0,8)
                }
            }else{
                let ebd = new EmbedBuilder()
                    .setTitle("訊息刪除查詢功能")
                    .setColor("Random")
                    .setDescription("於本頻道刪除的訊息:")
                    .setTimestamp();
                for(var s of msgList){
                    ebd.addFields(s[0]);
                    ebd.addFields(s[2]);
                    ebd.addFields(s[1]);
                }
                await msg.channel.send({embeds:[ebd]})
            }
            
            
        }catch (e){
            console.error(e);
            await msg.reply("查無訊息")
        }
      
    }
  }