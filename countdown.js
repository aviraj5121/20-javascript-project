function Start()
{
    var second = 60
    var minute = 60
    var Hour = 60 
    var count = document.getElementById("second").textContent
    var seconds = parseInt(document.getElementById("second").textContent)
    if (seconds == 0) {
        alert("Time's up!");
        } 
    else {
        seconds = seconds -1 ;
        count.innerHTML = seconds;
    }
    }
setInterval(Start,1000)