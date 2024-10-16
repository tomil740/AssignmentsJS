//const res = require("express/lib/response");

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

/*Tribonacci exercise:
the function will get the tribonacci first 3 items and n(a int positive number)
and will return n length of the matched tribonacci list
*/
function getNTribonacciLst(theSeeds,theLen){
    let result = theSeeds;
    if(theLen > 3){
        //we will track 3 seeds and update them on every loop etration
        while(result.length < theLen){
            const newItem = result[result.length-1] + result[result.length-2] + result[result.length-3]
            result.push(newItem);
        }
    }else{
        switch(theLen){
            case 0 :
                result = [];
                break;
            case 1 :
                result = theSeeds[0];
                break;
            case 2 :
                result = theSeeds.slice(0,2);
                break; 
            case 3 :
                result = theSeeds;
                break;           

        }
    }
    return result;
}
console.log(getNTribonacciLst([1,1,1],9));
console.log(getNTribonacciLst([0,1,1],9));

/*
triming exercise
input= a string with minimum length of 2 
return the matched string without the first and last charecters
*/
function trimEdges(theString){
    return theString.slice(1,theString.length-1);
}
console.log(trimEdges("abc"));

/*
repeat str :
input a string and matched number of repations
return the matched string n times
*/
function repeatStr(str,n){
    let theResult = "";
    if(typeof(n)!= "number" || n <= 0 || typeof(str)!="string" || str === ""){
        theResult = "the input value was invalid";
    }else{
        for(let i = 0; i < n; i++){
            theResult+=str;
        }
    }

    return theResult;
}

console.log(repeatStr("abc",10));

/*
toCamel cases:
input a deshed/underlined seprated string...
return the matched string in camel cases
*/
function getSeparatorIndex(str){
    const a = str.indexOf("-");
    const b = str.indexOf("_");

    if(a === -1 || b === -1){
        if(a === -1 && b === -1){
            return -1
        }else{
            return (a===-1) ? b : a;
        }
    }else{
        return (a>b) ? b : a;
    }  
}


function toCamelCases(theString){
    let result = "";
    if(typeof(theString)!= "string" || theString.length < 1){
        result =  "input string isnt valid";
    }else{
        let todoStr = theString; 
        //init part

        let firstWord = getSeparatorIndex(theString);
        if(firstWord === -1){
            result = theString;
        }else{
            result = theString.slice(0,firstWord)
            todoStr = theString.slice(firstWord);
        }
        //loop through the string word by the sepration index and and apply the matched updates to it
        while(todoStr.indexOf("-") != -1 || todoStr.indexOf("_") != -1){
            const wordS = getSeparatorIndex(todoStr);
            
            todoStr = (todoStr.length != wordS+1)?
                todoStr[wordS+1].toUpperCase() + todoStr.slice(wordS+2) : "";
    
    
            const wordE = getSeparatorIndex(todoStr);
            if(wordE != -1){
                result+=todoStr.slice(0,wordE);
                todoStr = todoStr.slice(wordE);
            }else{
                //if it isnt  found we finesh...
                result+=todoStr;
            }
        }
    }
    return result;
}

console.log(toCamelCases("some-string-dsf"));
console.log(toCamelCases("some-string-dsf-"));
console.log(toCamelCases("some_string_dsf-"));
console.log(toCamelCases("some_string_dsf-"));

/*
toWeirdCases:
input=> a strings includes only icludes :
* single spaces between words 
* charceters!

return value will be the matched string in weirdCases according to the defination
*/

function toWeirdCase(inputStr){
    let result = "";
    let todoStr = inputStr;

    while(todoStr.indexOf(" ") != -1){
        const wordEndIndex = todoStr.indexOf(" ");
        const theWord = (todoStr.slice(0,wordEndIndex)).toLowerCase();
        let newWord = "";
        for(let index = 0; index < theWord.length; index++){
            if(index%2 === 0){
                newWord+=(theWord[index].toUpperCase());
            }else{
                newWord+=theWord[index];
            }
        }
        result+=" " + newWord;
        todoStr = todoStr.slice(wordEndIndex+1);
    }
    return result;
}
console.log(toWeirdCase("some word I try"));
console.log(toWeirdCase("Weird string case"));

/*
toInitials:
input => a string with two words with one space only between them (only chars...)
return the first two charecters in uperCase with dots between them 
*/
function getInitials(theWords){
    //get the words:
    const theSpace = theWords.indexOf(" ");
    const word1 = theWords.slice(0,theSpace);
    const word2 = theWords.slice(theSpace+1);

    return `${word1[0].toUpperCase()}.${word2[0].toUpperCase()}`;
}
console.log(getInitials("hello world"));

/*
maskify:
input a string value (can be any string with no constraints)
return vlaue matched string with # mask to all beside the last 4 charecters 
*/
function maskify(theStr){
    let exposeSIndex = (theStr.length > 4) ? theStr.length-4 : 0;
    let result = "";
    for(let i = 0; i < exposeSIndex; i++){
        result+="#";
    }
    result+=theStr.slice(exposeSIndex);   
    return result;
}
console.log(maskify("12   "));
console.log(maskify("4556364607935616"));

/*
shortest word:
input: => a string of words(never empty alwase a string) 
*asume assume they separated by ,*
returns the shorteset word length
*/
function shortestWord(theWords){
    let shortestWord = 100000000;
    let todoWords = theWords;
    while(todoWords.indexOf(",")!=-1){
        const word = todoWords.slice(0,todoWords.indexOf(","));
        todoWords = todoWords.slice(todoWords.indexOf(",")+1);
        if(word.length < shortestWord)
            shortestWord = word.length;
    }

    //in case of 1 word,the length is the all string
    if(todoWords.length!=0){
        if(todoWords.length < shortestWord)
            shortestWord = todoWords.length;
    }
    return shortestWord;
}
const a =  shortestWord("some,dsfs,dsfsdf,nlk");
const b =  shortestWord("a");
const c =  shortestWord("abcd");
console.log(`first ${a} second ${b} and last one ${c}`);

/*
longeset word:
input: => a string of words(never empty alwase a string) 
*asume assume they separated by ,*
returns the longest word length
*/
function longeset(theWords){
    let longeset = -1;
    let todoWords = theWords;
    while(todoWords.indexOf(",")!=-1){
        const word = todoWords.slice(0,todoWords.indexOf(","));
        todoWords = todoWords.slice(todoWords.indexOf(",")+1);
        if(word.length > longeset)
            longeset = word.length;
    }

    //in case of 1 word,the length is the all string
    if(todoWords.length!=0){
        if(todoWords.length > longeset)
            longeset = todoWords.length;
    }
    return longeset;
}
const e =  longeset("some,dsfs,dsfsdf,nlk");
const f =  longeset("a.dsgfdsfg,dsfsdf");
const g =  longeset("abcdkmkl,dsgfsdfg");
console.log(`first ${e} second ${f} and last one ${g}`);


//file 2 Advanced Iteration Logic section:

/*
accum: 
*/
function accum(theStr){
    let result = "";
    //init
    if(theStr.length != 0){
        result+=theStr[0].toUpperCase();
    }

    for(let index = 1; index < theStr.length; index++){
        if(index === 4 && theStr[index] === "z"){
            //nothing
        }else{
            result+="-";
            result+=theStr[index].toUpperCase();
        }
        for(let i = 0; i < index; i++){
            result+=theStr[index].toLowerCase();
        }
    }

    return result;
}
console.log(
accum("abcd") );
console.log(
accum("RqaEzty")
);
console.log(
accum("cwAt")
);


/*
counting duplicates:
input: a string, will include only alpabets and numeric digits.
return value will be :
* total repeation of the matched elements
* and some description of each...
*/
function CountPhraseDuplications(thePhrase){
    const history = [];
    const result = [];
    let total = 0;
    for(let itemToCheck = 0; itemToCheck < thePhrase.length; itemToCheck++){
        //check if it in history...
        let historyCheck = true;
        for(let item of history){
            if(item.toLowerCase() === thePhrase[itemToCheck].toLowerCase()){
                historyCheck=false;
            }
        }
        if(historyCheck){
            history.push(thePhrase[itemToCheck].toLowerCase());
            let counter = 0;
            let counterC = 0;
            for(let repationCheck = 0; repationCheck < thePhrase.length; repationCheck++){
                if(thePhrase[itemToCheck].toLowerCase() === thePhrase[repationCheck].toLowerCase()){
                    if(thePhrase[itemToCheck].toLowerCase() != thePhrase[repationCheck]){
                        counterC++;
                    }else{
                        counter++;
                    }
                }
            }
            result.push([thePhrase[itemToCheck],counterC,counter]);
        }
    }
    let resultSummary = "";
    for(let item of result){
        if(item[1]+item[2] != 1){
            //item repation...
            total++;
            //the matched item amount
            resultSummary+=` ${item[0].toLowerCase()} occurs ${item[1]+item[2]}`
            if(item[1] != 0 && item[2] != 0){
                resultSummary+=`(${item[0].toLowerCase()} occurs ${item[2]} times and 
                ${item[0].toUpperCase()} occurs ${item[1]} times)`
            }
        }
    }
    if(resultSummary === ""){
        resultSummary = "no characters repeats more than once";
    }
    return (`${total}# ${resultSummary}`);
}

console.log(CountPhraseDuplications("Indivisibilities"));
console.log(CountPhraseDuplications("aabBcde"));
console.log(CountPhraseDuplications("abcde"));
console.log(CountPhraseDuplications("aA11"));

//to lower/upper case on numbers dosnt effect them and return valid answer...

//6.3 organize strings
function organizeStrings(str1,str2){

    //convert each char into matched decimal value array(with all of the strings charecters)
    const theValues = [];
    for(let theChar of str1){
        theValues.push([theChar,theChar.charCodeAt()]);
    }
    for(let theChar of str2){
        theValues.push([theChar,theChar.charCodeAt()]);
    }


    //order the array by number from the smallest

    //the variable will be updated through all the chrecters until it will be sorted according to the hex value
    let valuesToOrder = theValues;
    let result = [];
    while(valuesToOrder.length > 1){
        //take randomly the first item in the update array every loop
        let minItem = valuesToOrder[0];
        for(let item of valuesToOrder){
            //skip the first item we initalize,in order to clean the duplications
            if(item != valuesToOrder[0]){
                //sort the smallest number in the array
                if(item[1] < minItem[1]){
                    minItem = item;
                }
                //delete duplications from our result array
                if(item[1] === minItem[1]){
                    valuesToOrder = removeItem(valuesToOrder,item);
                    if(valuesToOrder.length < 1){
                        break;
                    }
                }
            }
        }
        //remove the sorted minimum value item from the full array 
        valuesToOrder = removeItem(valuesToOrder,minItem);
        //add the sorted item to the result array
        result.push(minItem);
    }


    //convert the result array items to the matched string
    let outcome = [];
    for(let item of result){
        outcome.push(item[0]);
    }
    return outcome.join("");
}

console.log(organizeStrings("xyaabbbccccdefww","xxxxyyyyabklmopq"));
console.log(organizeStrings("abcdefghijklimnopqrstuvwxyz","abcdefghijklimnopqrstuvwxyz"));


//helper function to remove an item from the array
function removeItem(valuesToOrder,toRemoveItem){
    //remove the item
    let newValuesArray =[];
    for(let theItem of valuesToOrder){
        if(theItem != toRemoveItem){
            newValuesArray.push(theItem);
        }
    }
    return newValuesArray;
}
 

/*
exercise 6.4 isogram:
input : a stirng that includes only letters...
return value : a boolean value represent is the input string isogram
*/
console.log("exercise 6.4 isogram");

function isogram(inputStr){
    let result = true;

    if(inputStr.length > 1){
        let theStr = inputStr.toLowerCase();
        let itemToCompare = theStr[0];
        theStr = theStr.slice(1);
        while(theStr.length > 1){
            for(let char of theStr){
                if(itemToCompare === char){
                    result = false;
                    break;
                }
            }
            itemToCompare = theStr[0];
            theStr = theStr.slice(1);
        }
    }
    console.log(result);
    return result;
}
console.log(isogram("AbBc"));
console.log(isogram("Abc"));

/*
exercise 7,clone js default functions:
*/
console.log("exercise 7,clone js default functions:");
console.log("for each function");
/*
for each:
input : collection [string/array] and callBackFun
the function will apply the callback on each item of the match collection
*/
function forEach(theCollection, callBackFun){
    //colection valdition check
    if(typeof(theCollection) === "string" || Array.isArray(theCollection)){
        for(let item of theCollection){
            callBackFun(item);
        }
    }else{
        console.log("input collection is not valid...")
    }
}
//basic test
const testArray = ["abcgf","bvikkd","dsfdsf"];
//shoud print the result for each item
forEach(testArray,isogram);
//for not valid input
forEach(124,isogram);

/*
map function:
input a collection and matched callback method
return value : a new array with the callback function apply on each item of the original collection
*/
function map(theCollection, callBackFun){
    let newCollection = theCollection;
    //colection valdition check
    if(typeof(theCollection) === "string" || Array.isArray(theCollection)){
        newCollection = [];
        for(let item of theCollection){
            newCollection.push(callBackFun(item));
        }
        //check if its a string and should join back...
        if(typeof(theCollection) === "string"){
            newCollection = newCollection.join("");
        }
    }else{
        console.log("input collection is not valid...")
    }
    return newCollection;
}
//basic test
//shoud return the result for each item
console.log(`the map function,retun value ${map(testArray,isogram)}`);


/*
filter function 
input: matched collection and valdition function to each item
return value : will be matched copy of our input collection with the item thats pass the valdition function
*/
function filter(theCollection, callBackFun){
    let newCollection = theCollection;
    //colection valdition check
    if(typeof(theCollection) === "string" || Array.isArray(theCollection)){
        newCollection = [];
        for(let item of theCollection){
            if(callBackFun(item)){
                newCollection.push(item);
            }
        }
        //check if its a string and should join back...
        if(typeof(theCollection) === "string"){
            newCollection = newCollection.join("");
        }
    }else{
        console.log("input collection is not valid...")
    }
    return newCollection;
}

//shoud return oinly the isogram items in the new array
console.log(filter(testArray,isogram));

/*
exercise 8 : get rectangle perimeter
input : length and width
return value will be the matched rec perimeter to the input values
*/
function findPerimeter(length,width){
    let result = -1;
    //check the input values for valdition(must be number and positive)
    if(typeof(length) === "number" && typeof(width) === "number" && length > 0 && width > 0){
        result = (2*width)+(2*length);
    }else{
        console.log("input values isnt valid")
    }
    return result;
}
//basic test
console.log(findPerimeter(6,7));//should be 26
console.log(findPerimeter(20,10));//should be 60
console.log(findPerimeter(2,9));//should be 22