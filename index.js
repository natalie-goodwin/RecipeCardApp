/*let button = document.getElementById('my-button');
console.log(button);

let buttonByTag = document.getElementsByTagName('button');
console.log(buttonByTag);

let buttonsByClassName = document.getElementsByClassName('my-class');
console.log(buttonsByClassName);

let buttonsByCssSelector = document.querySelectorAll('.my-class');
console.log(buttonsByCssSelector);*/

document.getElementById('content').innerHTML = 'Goodbye'; 
let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye.') {
        content.innerHTML = 'Hello.'; 
    } else {
        content.innerHTML = 'Goodbye.'
    }
});
  
    document.getElementById('remove').addEventListener('click', () => {
        let idToRemove = document.getElementById('remove-id').value;
        let elementToRemove = document.getElementById(idToRemove);
        elementToRemove.parentNode.removeChild(elementToRemove);
        document.getElementById('remove-id').value = '';
    });

    let id = 0; 

  /*document.getElementById('add').addEventListener('click', () => {
        var parent = document.getElementById('paragraphs');
        var newElement = document.createElement('p');
        newElement.innerHTML = 'this is a new paragraph.';
        parent.appendChild(newElement);
    });*/

    document.getElementById('add').addEventListener('click', () => {
        var parent = document.getElementById('paragraphs');
        var newElement = document.createElement('p');
        newElement.innerHTML = document.getElementById('new-text').value;
        newElement.setAttribute('id', id++);
        parent.appendChild(newElement);
        document.getElementById('new-text').value = '';
    });