var greaterThan = document.getElementById("greater-than");
var equalTo = document.getElementById("equal-to");
var lesserThan = document.getElementById("lesser-than"); // ✅ fixed spelling

var number1Box = document.getElementById("number1");
var number2Box = document.getElementById("number2");

var number1, number2;
var timer = document.getElementById("timer");

var score = 0;
var time = 5;

generateFucntion();

greaterThan.onclick = () => {
    if (number1 > number2) {
        score++;
        resetTime(timerId); 
    } else {
        location.href = "./gameover.html?score=" + score; 
    }
    generateFucntion();
};

equalTo.onclick = () => {
    if (number1 == number2) {
        score++;
        resetTime(timerId);
    } else {
        location.href = "./gameover.html?score=" + score;
    }
    generateFucntion();
};

lesserThan.onclick = () => {
    if (number1 < number2) {
        score++;
        resetTime(timerId);
    } else {
        location.href = "./gameover.html?score=" + score; 
    }
    generateFucntion();
};

function generateFucntion() {
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);

    number1Box.innerHTML = number1;
    number2Box.innerHTML = number2;
}

var timerId;

function startTime() {
    time = 5;
    timer.innerHTML = time;

    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score; 
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTime();
}

startTime(); 
