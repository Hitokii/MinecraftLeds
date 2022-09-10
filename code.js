/*
"Lumière" par Hitoki
Commentaire :
Pour que le programme marche il faut 2 commandes blocks avec ces commandes :
execute as @e[type="Lampe"] run msg {NOM DU ROBOT} on
execute as @e[type="Lampe"] run msg {NOM DU ROBOT} off


Lampe est une entité du monde minecraft, nécessaire pour le fonctionnement du code


le tout relié au levier avec un peu de redstone et voilà ! :D
*/


// SERVER INFO
SERVERIP = "25.67.250.155" // IP du serv
SERVERPORT = 65428 // PORT du serv
BOTNAME = "Robot" // nom du robot

const GoveeLED = require('node-govee-led'); // lib API Govee
const mineflayer = require('mineflayer'); // lib Mineflayer du Robot

var Light = new GoveeLED({
    apiKey: "{CLE API}", 
    mac: "{ADRESSE MAC DE LA LED}",
    model: "{MODEL}"
})

const client = new mineflayer.createBot({  // Création du Robot
    username: BOTNAME,
    host: SERVERIP,
    port: SERVERPORT,
    version: 1.17
})



console.log("\033[1;34mTrying to access " + SERVERIP+":"+SERVERPORT + " as : " + BOTNAME)

client.on('whisper', (username,message) => {   // Interaction   ON/OFF
    if (message == "on") {
        Light.turnOn()
        console.log("\033[32m["+username+"] "+message)
        return
    }
    if(message == "off") {
        Light.turnOff()
        console.log("\033[31m["+username+"] "+message)
        return
    }else {
        console.log("\033[0m[" + username + "] " + message)
    }
})


client.once('spawn', () => {
    console.log("\033[0;32mSuccessfully Connected to the Server !")
})


