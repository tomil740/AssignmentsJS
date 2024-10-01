/*
exercise 1 count movie titles:
input : array of movieTitles(strings)
return value will be the number of items
*/
function countMoviesTitles(){
    
}
/*
exercise 2 find movie by title
input : nested array of movies names
return value a boolean value rather the movie name was found in the input array
*/
function isMovieTitle(nestedArray , theTitle){
    let workArray = nestedArray;
    let result = false;
    //check if there is first item in the array
    if(workArray.length > 0){
        if(typeof(workArray[0]) === "string"){
            //search for the title
            if(workArray[0]=== theTitle){
                return true;
            }
            let subArrayResult = isMovieTitle(workArray.slice(1),theTitle);
            if(subArrayResult){
                return subArrayResult;
            }
        }else{
            result = isMovieTitle(workArray[0],theTitle);
            if(result){
                return result;
            }
            workArray = workArray.slice(1);
            result = isMovieTitle(workArray,theTitle);
        }
    }
    return result;
}

//test
const checkData = isMovieTitle([['Inception', 'The Matrix'], ['Interstellar',
'Dunkirk']], 'Dunkirk');
console.log(checkData);

/*exercise 3 sum the array of movie durations:
input: array of numbers
return a number type value of the array sum
*/
function getDuratinsSum(theArr){
    let theSum = 0;
    let workingArr = theArr;
    if(theArr.length < 1){
        return theSum;
    }else{
        theSum+=workingArr[0];
        workingArr = workingArr.slice(1);
        theSum+=getDuratinsSum(workingArr);
    }
    return theSum;
}
console.log(getDuratinsSum([120, 150, 180]));

/*
exercise 4 find longest duration
input: a nested array of durations
return value will be the longeset duration of them all
*/
function getLongestDuration(theArr){
    //we will go over each item and compare between them by returning to the og call each item...
    let longesetDuration = -1;
    let workingArr = theArr;
    if(theArr.length < 1){
        return longesetDuration;
    }else{
        if(typeof(workingArr[0]) === "number"){
            let maxVal= -1;
            for(let durationTime of workingArr){
                if(maxVal < durationTime)
                    maxVal = durationTime;
            }
            return maxVal;
        }else{
            const item = getLongestDuration(workingArr[0])
            workingArr = workingArr.slice(1);
            const item2 = getLongestDuration(workingArr);
            longesetDuration = (item>item2)? item : item2;
        }
    }
    return longesetDuration;
}
console.log(getLongestDuration([[120,3, 150,270 ,180],[120,23, 150,1 ,980]]));

/*
exercise 5: calculate average movie rating
input : nested array of movies ratings(numbers)
return value will be a number type represent the average of them all...
*/
function getAverageRating(theArr){
    let theSum = [0,0];
    //case 3: finesh go over the input array
    if(theArr.length < 1){
        return theSum;
    }else{
        //case 2 , array of the items...
        if(typeof(theArr[0]) === "number"){
            //the action,calculate the subArray sum
            let subArraySum = 0;
            for(let item of theArr){
                subArraySum+=item
            }
            theSum[0]+=subArraySum;
            theSum[1]+=theArr.length;
            console.log(theSum);
            //case 1:go over array of array
        }else{
            //case 2 of this spesfic subArray
            const subResult = getAverageRating(theArr[0]);
            theSum[0]+=subResult[0];
            theSum[1]+=subResult[1];
            const subResult2 = getAverageRating(theArr.slice(1));
            theSum[0]+=subResult2[0];
            theSum[1]+=subResult2[1];
        }
    }
    return (theSum);
}
const a = getAverageRating([[4.5, 4.0, 5.0],[4.5, 4.0, 90,5,5.0]]);
console.log(a[0]/a[1]);

/*
exercise 6: list all genres:
input : an nested array of strings represents genres names
return value will be a single array with unique names from the input array
*/
function listAllGenres(inputArr){
    let result = [];
    if(inputArr.length < 1){
        //return result;
    }else{
        if(typeof(inputArr[0]) === "string"){
            const subArray = inputArr;

            result = makeUnique(subArray,result);
            result = makeUnique(listAllGenres(inputArr.slice(1)),result);
        }else{
            //if there is a sub array
            result = makeUnique(listAllGenres(inputArr[0]),result);
            //result = result.concat(listAllGenres(inputArr[0]));
            //result = result.concat(listAllGenres(inputArr.slice(1)));
            result = makeUnique(listAllGenres(inputArr.slice(1)),result);
        }
    }

    return result;
    
}
function makeUnique(subArray,result){

    let bigercollection = subArray.length > result.length ? subArray : result;
    const smallerCollection = bigercollection === subArray ? result : subArray;
    let theResult = bigercollection;   

    for(let bigerItem of bigercollection){
        let isUnique = false;
        for(let smallerItem of smallerCollection){
            if(bigerItem === smallerItem){
                isUnique = false;
                break;
            }
            if(isUnique){
                theResult.push(smallerItem);
            }
        }
    }
    console.log("the result is ");
    console.log(theResult);
    return theResult;
        
    /*

    for(let newItem of subArray){
        let isUnique = true;
        let index = 0;
        while(isUnique && index < result.length-1){
            if(result[index] === newItem)
                isUnique = false;

            index++;
        }
        if(isUnique)
            theResult.push(newItem);
    }
    console.log("the result is ");
    console.log(theResult);
    return theResult;
    */
}

console.log(listAllGenres([['Action', 'Thriller'],['Drama', 'Action'],['Sci-Fi']]));