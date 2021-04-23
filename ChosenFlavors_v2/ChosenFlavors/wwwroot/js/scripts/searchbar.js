document.getElementById("add").onclick = function () {
    var node = document.createElement("Li");
    var text = document.getElementById("searchtext").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode); 
    if (text.length > 0) {
        document.getElementById("list").appendChild(node);
    }
    document.getElementById("searchtext").value = "";
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}