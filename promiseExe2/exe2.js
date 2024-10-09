/*
change color every 5 seconds
*/
const theText = document.querySelector("main section h1");
const theBut = document.querySelector("main section button");

function togleStyle(){
    theText.classList.toggle("style2");
}

function changeElement(counter){
    togleStyle();
    if(counter != 4){
        setTimeout(()=>{changeElement(counter+1)},500)
    }
}

function nestedCallBacks(){
    const counter = 0;
    changeElement(counter);
}



function promiseInit(){
    const res =  new Promise(function(myResolve, myReject) {
        setTimeout(myResolve,500);
       
    })
    return res;
}
function promiseSoultion(){
    promiseInit().then(()=>{
        togleStyle();
        promiseInit().then(()=>{
            togleStyle();
            promiseInit().then(()=>{
                togleStyle();
                promiseInit().then(()=>{
                    togleStyle();
                    promiseInit().then(()=>{
                        togleStyle();
                    })
                })
            })
        })
    })
}




theBut.addEventListener("click",promiseSoultion);
