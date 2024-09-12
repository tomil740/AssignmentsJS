const movieLibrary = ["Inception","The matrix","Interstellar"];
const movieToCheck = "Inception";

//function to check if movieToCheck is include in our library
function isInLib(movieToCheck){
    let result =false;

    for(let i of movieLibrary){
        if(i === movieToCheck)
            result=true;
    }

    return result;
}

console.log(isInLib(movieToCheck));

//reverse the array
const releaseDates = ["1999" , "2010" , "2014"];

//the function will take an array and return a copy of it in reverse order
function getReversedCopy(arrayOg){
    let result = [];
    for(let i of arrayOg){
        result.unshift(i);
    }
    return result;
}

console.log(getReversedCopy(releaseDates));

const movieGenres = ["Sci-Fi","Action","Adventure"];
const theString = movieGenres.join(",");
console.log(theString);

//check if a spesfice genre is part of the gener collection
const genreToCheck = "Action"; 
console.log(movieGenres.includes(genreToCheck));

const movieTitles = ["Inception", "The Matrix","Interstellar"];
const spesficMovie = "Interstellar";

function indexOfTitle(){
    const a = movieTitles.indexOf(spesficMovie);
    if(a !=-1)
        console.log(`${spesficMovie} found at index ${a}`);

    else{
        console.log("Movie not found");
    }
}

indexOfTitle();


//remove last movie:
const upComingReleases = ["Avatar","Dune","Tenet"];
upComingReleases.pop();
console.log(upComingReleases);

//insert movie at the start
const classicMovies = ["The godfather", "Citizen Kane"];
const newMovie = "Casablanca";
classicMovies.unshift(newMovie);
console.log(classicMovies);

const filmNoir = ["The Maltese Falcon","Touch of evil", "Double Indemnity"];
const firstFilm = filmNoir.shift();
console.log(firstFilm);

const actionMovies = ["Die Hard","John wick"];
const comedyMovies = ["Superbad", "The hangover"];
const meragedArray = actionMovies.concat(comedyMovies);
console.log(meragedArray);


const sortedArray = movieTitles.sort();
console.log(sortedArray);

//map string of quotes into array of quotes
quotesString = "I'll be back,May the force be with you,To infinity and beyond";

function quoteToArray(){
    let quote = quotesString.indexOf(',');
    while(quote!=-1){
        
    }
}