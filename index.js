const { Client , Intents , Collection}  = require('discord.js')
const client = new Client({intents:32767})

client.once('ready',()=>{
    console.log("봇이 준비되었습니다")
})

client.on('messageCreate' , message=>{
    if(message.content == "김솜앵"){
        message.reply("바보")
    }
})

client.login("OTI4MzAxMzE2MDUxMTczMzg2.YdWx-A.hv9Lwe_J4BDZZdb8eURzIt4Y0Qk")