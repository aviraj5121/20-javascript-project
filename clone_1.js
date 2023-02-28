let like = document.getElementById("liked");
like.addEventListener("click", function(){
    like.classList.add("liked");
});
function add()
{
    let sidebar = document.getElementById("sidebar")
    sidebar.classList.add("open")
}
openButton = document.getElementById("open");
closeButton = document.getElementById("close-popup");
popup = document.getElementById("popup");
openButton.addEventListener("click", function() {
popup.classList.remove("hidden");
});