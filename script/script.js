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
// let allIpT = []
//  firebase.initializeApp(firebaseConfig);
// const ipDB = firebase.database().ref('rapha1004 website')
// ipDB.on("value", function(snapshot){
// snapshot.forEach(function(element){
//     let allIp = element.val().ip
//     allIpT.push(allIp)
    
// })
// })

// async function getip() {
//     const ip = await fetch('https://api.ipify.org?format=json')
//     .then(resultat => resultat.json())
//     .then(json => json.ip)
//     console.log(ip)
//    const ville = await fetch('https://ipinfo.io/' + ip + '/json?token=ff4c00b5057793')
//             .then(resultat => resultat.json())
//             .then(json => json.city)
//             console.log(ville)

//    const country = await fetch('https://ipinfo.io/' + ip + '/json?token=ff4c00b5057793')
//             .then(resultat => resultat.json())
//             .then(json => json.country)
//             console.log(country)

//     const region = await fetch('https://ipinfo.io/' + ip + '/json?token=ff4c00b5057793')
//             .then(resultat => resultat.json())
//             .then(json => json.region)
//             console.log(region)

//             const saveIp = (ips, villes) => {
//                 var exists = false;
            

//                 for (var i = 0; i < allIpT.length; i++) {
//                     if (ips === allIpT[i]) {
//                         exists = true;
//                         break;
//                     }
//                 }
            
//                 if (!exists) {
//                     var newIp = ipDB.push();
//                     newIp.set({
//                         ip: ips,
//                         pays: country,
//                         region: region,
//                         ville: villes,
//                     }).then(() => {
//                         //console.log("Données sauvegardées !");
//                     }).catch((error) => {
//                         //console.error("Erreur lors de la sauvegarde :", error);
//                     });
//                 }else if(exists == true){
//                     //console.log("deja dans la base de donné")
//                 }
//             }
            
            

//     saveIp(ip, ville)
//      allIpT = 0
    
// }

// getip()