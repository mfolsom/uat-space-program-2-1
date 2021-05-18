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
    },10000);//wait 10 seconds
};
