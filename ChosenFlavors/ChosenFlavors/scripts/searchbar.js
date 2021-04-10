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

function Dragged(ev) {
    ev.dataTransfer.setData("saveData", document.getElementsByIdName("tomato")[0].id);
}

function Dropping(ev) {
    let the_id = ev.dataTransfer.getData("saveData");
    ev.target.appendChild(document.getElementById(the_id));
}