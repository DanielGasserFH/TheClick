var myTestElement = document.getElementById("test");
var anzahl = 0;
myTestElement.innerHTML= anzahl;
var seconds = 10;
var seconds2 = 3;
var counting = true;

function startGame(){
    setInterval(timer,1000);
}
function resetGame() {

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
    }
}






var myButton = document.getElementById("counter");
    myButton.onclick = function () {
        if(counting==true) {
            anzahl++;
            myTestElement.innerHTML = anzahl;
        }
}


