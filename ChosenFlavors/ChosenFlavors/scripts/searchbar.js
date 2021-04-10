document.getElementById("add").onclick = function () {
    var node = document.createElement("Li");
    var text = document.getElementById("searchtext").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}