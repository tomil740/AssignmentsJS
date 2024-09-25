class Media {
    #title;
    #duration;
    #ratings;
    constructor(title,duration){
        this.#title = title
        this.#duration = duration;
        this.#ratings = [];
    }

    get title(){
        return this.#title;
    }

    get duration(){
        return this.#duration
    }

    addRating(rating){
        if(typeof(rating) == "number"){
            this.#ratings.push(rating)
        }else{
            console.log("invalid input");
        }
    }

    #calculateAverageRating(){
        if(this.#ratings.length < 1){
            console.log("No ratings yet");
        }else{
            let sum = 0;
            for(let rating of this.#ratings){
                sum+=rating;
            }
            return (sum/(this.#ratings.length));
        }
    }

    get averageRating(){
        return this.#calculateAverageRating();
    }

    displayDetails(){
        const title = this.title;
        const duration = this.duration;
        const averageRating =this.averageRating;

        return `the obj title : ${title} , duration ${duration} and average rating of ${averageRating}`;
    }
}

class Movie extends Media{
    #director;
    #genre;
    constructor(title,duration,director,genre){
        super(title,duration);
        this.#director = director;
        this.#genre = genre;
    }

    get director(){
        return this.#director;
    }

    get genre(){
        return this.#genre;
    }

    displayDetails(){
        const base = super.displayDetails();
        const director = this.director;
        const genre = this.genre;

        const result = `${base}, the movie director is ${director} and the genre is ${genre}`;

        return result;
    }
}

class Series extends Media{
    #seasons;
    constructor(title,duration,seasons){
        super(title,duration);
        this.#seasons = seasons; 
    }

    get seasons(){
        return this.#seasons;
    }

    displayDetails(){
        const base = super.displayDetails();
        const seasons = this.seasons;

        const result = `${base}, the series has ${seasons} seasons`;

        return result;
    }
    
}

class User{
    #userName;
    #watchedMedia;
    constructor(userName){
        this.#userName = userName;
        this.#watchedMedia = [];
    }

    get userName(){
        return this.#userName;
    }
    get watchedMedia(){
        return this.#watchedMedia;
    }

    addMedia(media){
        this.#watchedMedia.push(media);
    }

    addRateMedia(media,rating){
        //check if the media is include in the user watchedMedia
        let mediaInclude = false;
        for(let watchedMediaItem of this.watchedMedia){
            if(watchedMediaItem == media){
                mediaInclude = true;
            }
        }
        if(mediaInclude){
            media.addRating(rating);
        }else{
            return "user cant add rating for unWatched media object";
        }
    }

    displayAllWatchedMedia(){
        let result = [];
        for(let mediaItem of this.watchedMedia){
            result.push(mediaItem.displayDetails());
        }
        return result.join("mediaItem : ");
    }
}


//test exercise 1
const mediaObj = new Media("mediaTitle",122);
mediaObj.addRating(12);
mediaObj.addRating(11);
console.log(mediaObj.displayDetails());

//test exercise 2
const movieObj = new Movie("mediaTitle",122,"directorName","GenerName");
movieObj.addRating(12);
movieObj.addRating(11);
console.log(movieObj.displayDetails());

//test exercise 3
const userObj = new User("userName");
let toPrint = userObj.displayAllWatchedMedia();
console.log(toPrint);
console.log("add media");
userObj.addMedia(mediaObj);
toPrint = userObj.displayAllWatchedMedia();
console.log(toPrint);
userObj.addMedia(movieObj);
userObj.addRateMedia(mediaObj,19);
toPrint = userObj.displayAllWatchedMedia();
console.log(toPrint);


