const prefix = "t/"
const fs = require('fs');
var ui = JSON.parse(fs.readFileSync('./env.json', 'utf-8'));



module.exports = async (Discord,bot,msg)=>{
    if(msg.content.length<=3||msg.author.bot||msg.content.startsWith("t/")||msg.content.startsWith("&")){
        return;
    }
    let inputVal = {
        "author":msg.author.id,
        "date":msg.createdAt,
        "content":msg.content
    }
    if(ui[msg.guild.id][msg.channel.id]){
        ui[msg.guild.id][msg.channel.id].push(inputVal)
    }else{
        ui[msg.guild.id][msg.channel.id] = [inputVal]
    }
    await write(ui);
}

async function write(w){
    var str = JSON.stringify(w)
    fs.writeFile('./env.json',str,(err)=>{
        if (err){
            console.warn(err)
        }
    })
    return new Promise(res=>res());
}