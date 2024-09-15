//global variable movie rating
let movieRatings;

//initialize rating function
function initializeRatings(){
    movieRatings = [];
}

//add rating item to our gloable array
function addRating(movieTitle,rating){
    movieRatings.push(
        [movieTitle,rating]
    );
}

//find spesfic movie rating value
function findRating(movieTitle){

    let result = "Movie was not found";

    for(let movieRatingItme of movieRatings){
        if(movieTitle === movieRatingItme[0]){
           result = `the ${movieTitle} rate is ${movieRatingItme[1]}`;
        }
    }

    console.log(result);
}

function updateRating(movieTitle,newRating){
    let executionStatus = "The movieTitle dosnt iclude in the collection"

    for(let movieRatingItem of movieRatings){
        if(movieTitle===movieRatingItem[0]){
            movieRatingItem[1] = newRating;
            executionStatus = `the ${movieTitle} rating was update to ${newRating}`
        }

        console.log(executionStatus);
    }
}

function removeMovieRatingItem(movieTitle){
    let executionStatus = "The movieTitle dosnt iclude in the collection"
    let updatedArray = [];
    for(let index = 0; index < movieRatings.length; index++){
        if(movieTitle=== movieRatings[index][0]){
            executionStatus = `the ${movieTitle} was removed`
        }else{
            updatedArray.unshift(movieRatings[index]);
        }

        console.log(executionStatus);
    }
    movieRatings = updatedArray;
}

function listMovies(){
    for(let movieRatingItem of movieRatings){
        console.log(movieRatingItem.join(" - "));
    }
}

function highestRatedMovie(){
    let highestRating = ["default",0];
    for(let movieRatingItem of movieRatings){
        if(highestRating[1] <= movieRatingItem[1])
            highestRating = movieRatingItem;
    }
    if(highestRating[0] != "default"){
        console.log(highestRating);
    }else{
        console.log("There is no movies in the collection...");
    }
}

function calculateAverageRating(movieRatingsData){
    let sumRatings = 0;
    for(let i of movieRatingsData){
        sumRatings+=i;
    }
    return sumRatings/movieRatingsData.length;
}

function filterByRating(movieRatings,minimumRatingValue){
    let newArray = [];
    for(let item of movieRatings){
        if(item >= minimumRatingValue){
            newArray.push(item);
        }
    }
    return newArray;
}

//test...
initializeRatings();
addRating("someNaem",15);
addRating("someNaem2",35);
addRating("highest",95);
console.log(
    movieRatings
);
findRating("someNaem");
updateRating("someNaem",22);
console.log(movieRatings);
removeMovieRatingItem("someNaem");
console.log(movieRatings);
listMovies();
highestRatedMovie();
const testRating = calculateAverageRating([5,3,4,1,9,11,499])
console.log(testRating);
const minValue = filterByRating([5,3,4,1,9,11,499],9);
console.log(minValue);
