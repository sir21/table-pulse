exports.print = function (data) {
    console.log('library')
    console.log(JSON.stringify(data));
}

exports.table = function (data) {
    var raw = JSON.parse(data);
    var div = document.createElement("div");
    var table = document.createElement("table");
    var head = document.createElement("thead");
    var body = document.createElement("tbody");

    //work

    table.appendChild(head);
    table.appendChild(body);
    div.appendChild(table);
    return div;
}
