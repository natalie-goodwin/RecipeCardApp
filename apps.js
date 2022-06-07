function getRandomColor() {
    let r = Math.floor(Math.random() * (256 - 0) + 0);
    let g = Math.floor(Math.random() * (256 - 0) + 0);
    let b = Math.floor(Math.random() * (256 - 0) + 0);
    return [r, g, b];
}

// window.onload = () => { // this ensures that the DOM is loaded before anything is called

    /*let parents = document.querySelectorAll('.container');*/

    const section1 = document.getElementById('one'); // no hashtag 
    const section2 = document.getElementById('two'); // each of these only return the first found
    const section3 = document.querySelector('#three'); // have to use hashtag or a period if you are referencing class names
   
    
    /*these are tied to change color button*/
    const buttonColor1 = document.getElementById('change-color-one');
    const buttonColor2 = document.getElementById('change-color-two');
    const buttonColor3 = document.getElementById('change-color-three');
    
    /*this makes it possible to change color when you click 
    'change color' button; you need to have the event, and then what happens
    use a function */
    buttonColor1.addEventListener('click', () => {
        let [r,g,b] = getRandomColor();
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
    
    /*mouseout causes color to change when you mouse away from 
    the button */
    buttonColor2.addEventListener('mouseout', () =>{
        let [r,g,b] = getRandomColor();
        section2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })

    /*blur key causes you to only trigger color if you leave the button and click elsewhere */
    buttonColor3.addEventListener('blur', () => {
        let [r,g,b] = getRandomColor();
        section3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })

   
    /*For changing shadow of buttons*/
    const buttonShadow1 = document.getElementById('drop-shadow-one');
    const buttonShadow2 = document.getElementById('drop-shadow-two');
    const buttonShadow3 = document.getElementById('drop-shadow-three');

    buttonShadow1.addEventListener('click', () => {
        section1.classList.toggle('boxBorder'); /*toggle */
        section1.classList.toggle('boxShadow'); /*toggle */
    })

    /*get rid of box shadow conditional where you can also change button text*/ 
        buttonShadow2.addEventListener('click', () => {
        if (section2.classList.contains('boxShadow')) {
            buttonShadow2.innerText = 'Add Shadow';
            section2.classList.add('boxBorder');
            section2.classList.remove('boxShadow');
        } else {
            buttonShadow2.innerText = 'No Shadow';
            section2.classList.remove('boxBorder');
            section2.classList.add('boxShadow');
        }
    })

        const section1b = document.getElementById('one-b');
        const section2b = document.getElementById('two-b');
        const section3b = document.getElementById('three-b');


        const deleteBox = () => {
        let container = section1.parentElement;
        let containerb=section1b.parentElement;
        container.removeChild(section1);
        containerb.removeChild(section2b);
}

        /* creating a new box under add box*/
        const addBox =document.getElementById('addBox');

        addBox.addEventListener('click', () => {
        // console.log(parents);
        let parents=document.querySelectorAll('.container');
        let box = document.createElement('section');
        box.setAttribute('id', 'four');
        box.setAttribute('class', 'box boxShadow');
        parents[0].appendChild(box);
        })

        /*let buttonBox = document.createElement('section');
        buttonBox.setAttribute('id', 'four-b');
        buttonBox.setAttribute('class', 'buttons');
        buttonBox.innerHTML = `
        <button id="drop-shadow-four">No shadow</button>
        <button id="change-color-four">Change color</button>
        <button id="delete-four">Delete Box</button>
        buttonBox.innerHTML = `
        <button id="drop-shadow-four">No Shadow</button>
        <button id="change-color-four">Change color</button>
        <button id="delete-four">Delete Box</button>
        `
        parents[1].appendChild(buttonBox);

    })*/


