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

/*
findNextPerfect square:
input: will be the suspisous current perfect square value(must be positive and integer...)
return value will be the next perfect sequrare value to it 
*/
function getNextPerfectSquare(currentSquare){
    //we will use the Math lib to squre root the values
    let theRoot = Math.sqrt(currentSquare);
    if(theRoot%1 != 0){
        return -1;
    }else{
        theRoot+=1;
        return Math.pow(theRoot,2);
    }
}

console.log(`the next perfect square is ${getNextPerfectSquare(14*14)}`);

/*
findUniqueNumber
input an array of minimum 3 charecters length, all numbers that include the same equal number through all beside 1 item
return value the unique number...
*/
function getUniqueItem(ogArray){
    let equalNum = ogArray[0];

    //get equalNum
    if(equalNum != ogArray[1]){
        if(equalNum != ogArray[2]){
            return equalNum;
        }else{
            return ogArray[1]
        }
    }

    for(let item of ogArray){
        if(item != equalNum)
            return item;
    }
}
console.log(getUniqueItem([1,21,21,21,21]))
console.log(getUniqueItem([21,21,2,21,21]))

/*
getNumSummation
input a integer positive value...
output the matched integer summation
*/
function getNumSummation(theNum){
    let summation = 0;

    for(let i = theNum; i > 0; i--){
        summation+=i;
    }
    return summation;
}
console.log(getNumSummation(8));

/*
getMatchedCentury
input: will be a integer value represting a year
retun: will be the matche century number to the input value...
*/
function getMatchedCentury(year){
    let result = Math.round(year/100);
    if(year%100 != 0)
        result+=1;

    return result;
}
console.log(`for the year 2011 the century is ${getMatchedCentury(2011)}`);
console.log(`for the year 2000 the century is ${getMatchedCentury(2000)}`);
console.log(`for the year 1900 the century is ${getMatchedCentury(1900)}`);
console.log(`for the year 1900 the century is ${getMatchedCentury(1901)}`);

/*
basic math:
input : action , value1 and value2
return the matched outcome
*/
function basicMath(action,num1,num2){
    let result;

    switch(action){
        case '+':
            result = num1+num2;
            break;

        case '-':
            result = num1-num2;
            break;

        case '/':
            result = num1/num2;
            break; 

        case '*':
            result = num1*num2;
            break;           
    }

    return result;
}
console.log(basicMath('-',22,-77));


/*calculate population groth time
params:
p0:positivie int
growPrecent = positive/null
aug = Integer
p = positive Integer
*/
function nb_year(p0,growPrecent,aug,p){
    let currentP =p0;
    let years = 0;

    let theGrowPrecnt = (growPrecent!=null)?
        (growPrecent/100):-1;
    
    while(currentP < p){
        let newP = currentP;
        if(theGrowPrecnt != -1){
            newP += currentP*theGrowPrecnt
        }
        years++;
        currentP = newP+aug;
    }
    return years;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));

/*getRemaingPepole on the bus
input : provided with matched array thats includes sub Int array with two values (amount of enter/exit from the bus)
the function will calculate and return the remaning pepole on the bus at the last station
*/

function getRemainPeople(busStopsData){
    let busSum = 0;

    for(let stopData of busStopsData){
        const toAdd = stopData[0]-stopData[1];
        busSum+=toAdd;
    }
    return busSum;
}

console.log(
    getRemainPeople(
        [
            [5,0],[10,4],[10,15],[6,2],[0,0],[18,7],[1,18]
        ]
    )
);