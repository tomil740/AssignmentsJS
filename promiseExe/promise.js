const checkBoxElement = document.querySelector("body label input");
const promiseBut = document.querySelector("body button");
const theMesElement = document.querySelector("body div.message");

function addClass(theClass){
    let toRemove = "resolved";
    if(theClass == "resolved"){
        toRemove = "rejected";
    }
    theMesElement.classList.remove(toRemove);
    theMesElement.classList.add(theClass);
}

function initProm(){
/*
crate matched promise object that will warp around our async process and with and will return the mathced result accoridng to our condition 
*/
    const res =  new Promise(function(myResolve, myReject) {
        if(checkBoxElement.checked){
            setTimeout(function() { myResolve('The Promise has been resolved!'); }, 1000);
        }else{
            setTimeout(function() { myReject('The Promise has been rejected!'); }, 1000);
        }
        
    });
    return res;

}

function getPromise(){
    const initalizePromise = initProm();
    initalizePromise.then(value=>{
        theMesElement.textContent = value;
        addClass("resolved");
    });

    initalizePromise.catch(value=>{
        theMesElement.textContent = value;
        addClass("rejected")
    })

}


promiseBut.addEventListener("click",getPromise);

