
let description = document.getElementById("title")
let pp = document.getElementById("titre-img")
description.addEventListener("input", playDescription)

function playDescription(){
    
    if(description.textContent === "do a barrel roll" || description.textContent === "Do a barrel roll"){
        document.body.style.animation = "barrelRoll 3s";
        setTimeout(() => {
            description.textContent = "Hello, I'm Raphaël 👋"
            document.body.style.animation = "";
            //It's funny because the page turns on itself
        }, 3000);
    }else if(description.textContent === "askew" || description.textContent === "Askew"){
        //It's funny, I don't know why but its funny
        document.body.style.transform = 'rotate(2deg)'
      
    }else if(description.textContent === "duck" || description.textContent === "Duck"){ //The duck is the best animal, and canard101 is the best developer (after me)
        pp.src = "image/canardPp.jpeg"
    }else{
        document.body.style.transform = 'rotate(0deg)'
        pp.src = "image/pp.png"
    }
}

