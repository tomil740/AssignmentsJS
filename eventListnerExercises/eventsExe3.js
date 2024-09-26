let theCounter = 0;
const counterElement = document.querySelector("#counter");
const theBut = document.querySelector("button#clickButton");

theBut.addEventListener("click",onIncrementClick);

function onIncrementClick(){
    theCounter++;
    counterElement.textContent = theCounter; 
}

//extra,add rest button
const containerElement = document.querySelector(".container");
console.log(containerElement);
const restBut = document.createElement("button");
restBut.classList.add("restBut");
restBut.textContent = "Rest";
containerElement.appendChild(restBut);

restBut.addEventListener("click",onRestBut);

function onRestBut(){
    theCounter = 0;
    counterElement.textContent =theCounter;
}
