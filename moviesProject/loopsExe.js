const movieTitles = ["Inception","The dark knight","Interstellar"];
let result = movieTitles[0]
for(let i = 1; i < movieTitles.length; i++){
    if(movieTitles[i] > result)
        result = movieTitles[i];
}
console.log(result);

let movieRating= [8.3,7.5,9.0,8.7];
let sum = 0;
for(let i = 0; i < movieRating.length; i++){
    sum+=movieRating[i];
}
console.log(sum/movieRating.length);


let reversedArray=[];
for (let i = movieTitles.length-1; i >= 0; i--){
    reversedArray.push(movieTitles[i]);
}
console.log(reversedArray);

newRating = [];
movieRating.forEach((item)=>{
    item+=0.5;
    newRating.push(item);
})
//movieRating = newRating;
console.log(newRating);

let filteredRatings;
filteredRatings = (movieRating.filter((item)=>{
    return item > 8.0;
}));
console.log(filteredRatings);

let counter = 0;
movieRating.forEach((rating)=>{
    if(rating === 8.7)
        counter++;
})
console.log(counter);

const watchedList = ["Inception","The Dark Knight"];
const wishList = ["Interstellar" , "Inception"];
let overLapList = [];

watchedList.forEach((watchedListItem)=>{
    wishList.forEach((wishListItem) =>{
        if(watchedListItem === wishListItem)
            overLapList.push(watchedListItem);
    })
})
console.log(overLapList);


//is over threshold (8.0)
const threshold = 8.0;
let thresholdResult = true;

movieRating.forEach((theItem)=>{
    if(theItem < threshold){
        thresholdResult = false;
    }
})
console.log(thresholdResult);

//max rating
let maxRating = 0;
movieRating.forEach((rating)=>{
    if(rating>maxRating)
        maxRating =rating;
})
console.log(maxRating);

//average rating:
const ratingsList = [[8,7,9],[6,8,7],[9,9,10]];
ratingsList.forEach((movieItemRating)=>{
    let sumRating = 0;
    movieItemRating.forEach((rate)=>{
        sumRating+=rate;
    })
    console.log(sumRating/movieItemRating.length);
})
/* question2 define new data
const movies = [
    {name:"Movie 1", ratings:[5,6,7]},{name:"Movie 2", ratings:[8,9,9]}
]
*/
const movies = [{ name: "Movie 1", ratings: [5, 6, 7]}, { name: "Movie 2", ratings:
    [8, 9, 9]}, { name: "Movie 3", ratings: [6, 8,11, 8]}];
//the function will get the movie name and returnted its average ratings
function getMovieAverageRating(movieName){
    let theResult = 0; 
    for(let movie of movies){
        if(movie.name === movieName){
            for(let i of movie.ratings){
                theResult+=i;
            }
            theResult/=movie.ratings.length;
        }
    }
    return(theResult);
}

getMovieAverageRating("Movie 2");


//the function get the higherst rated movie out of matched movies objects array
function getTopRatedMovie(){
    let maxRated = 0;
    let resultObj = [];
    for (let movie of movies){
        const a = getMovieAverageRating(movie.name);
        if(a > maxRated){
            maxRated = a;
            resultObj = movie;
        }
    }
    console.log(resultObj);
}

getTopRatedMovie();

//most rated movie
function getMostRatedMovie(){
    let maxRatings = 0;
    let theResult = [];
    for(let movie of movies){
        if(movie.ratings.length > maxRatings){
            maxRatings = movie.ratings.length;
            theResult = movie;
        }
    }
    return theResult;
}
const a = getMostRatedMovie();
console.log(a);

//removeLowestRateing,will take a spesfic object and rmeove its lowest rating
function removeLowestRating(objNaem){
    for(let movie of movies){
        if(movie.name === objNaem){
            console.log(movie.ratings.slice(0,2));
            let minRate = 0;
            for (let rating of movie.ratings){
                if(minRate > rating)
                    minRate = rating;
            }
            for (let index = 0; index < movie.ratings.length; index++){
                if(movie.ratings[index] === minRate){
                    if(index >= 0){
                        movie.ratings.splice(1);
                        console.log(movie.ratings.splice(1[1]));
                    }
                }
            }
        }
    }
}
removeLowestRating("Movie 3");

