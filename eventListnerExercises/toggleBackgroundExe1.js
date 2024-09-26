const toggleBut = document.querySelector('button#toggleButton');
const theBody = document.querySelector("body");

toggleBut.addEventListener("click",toggleBackgroundColor);

function toggleBackgroundColor(){
    theBody.classList.toggle("dark");
}