
let description = document.getElementById("title")
let pp = document.getElementById("titre-img")
description.addEventListener("input", playDescription)

function playDescription(){
    
    if(description.textContent === "do a barrel roll" || description.textContent === "Do a barrel roll"){
        document.body.style.animation = "barrelRoll 3s";
        setTimeout(() => {
            description.textContent = "Hello, I'm Raphaël 👋"
        }, 3000);
    }else if(description.textContent === "askew" || description.textContent === "Askew"){
        
        document.body.style.transform = 'rotate(2deg)'
      
    }else if(description.textContent === "duck" || description.textContent === "Duck"){
        pp.src = "image/canardPp.jpeg"
    }else{
        document.body.style.transform = 'rotate(0deg)'
    }
}

function duck(){
    if(description.textContent === "duck"){
        pp.src = "image/canardPp.jpeg"
    }
}