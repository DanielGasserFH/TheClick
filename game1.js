var myTestElement = document.getElementById("test");
var anzahl = 0;
myTestElement.innerHTML= anzahl;
var seconds = 10;
var seconds2 = 0;
var counting = true;

var timerInterval = null;

function startGame(){
    if(timerInterval == null) {
        timerInterval = setInterval(timer,1000);
    }
}
function resetGame() {
    seconds = 10;
    seconds2 = 3;
    anzahl = 0;
    counting = true;

}

function timer2() {
    seconds2--;
}

function timer(){
    seconds--;
    document.getElementById("counter").innerHTML = seconds + "s"
    if (seconds <= 0) {
        document.getElementById("counter").innerHTML = "Zeit um";
        // Anzahl speichern
        counting=false;
        clearInterval(timerInterval);
        timerInterval = null;
    }
}





var myButton = document.getElementById("counter");
    myButton.onclick = function () {
        if(counting==true) {
            anzahl++;
            myTestElement.innerHTML = anzahl;
        }
}


