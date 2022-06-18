var minutes = 00;
var seconds = 00;
var tens = 00;
var minutesOutput = document.getElementById("minutes");
var secondsOutput = document.getElementById("seconds");
var tensOutput = document.getElementById("tens");
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var Interval;
buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});
buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});
buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    minutes = 00;
    seconds = 00;
    tens = 00;
    secondsOutput.innerHTML = "0" + seconds;
    tensOutput.innerHTML = "0" + tens;
    minutesOutput.innerHTML = "0" + minutes;
});

function startTime() {
    tens++;
    if (tens <= 9) {
        tensOutput.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        tensOutput.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        secondsOutput.innerHTML = "0" + seconds;
        tens = 0;
        tensOutput.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
        secondsOutput.innerHTML = seconds;
    }
    if (seconds > 60) {
        minutes++;
        minutesOutput.innerHTML = "0" + minutes;
        seconds = 0;
        secondsOutput.innerHTML = "0" + seconds;
    }
    if (minutes > 9) {
        minutesOutput.innerHTML = minutes;
    }


}

function click() {
    if (minutes == minutesOutput || seconds == secondsOutput || tens == tensOutput) {

    } else {
        window.alert("please stop the watch");
    }
}

$('#backbutton').click((e) => {
    document.write("please stop the watch");
})