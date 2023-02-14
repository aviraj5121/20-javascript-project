function display()
{
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ms = now.getMilliseconds();
    document.getElementById("time").innerHTML= h +":" +m +":"+s +":" + ms;
}
setInterval(display, 1);