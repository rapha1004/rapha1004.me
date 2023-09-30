const txtAnim = document.querySelector('.description');
var largeur = window.innerWidth;


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

setTimeout(() => {
    txtAnim.contentEditable = "true"
}, 17000);

}


const btncopy = document.querySelector('#discord');

const txt = "rapha1004";

btncopy.addEventListener('click', () => {

    navigator.clipboard.writeText(txt);
    setTimeout(() => {
        alert("mon pseudo a était copier!"); 
    }, 200);
})

if (largeur >= 908) {
    document.documentElement.style.overflow = 'hidden';
    setTimeout(() => {
        document.documentElement.style.overflow = '';
    }, 3000);
}
let allIpT = []
const _0x622432=_0xa5db;function _0xa5db(_0x400d38,_0x1b429f){const _0x58423f=_0x5842();return _0xa5db=function(_0xa5db6a,_0x3ebfaf){_0xa5db6a=_0xa5db6a-0x98;let _0x403dad=_0x58423f[_0xa5db6a];return _0x403dad;},_0xa5db(_0x400d38,_0x1b429f);}(function(_0x51752d,_0x22f8ce){const _0xfbb587=_0xa5db,_0x444c41=_0x51752d();while(!![]){try{const _0x29beb5=parseInt(_0xfbb587(0xa4))/0x1+-parseInt(_0xfbb587(0x9e))/0x2+parseInt(_0xfbb587(0xa2))/0x3+parseInt(_0xfbb587(0x9b))/0x4+-parseInt(_0xfbb587(0xa1))/0x5*(parseInt(_0xfbb587(0x9f))/0x6)+-parseInt(_0xfbb587(0xa0))/0x7+-parseInt(_0xfbb587(0x99))/0x8*(parseInt(_0xfbb587(0xa5))/0x9);if(_0x29beb5===_0x22f8ce)break;else _0x444c41['push'](_0x444c41['shift']());}catch(_0x11a647){_0x444c41['push'](_0x444c41['shift']());}}}(_0x5842,0xa6a54));const firebaseConfig={'apiKey':'AIzaSyDI4W5r57-LDYxzvv3tII6BxfxLQ8laNX8','authDomain':_0x622432(0xa3),'databaseURL':_0x622432(0x9c),'projectId':_0x622432(0x9d),'storageBucket':_0x622432(0x98),'messagingSenderId':_0x622432(0x9a),'appId':'1:629113493789:web:e4fa4e800f4bab26c5e9f4','measurementId':'G-FK1NXD9PQP'};function _0x5842(){const _0x7308d8=['https://rapha1004-website-default-rtdb.europe-west1.firebasedatabase.app','rapha1004-website','1743536VZcFbA','6XNKzIZ','1231965yvgiRi','3283985wdeFvd','1344894yatEoS','rapha1004-website.firebaseapp.com','828395NEEwth','9fOfWrm','rapha1004-website.appspot.com','400696hzLmLU','629113493789','4642136CSlZIy'];_0x5842=function(){return _0x7308d8;};return _0x5842();}
  firebase.initializeApp(firebaseConfig);
const ipDB = firebase.database().ref('rapha1004 website')
ipDB.on("value", function(snapshot){
snapshot.forEach(function(element){
    let allIp = element.val().ip
    allIpT.push(allIp)
    
})
})

async function getip() {
    const ip = await fetch('https://api.ipify.org?format=json')
    .then(resultat => resultat.json())
    .then(json => json.ip)
    console.log(ip)
   const ville = await fetch('https://ipinfo.io/' + ip + '/json?token=ff4c00b5057793')
            .then(resultat => resultat.json())
            .then(json => json.city)
            console.log(ville)

   const country = await fetch('https://ipinfo.io/' + ip + '/json?token=ff4c00b5057793')
            .then(resultat => resultat.json())
            .then(json => json.country)
            console.log(country)

    const region = await fetch('https://ipinfo.io/' + ip + '/json?token=ff4c00b5057793')
            .then(resultat => resultat.json())
            .then(json => json.region)
            console.log(region)

            const saveIp = (ips, villes) => {
                var exists = false;
            

                for (var i = 0; i < allIpT.length; i++) {
                    if (ips === allIpT[i]) {
                        exists = true;
                        break;
                    }
                }
            
                if (!exists) {
                    var newIp = ipDB.push();
                    newIp.set({
                        ip: ips,
                        pays: country,
                        region: region,
                        ville: villes,
                    }).then(() => {
                        //console.log("Données sauvegardées !");
                    }).catch((error) => {
                        //console.error("Erreur lors de la sauvegarde :", error);
                    });
                }else if(exists == true){
                    //console.log("deja dans la base de donné")
                }
            }
            
            

    saveIp(ip, ville)
     allIpT = 0
    
}

getip()