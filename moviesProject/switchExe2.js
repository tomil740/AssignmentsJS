const { type } = require("os");

let dayOfWeek = 2;
let theSpecial = "";
let weekSpecials = ["sundaySpecial!","MondaySpecial!","TuesdaySpecial!","WednesdaySpecial!","ThursdaySpecial!","FridaySpecial!","SaturdaySpecial!"]

let themeColor = "dark";

let notificationsStatus;

let movieRating;

let audiencesScore;

let userInput = 4;

let releaseMonth = 11;

switch(dayOfWeek){
    case 1:
         console.log(weekSpecials[0]);
         break;
    case 2:
         console.log(weekSpecials[1]);
         break;
    case 3:
         console.log(weekSpecials[2]);
         break;  
    case 4:
         console.log(weekSpecials[3]);
         break;
    case 5:
         console.log(weekSpecials[4]);
         break;
    case 6:
         console.log(weekSpecials[5]);
         break;
    case 7:
         console.log(weekSpecials[6]);
         break;                                                            
}

switch(themeColor){
    case "light":
        console.log("theme color set to light");
        break;

    case "dark":
        console.log("theme color set to dark");
        break;

    case "night":
        console.log("theme color set to night");
        break;

    default:
        console.log("theme set to default"); 

}

switch(notificationsStatus){
    case "new":
        console.log("you have new notifications");
        break;
     case "unread":
        console.log("you have unread notifications");
        break;
     case "unopened":
        console.log("you have unopened notifications");
        break;        
    default: 
        console.log("you have unopened notifications");
}

switch(movieRating){
    case "G":
        console.log("brief description of G rating category ");
        break;
    case "PG":
        console.log("brief description of PG rating category ");
        break;
    case "PG-13":
        console.log("brief description of PG-13 rating category");
        break;
    case "R":
        console.log("brief description of R rating category ");
        break;
    case "NC-17":
        console.log("brief description of NC-17 rating category ");
        break;                  
}

switch(typeof(userInput)){
    case "number":
        console.log("input of type number");
        break;
    case "string":
        console.log("input of type String");
        break;    
    case "booleran":
        console.log("input of type boolean");
        break;        
}

switch(releaseMonth){
    case 1:
    case 2:
    case 3:
        console.log("Q1");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Q2");
        break;    
    case 7:
    case 8: 
    case 9:
        console.log("Q3");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Q4");
        break;       
    
}