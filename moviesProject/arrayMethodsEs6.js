import {movies} from "/Users/tomieedf/webStackProjects/AssignmentsJS/moviesProject/mockDataMovies.js";

/*
exercise 1 display movie titles only...
*/
function getTitlesArray(moviesArr){
    return moviesArr.map((obj)=>obj.title);
}

console.log(getTitlesArray(movies));

/*
exercise 2 filter minimum rating movie objects
input : the og objects array , minimum rating(number)
return the matched filtered array
*/
function highlyRatedMovies(moviesArr,minimumRating){

    //validation check
    if(typeof(minimumRating)!= "number"){
        return moviesArr;
    }

    return moviesArr.filter((item)=>{
        if(item.rating > minimumRating){
            return item
        }
    })
}
console.log(highlyRatedMovies(movies,8.9));

/*
exercise 3 totalVotes:
input : movies objects array
return the matched sum of all the votes attribute value
*/
function getTotalVotes(ogArray){
    return ogArray.reduce(sumArray,0);
}
//helper fun
function sumArray(total,arrayItem){
    return total+arrayItem.votes;
}

console.log(getTotalVotes(movies));

/*
exercise 4 : combine Movie Titles and Ratings
input : the example movie objects array
return value will be matched array converting each object into a string that include the tile and rating objects
*/
function CombineMovieTitlesandRatings(inputArr){
    return inputArr.map((item)=>
        `${item.title}-${item.rating}`
    );
}
console.log(CombineMovieTitlesandRatings(movies));

/*
exercise 5 :update movie rating 
input: an movies array, new rating , movie title
return value will be the matched array with update object according to the new rating
*/
function updateMovieRatings(moviesArr,newRating,objTitleToUpdate){
    //we will use map and will make aupdate only to the matched obj
    return moviesArr.map((item)=>{
        if(item.title === objTitleToUpdate){
            item.rating = newRating;
        }
        return item
    })
}
console.log(updateMovieRatings(movies,2,'The Shawshank Redemption'));

/*
exercise 6: Genre Filter
input : an movies array , wantedGenre to filter by
return value will be a copy of the original array thats includes only the matched input genre
*/
function genreFilter(moviesArr,theGenre){
    const newArr = [];
    return moviesArr.filter((item)=> isIncluded(item.genre,theGenre));
    /*
    for(let item of moviesArr){
        if(isIncluded(item.genre,theGenre)){
            newArr.push(item);
        }
    }
    return newArr;
    */
}
function isIncluded(arr,theGenre){
    let result = arr.filter((item)=> item === theGenre);
    return (result.length > 0);
       
}
console.log("separation Genre filter");
console.log(genreFilter(movies,"Action"));

/*
exercise 7 : filter by minimum year
input : array+ minYear
*/
function filterByMinYear(theArr,minYear){
    return theArr.filter((item)=>
        item.year > minYear
    );
}
console.log("filtrer by minimum year :");
console.log(filterByMinYear(movies,2000));

/*
average movie rating
*/
function getAverageRating(theArr){
    const sum = theArr.reduce((accumulator, currentValue) => accumulator + currentValue.rating,0);
    return sum/theArr.length;
}
console.log(`average rating ${getAverageRating(movies)}`);

//order the array
function sortMovies(theArr){
    return theArr.sort((a,b)=>b.votes-a.votes);
} 
console.log(sortMovies(movies));
