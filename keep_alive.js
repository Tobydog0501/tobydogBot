const express = require('express');
const server = express();
const d = new Date()
const date = `${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
server.all('/', (req, res)=>{
    res.send('Your bot is alive!');
});
function keepAlive(){
    server.listen(3030, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;