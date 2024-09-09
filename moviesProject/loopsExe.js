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