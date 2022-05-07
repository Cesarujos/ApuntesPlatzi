import MediaPlayer, { namecito } from './Play.js' //Para importar datos de otro archivo js;
import Autoplay from './Plugins/Autoplay.js'


console.log(namecito + " EL MEJOR DEL MUNDO")

const video = document.querySelector(".movie");
const button = document.querySelector(".button-movie");
const muteador = document.querySelector(".button-mute")
const player = new MediaPlayer({archivo: video, plugins: [new Autoplay()]})
 
button.onclick = () => player.togglePlay();
muteador.onclick = () => player.toggleMuted();
 
const botones = document.getElementsByClassName('button');
//Un getelementbyclass no emite una array sino un NodeList
Array.prototype.forEach.call(botones, button => {
    button.onclick = () => alert("Estas pulsando botones");
})