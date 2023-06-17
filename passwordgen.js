
let generate = document.getElementById("generate")
var result = '';
var result1 = '';
var result2 = '';
var symbols = "!@#$%^&*(){}[]=<>/.";
var charcter = "abcdefghijklmnopqrstuvwxyz";
document.getElementById("passwordlenght").addEventListener("change", function() {
    console.log("check")
    var z = document.getElementById("passwordlenght").value
    document.getElementById("show").innerHTML = "Passwordlenght" + z 
})
generate.addEventListener("click", function(){
    event.preventDefault();
    var x = document.getElementById("passwordlenght").value
    console.log(typeof(x) + " " + x)
    var y =  Math.floor(Math.random() *10) + 7;
    if (x  >5 && x < 27) {
        final_result='';
        result = '';
        result1 = '';
        result2 = '';
        for ( var i = 0; i < y; i++ ) {
            result += symbols.charAt(Math.floor(Math.random() *symbols.length));
        }
        for ( var i = 0; i < y; i++ ) {
            result1 += charcter.charAt(Math.floor(Math.random() *charcter.length));
        }
        for ( var i = 0; i < y; i++ ) {
            result2 += Math.floor(Math.random() *10);
        }
        final_result = result1 + result2 + result
        final_result = final_result.slice(0,x)
        console.log(result + "     " + y + "  "+ final_result.length + "  " + final_result) 
        document.getElementById("display").innerHTML = final_result
        

    } else {
        console.log("not okay")
    }

})