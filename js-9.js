function add ()
{
    var x =document.getElementById("item").value;
    var item = document.createElement("li");
    item.innerHTML=x +'<button onclick ="remove()">Delete</button>';
    todolist.appendChild(item);
    document.getElementById("item").value="";
    document.getElementById("alret-1").innerHTML = "Item is added to the List";
    setTimeout(() => {document.getElementById("alret-1").innerHTML="";} , 3000);
}
function remove()
{
    var parent = document.getElementById("todolist");
    var child = parent.firstElementChild;
    parent.removeChild(child);
    document.getElementById("alret-2").innerHTML = "Item is removed ";
    setTimeout(() => {document.getElementById("alret-2").innerHTML="";} , 3000);
}
function removeall()
{
    var parent = document.getElementById("todolist")
    while(parent.firstElementChild)
    {

        parent.removeChild(parent.firstElementChild)
    }
    document.getElementById("alret-2").innerHTML = "All Item are removed ";
    setTimeout(() => {document.getElementById("alret-2").innerHTML="";} , 3000);
}   