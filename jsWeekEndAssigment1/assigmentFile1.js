/* exe1:
will take a bollean value and reutrn matched string true/false
*/
function booleanAsString(inputBool){
    if(typeof(inputBool) != "Boolean"){
        return "The input isnt valid..."
    }else{
        return inputBool.toString();
    }
}
console.log(booleanAsString(false));

/*sumOfLowest:
get an positive integer array of minimum length of 4 and need to return the sum of the two minimum valuess in it
*/

function getSumOfLowest(inputArray){
    let minimum1 = inputArray[0];
    let minimum2 = -1;
    
    for(let index = 1; index < inputArray.length; index++){
        if(inputArray[index] <= minimum1){
            minimum2 = minimum1;
            minimum1 = inputArray[index];
        }
    }
    if(minimum2 === -1){
        minimum2 = inputArray[1];
        for(let index = 2; index < inputArray.length; index++){
            if(inputArray[index] <= minimum2){
                minimum2 = inputArray[index];
            }
        }
    }
    return (minimum1+minimum2);
}

console.log(getSumOfLowest([19,99,9,1222,10,19,3]));

/*
//toIntArray
input : will be an array of 0/1 on unkonwn length
output: a matched array of the integer values ...
*/
function toIntArray(binaryArray){
    const resultArray = [];
    for(let index = 0 ; index < binaryArray.length; index+=4){
        if(binaryArray.length - index >= 4){
            let a = binaryArray.slice(index,index+4).join('');
            a  = parseInt(a,2);
            resultArray.push(a)
        }
    }
    console.log(resultArray);
}
//toIntArray([0,1,0,0,1,0,1,0,1,1,1,0,1]);
toIntArray([0,1,1,1]);