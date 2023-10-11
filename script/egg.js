
let description = document.querySelector(".description")
description.addEventListener("input", playDescription)

function playDescription(){
    if(description.textContent === "do a barrel roll" || description.textContent === "Do a barrel roll"){
        document.body.style.animation = "barrelRoll 3s";
    }else if(description.textContent === "askew" || description.textContent === "Askew"){
        document.body.style.transform = 'rotate(2deg)'
    }
}

