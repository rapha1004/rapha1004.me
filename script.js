const txtAnim = document.querySelector('.description');
let prout = new Audio("prout.mp3");
let taGeul = new Audio("tageul.mp3")
let title = document.getElementById('title');
let home = document.getElementById('menubutton');

let go = 1;

if(go == 1){
new Typewriter(txtAnim, {
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('I am a ')
.pauseFor(300)
.typeString('<strong>front-end developer !</strong>')
.pauseFor(1000)
.deleteChars(21)
.typeString('<span style="color: #FF2700">HTML</span>')
.pauseFor(300)
.typeString('<strong> developer !</strong>')
.pauseFor(1000)
.deleteChars(16)
.typeString('<span style="color: #264de4">CSS</span>')
.pauseFor(300)
.typeString('<strong> developer !</strong>')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color: #bf4080">SASS</span>')
.pauseFor(300)
.typeString('<strong> developer !</strong>')
.pauseFor(1000)
.deleteChars(16)
.typeString('<span style="color: #f0db4f">Java Script</span>')
.pauseFor(300)
.typeString('<strong> developer !</strong>')
.pauseFor(1000)
.deleteChars(23)
.typeString('<strong>front-end developer !</strong>')
.start()
}


const btncopy = document.querySelector('#discord');

const txt = "rapha#8572";

btncopy.addEventListener('click', () => {

    navigator.clipboard.writeText(txt);
    setTimeout(() => {
        alert("mon pseudo a était copier!"); 
    }, 200);
})

document.documentElement.style.overflow = 'hidden';
setTimeout(() => {
    document.documentElement.style.overflow = '';
}, 3000);


title.addEventListener('mouseover', pTaGeul)
home.addEventListener('mouseover', pProut)
function pProut(){
    prout.play();
}

function pTaGeul() {
    taGeul.play();
}

