button.addEventListener('click',changeColor)
button.addEventListener('click', changeColor)
function changeColor() 
{
    var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E']
    var value ='#'
    for(let i = 0; i < 6; i++)
    {
        value += hex[Math.floor(Math.random() * hex.length)]
    }
    document.body.style.backgroundColor = value;
    documnet.getElementById("box-1").style.backgroundColor=value;
}
function change()
{
    var x, y, z;
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
    document.getElementById("box-1").style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}