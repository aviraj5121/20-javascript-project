let todoList = document.getElementById("todo-list");

    function add() {
        let list = document.querySelector("#item").value;
        var todoItem = document.createElement("li");
        todoItem.innerHTML = list + '<button onclick="done(this)" id="tick">done</button>';
        todoList.appendChild(todoItem);
        document.querySelector("#item").value = "";
    }

    function remove() {
        var parent = document.getElementById("todo-list");
        let item = parent.firstElementChild;
        parent.removeChild(item);
    }

    function done(element) {
        element.parentElement.classList.add("done");
    }