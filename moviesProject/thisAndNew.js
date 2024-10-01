// plan a movie theater entity
function MovieTheater(inputMovies,numberOfSeats){
    const movieTheater = {
        movies:inputMovies,
        numberOfSeats:numberOfSeats
    }
    return movieTheater;  
}
class Movie{
    constructor(Title,Duration,TicketPrice){
        this.title = Title,
        this.duration = Duration,
        this.ticketPrice = TicketPrice
    }
    getInfo(){
        for(let item in this){
            console.log(this[item]);
        }   
    }
    calculateRevenue(seatsBooked){
        return (seatsBooked*this.ticketPrice);
    }
    updateTicketPrice(newPrice){
        this.ticketPrice = newPrice;
        console.log("ticket price update to:",this.ticketPrice)
    }
}
class Seat{
    constructor(SeatNumber,SeatRow,Status){
        this.seatNumber = SeatNumber;
        this.seatRow = SeatRow;
        this.status = Status;
    }

    isOccupied(){
        return this.status;
    }

    book(){
        this.status = "booked";
    }

    changeSeatStatus(status){
        if(status === "booked" || status === "available"){
            this.status = status;
        }
    }
}

class RevenueCalculator{

    constructor(Properties,ListOfMovies){
        this.properties = Properties;
        this.listOfMovies = ListOfMovies;
    }

    calculateTotalRevenue(){
        for(let movieItem of this.listOfMovies){
            //calculate the revenue from each item
            //need to have the seats that sold in each movie...
            // let sum = movieItem.calculateRevenue()

            //return (sum/(listOfMovies.length))
        }
    }

    calculateMovieRevenue(movieTitle){
        const movie = findMovieByTitle(movieTitle);
        //need to have the seats that sold in each movie...
        //// rerturn movie.calculateRevenue()
    }

    addMovieRevenue(movie){
        
    }
}


const movieObj = new Movie("someTitle",122,12);
movieObj.getInfo();
console.log(movieObj.calculateRevenue(2));
movieObj.updateTicketPrice(22);


const movieTheater = new MovieTheater([],0);

function addMovie(movie){
    movieTheater.movies.push(movie);
}

function removeMovie(movieTitle){
    //find the matched item (if there is)
    movieTheater.movies = movieTheater.movies.filter((theItem)=>theItem!=movieTitle);
}

function bookSeat(seatNumber){
    if(movieTheater.numberOfSeats > 0){
        if(movieTheater.numberOfSeats-seatNumber > 0){
            movieTheater.numberOfSeats = movieTheater.numberOfSeats-seatNumber
        }else{
            movieTheater.numberOfSeats = 0;
        }
    }
}
function calculateRevenue(){

}

function listMovies(){
    for(let movie of movieTheater.movies){
        console.log(movie);
    }
}

function findMovieByTitle(movieTitle){
    for(let movie of movieTheater.movies){
        if(movieTitle === movie){
            return movie;
        }
    }
}


//test remove and add 
console.log(movieTheater.movies);
addMovie("movieName1");
addMovie("movieName2");
console.log(movieTheater.movies);
removeMovie("movieName1");
console.log(movieTheater.movies);



