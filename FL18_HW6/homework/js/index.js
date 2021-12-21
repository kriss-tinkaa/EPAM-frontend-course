/* eslint-disable no-mixed-spaces-and-tabs */
function visitLink(path) {
    var info = localStorage.getItem(path);
    localStorage.setItem(path, Number(info) + 1);
}

function viewResults() {
    var view = document.getElementById('mainBtn');
    let newNode = document.createElement('div');
    for (var i = 1; i <= 3; i++) {
        newNode.innerHTML += `You visited Page${i} ${localStorage.getItem('Page' + i)} time(s)<br>`;
    }
    view.parentNode.insertBefore(newNode, view.nextSibling);
    localStorage.clear();
}