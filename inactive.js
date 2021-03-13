const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    
    // change milliseconds to seconds
    var now = new Date().getTime()/1000
   
    var minutesPassed = Math.floor((now - user.lastActivity/1000)/60)
    
    if (minutesPassed > 5 ) {
        user.lastActivity = new Date().getTime()
        inactiveThirdStage()
    } else if (minutesPassed > 4 ) {
        inactiveSecondStage()
    } else if (minutesPassed > 2) {
        inactiveFirstStage()
    }
}, 1000);
