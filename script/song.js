let prout = new Audio("song/prout.mp3");
let taGeul = new Audio("song/tageul.mp3")
let title = document.getElementById('title');
let home = document.getElementById('menubutton');


title.addEventListener('mouseover', pTaGeul)
home.addEventListener('mouseover', pProut)
function pProut(){
    prout.play();
}

function pTaGeul() {
    taGeul.play();
}