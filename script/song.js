let taGeul = new Audio("song/tageul.mp3")
let title = document.getElementById('title');
let home = document.getElementById('menubutton');

title.addEventListener('mouseover', pTaGeul)

function pTaGeul() {
    taGeul.play();
}