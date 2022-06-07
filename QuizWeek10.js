/*let button = document.getElementById('p-button');
let input = document.getElementById('p-input');
let div = document.getElementById('p-div');*/


document.getElementById('p-button').addEventListener('click', () => {
    var parent = document.getElementById('p-div');
    var newElement = document.createElement('p')
    newElement.innerHTML = document.getElementById('p-input').value;
    parent.appendChild(newElement);
    document.getElementById('p-input').value = '';
});
