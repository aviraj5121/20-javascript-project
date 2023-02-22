
var price;
function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
    let table = document.getElementById("carttable");
    let newRow = table.insertRow();
    let newCell1 = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
    let name = document.querySelector('.Name').textContent;
    var price = document.querySelector('.price').textContent;  
    newCell1.innerHTML = name;
    var input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = '5';
    input.addEventListener('input', function() {
        let value = this.value;
        let z = Number(price);
        let y = Number(value);
        newCell3.innerHTML = z * y;
        console.log(z * y);
    });
    newCell2.appendChild(input);
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    table.appendChild(newRow);
}


const close = document.getElementById("closeSidebar");
close.addEventListener('click' , function() {
    document.getElementById("sidebar").classList.add("close");});