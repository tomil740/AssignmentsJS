const buttonDiv = document.querySelector("div#dynamicForm");
const addButField = buttonDiv.firstElementChild;
const submit =  buttonDiv.lastElementChild;

console.log(submit);

addButField.addEventListener("click", addField);
submit.addEventListener("click",submitForm);

function addField(){
    const newInputElement = document.createElement('input');
    buttonDiv.appendChild(newInputElement);
}

/*will go over all the avilabel input fields and check all of them are field:
   ** if they are field create matched string with all the values and alret them
   ** if not all of them are fill set an alret to fill all of theme
*/
function submitForm(){
    const inputFields = document.querySelectorAll('#dynamicForm input');
    let allFilled = true;
    const result = [];

    inputFields.forEach((inputElement)=>{
        console.log(1);
        const theInput = inputElement.value;
        console.log(theInput);
        result.push(theInput);
        if(theInput.length < 1){
            allFilled = false;
        }
    })

    if(allFilled){
        alert(result.join(" the input  : "));
    }else{
        alert("make sure all the filleds are filled");
    }
}