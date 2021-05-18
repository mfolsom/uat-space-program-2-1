//countdown timer should run 10 to 1 then blastoff and take 10 seconds to complete full countdown
function startCountdown() {
    var count = 10;

    //Timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
    //Active countdown begins here
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//decrease the count by 1 setting countdown timer to 9
    }, 1000);//wait 1 second before displaying count
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 8
    }, 2000);//wait 2 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 7
    }, 3000);//wait 3 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 6
    }, 4000);//wait 4 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 5
    }, 5000);//wait 5 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 4
    }, 6000);//wait 6 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 3
    }, 7000);//wait 7 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 2
    }, 8000);//wait 8 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;//countdown timer should display 1
    }, 9000);//wait 9 seconds
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 10000);//wait 10 seconds
};

//function for the craps game
function playCraps() {
    //roll the dice
    console.log("Your Craps game has started!");
    //set the value of first 6-sided die
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    console.log("die1: " + die1);
    //show the value of first 6-sided die
    document.getElementById("die1Results").innerHTML = "the value of 6-sided die 1 is: " + die1;
    //set the value of second 6-sided die
    var die2;
    die2 = Math.ceil(Math.random() * 6);
    //show the value of second 6-sided die
    document.getElementById("die2Results").innerHTML = "the value of 6-sided die 2 is: " + die2;
    //add the values of the two dice
    console.log("die2 " + die2);
    var diesum;
    diesum = die1 + die2;
    console.log("sum of dice is: " + diesum)
    //display the values of the two dice
    document.getElementById("dieSum").innerHTML = "The sum of your dice is: " + diesum;
    //determine whether craps occurred
    if ((diesum == 7) || (diesum == 11)) {
        console.log(diesum);
        //if craps, display losing message    
        document.getElementById("crapsResults").innerHTML = "Craps! You Lose!";
        //if craps didn't occur show encouraging message
    } else {
        console.log("wasn't 7 or 11")
        document.getElementById("crapsResults").innerHTML = "Keep Trying!";
    }
    // var die20;
    // die20 = Math.ceil(Math.random() *20);
    // console.log("the value of 20-sided die is: "+die20);
};
