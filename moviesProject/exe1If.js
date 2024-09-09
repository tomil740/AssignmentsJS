//declare for convenience use below
let movieRating;
let movieBudget;
let movieGenre;
let audienceAge;
let firstMovieDuration;
let secondMovieDuration
let viewerAge;
let popularityScore;
let numberOfAwards;
let actorAge =17;
let actorAgeClass = "AdultActor";
let hasInvitaion;
let screeningDuration;
let dayOfWeek;
let releaseYear;
let movieGenre2;
let movieRating2;
let ticketPrice;
let age;
let isAdult;
let movieTitle = "someTitle";


if(movieRating > 7){
    console.log("Highly rated movie");
}else{
    console.log("This movie has room for improvement");
}

if(movieBudget >= 1000000 && movieBudget <= 100000000){
    console.log("Big-budget movie");
}else{
    console.log("Indie movie");
}

if(movieGenre === "Horror"){
    if(audienceAge >= 18){
        console.log("Suitable for the audience");
    }
    else{
        console.log("Not suitable for the audience");
    }
}else{
    console.log("Suitable for all audience");
}

if(firstMovieDuration > secondMovieDuration){
    console.log("The first movie is longer");
}else if(firstMovieDuration === secondMovieDuration){
    console.log("Moviews have the same duration");
}

if(viewerAge >= 13 && viewerAge <= 18){
    console.log("Suitable for teens");
}else if(viewerAge > 18){
    console.log("Suitable for adults");
}else{
    console.log("Suitable for kids");
}

popularityScore >= 80 ? console.log("Popular movie") : console.log("Less known movie");

numberOfAwards%2 == 0 ? console.log("Even number of awards"):
console.log("Odd number of awards");

actorAge < 14 ? actorAgeClass = "Child Actor" : actorAge < 24 ?actorAgeClass = "Young Actor" :  actorAgeClass = "Adult Actor";

console.log(actorAgeClass);


hasInvitaion ? console.log("Welcome to the premiere"):console.log("Please check your onvitation");

if(screeningDuration < 40){
    console.log("screenDuration category is : short film");
}else if(screeningDuration <= 120){
    console.log("screenDuration category is : feature film")
}else{
    console.log("screenDuration category is : Epic length movie")
}

if(dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
    console.log("Special screening event!");
}else{
    console.log("Regular movie showtimes");
}

if(releaseYear >= 2001){
    console.log("21st century movie");
}else{
    console.log("20th century movie")
}

if(movieGenre2 === "Action" && movieRating2 >= 7){
    console.log("must watch");
}else{
    console.log("Check reviews before watching");
}

if(ticketPrice <= 10){
    console.log("Discounted ticket");
}else{
    console.log("regular ticketPrice");
}

if(age >= 18 || !isAdult){
    console.log("Allowed to watch");
}else{
    console.log("Age-restricted content");
}

if(movieTitle.includes(2) || movieTitle.includes("part")){
    console.log("This movie is sequel");
}else{
    console.log("This movie isnt a sequel");
}