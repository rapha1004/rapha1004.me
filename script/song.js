//This file is useless
let EES = new Audio("song/EES.mp3")
let title = document.getElementById('title');
let home = document.getElementById('menubutton');

title.addEventListener('mouseover', pEES)

function pEES() {
    EES.play();
}
