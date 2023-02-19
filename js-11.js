const text = document.getElementById("area");
text.addEventListener("input", number_words);
function number_words() {
    const words = text.value.split(" ");
    let number = -1
    words.forEach(word => {  number ++;}
    
);
document.querySelector("p").innerHTML="Total number of words are "+number;
}

