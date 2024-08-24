const txtAnim = document.querySelector('.description');
var largeur = window.innerWidth;

// TypeWriter is a very good plugin, I recommend it to all developers who want to be as good as me. :)
let go = 1;

if(go == 1){
new Typewriter(txtAnim, {
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('I am a ')
.pauseFor(300)
.typeString('<strong>full stack developer !</strong>')
.pauseFor(1000)
.deleteChars(22)
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
.typeString('<span style="color: #f0db4f">Three.js</span>')
.pauseFor(300)
.typeString('<strong> developer !</strong>')
.pauseFor(1000)
.deleteChars(22)
.typeString('<span style="color: #68a063">Node.js</span>')
.pauseFor(300)
.typeString('<strong> developer !</strong>')
.pauseFor(1000)
.deleteChars(19)
.typeString('<strong>full stack developer !</strong>')
.start()



}


const btncopy = document.getElementById('discordL');

const txt = "rapha1004";

btncopy.addEventListener('click', () => {

    navigator.clipboard.writeText(txt);
    setTimeout(() => {
        alert("my nickname was copied!"); 
    }, 200);
})



