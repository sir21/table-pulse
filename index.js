exports.print = function (data) {
    console.log('library')
    console.log(JSON.stringify(data));
}

exports.table = function (data) {
    var div = document.createElement("div");
    var table = document.createElement("table");
    var headRow = document.createElement('tr');
    var head = document.createElement("thead");
    var body = document.createElement("tbody");

    data.forEach(element => {
        var columnHead = document.createElement('th')
        var headText = document.createTextNode(element.name);
        columnHead.appendChild(headText);
        headRow.appendChild(columnHead);
    });
    head.appendChild(headRow);
    table.appendChild(head);
    table.appendChild(body);
    div.appendChild(table);
    return div.innerHTML();
}
