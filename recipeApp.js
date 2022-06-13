class Measurement {  /*class for measurements */
    constructor(quantity, ingredient, instructionStep) {
    this.quantity = quantity;
    this.ingredient = ingredient;
    this.instructionStep = instructionStep;
    }
}

class Recipe { /*class for recipe*/ 
    constructor(id, name) {
    this.id = id;
    this.name = name;
    this.measurements = []; /* empty array for measurements added*/
    }
    
    addMeasurement(measurement) {   /*add a measurement */
    this.measurements.push(measurement);
    }

    deleteMeasurement(measurement) {   /*delete a measurement*/
    let index = this.measurements.indexOf(measurement);
    this.measurements.splice(index, 1); /*removes only 1 element */
    }
}




let recipes = [];  /*array of recipes stored in this array; that data 
is rendered or drawn to the HTML document*/
let recipeId = 0; /*each recipe will get an incremented ID each time 
it's added */


onClick('new-recipe', () => {
    recipes.push(new Recipe(recipeId++, getValue('new-recipe-name')));
    drawDOM(); /*drawDom will iterate over recipe array and build recipes */
}) /*anytime we add new recipe it gets added to array and incremented */


function onClick(id, action) {/*the action is what happens when we call onClick*/
    let element = document.getElementById(id); /* passing the id through onClick*/
    element.addEventListener('click', action);
    return element;
}


function getValue(id) { /*creating getValue from above*/
    return document.getElementById(id).value; 
}


function drawDOM() { /*iterated over */
    let recipeDiv = document.getElementById('recipes'); /*adding recipe measurements to 
    empty recipe div on HTML doc*/ 
    clearElement(recipeDiv); /*clear out recipe div*/
    for (recipe of recipes) { /*iterate over the recipe creating 
    a table for the quantity and ingredient measurements of the recipe and 
    adding all measurements to the recipe*/
    let table = createRecipeTable(recipe); 
    let title = document.createElement('h2');
    title.innerHTML = recipe.name; 
    title.appendChild(createDeleteRecipeButton(recipe));
    recipeDiv.appendChild(title);
    recipeDiv.appendChild(table); 
    for (measurement of recipe.measurements) {
        createMeasurementRow (recipe, table, measurement);
    }  /* these are the instructions for how the table will be built 
    as measurements are added for the recipe*/ 
  }
}
   
function createMeasurementRow(recipe, table, measurement) {
    let row = table.insertRow(2); /*begin at position 2 because of header information above it*/
    row.insertCell(0).innerHTML = measurement.quantity;
    row.insertCell(1).innerHTML = measurement.ingredient;
    row.insertCell(2).innerHTML = measurement.instructionStep;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteRowButton(recipe, measurement));
} /*this creates the data enetered by the user for the recipe ingredients and quantity under measurements */ 

function createDeleteRowButton(recipe, measurement) { /*this creates the delete button to delete the row 
    holding a quantity and ingredient */
    let btn = document.createElement('button'); 
    btn.className = 'btn btn-success'; 
    btn.innerHTML = 'Delete Row'; 
    btn.onclick = () => {
    let index = recipe.measurements.indexOf(measurement);
    recipe.measurements.splice(index, 1);
    drawDOM();
    }
    return btn; 
}    
      
function createDeleteRecipeButton(recipe) { /*this creates the delete button to delete the recipe*/
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.innerHTML = 'Delete Recipe';
    btn.onclick = () => {
        let index = recipes.indexOf(recipe);
        recipes.splice(index, 1);
        drawDOM();
    };
    return btn; 
 }

function createNewMeasurementButton(recipe) { /*this creates the button to add quantity and ingredient for the recipe*/
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.innerHTML = 'Add ingredient or Next Step of Instructions';
    btn.onclick = () => {
        recipe.measurements.push(new Measurement(getValue(`quantity-input-${recipe.id}`), 
        getValue(`ingredient-input-${recipe.id}`), getValue(`instructionStep-input-${recipe.id}` )));
       drawDOM();
        };
       return btn;
   }       

function createRecipeTable(recipe) { /*after the Recipe has been named, a table is built 
    by adding measurements of quantity and ingredients; these instructions will build the 
    table as quantity and ingredients are added*/
     let table = document.createElement('table');
     table.setAttribute('class', 'table table-success table-borderless');
     let row = table.insertRow(0);
     let quantityColumn = document.createElement('th'); /*builds quantity and ingredient columns */
     let ingredientColumn = document.createElement('th');
     let instructionStepColumn = document.createElement('th');
     quantityColumn.innerHTML = 'Quantity (Type n/a if leaving column empty)'; 
     ingredientColumn.innerHTML = 'Ingredient (Type n/a if leaving column empty)';
     instructionStepColumn.innerHTML = 'Instruction Step (Type n/a if leaving column empty)';
     row.appendChild(quantityColumn);
     row.appendChild(ingredientColumn);
     row.appendChild(instructionStepColumn);
    
     let formRow = table.insertRow(1); 
     let quantityTh = document.createElement('th')  /*build quantity and ingredient table headers */ 
     let ingredientTh = document.createElement('th');
     let instructionStepTh = document.createElement('th');
     let createTh = document.createElement('th');
     let quantityInput = document.createElement('input');
     quantityInput.setAttribute('id', `quantity-input-${recipe.id}`);
     quantityInput.setAttribute('type', 'text');
     quantityInput.setAttribute('class', 'form-control');

     let ingredientInput = document.createElement('input');
     ingredientInput.setAttribute('id', `ingredient-input-${recipe.id}`);
     ingredientInput.setAttribute('type', 'text');
     ingredientInput.setAttribute('class', 'form-control');

     let instructionStepInput = document.createElement('input');
     instructionStepInput.setAttribute('id', `instructionStep-input-${recipe.id}`);
     instructionStepInput.setAttribute('type', 'text');
     instructionStepInput.setAttribute('class', 'form-control');

    let newMeasurementButton = createNewMeasurementButton(recipe);
     quantityTh.appendChild(quantityInput);
     ingredientTh.appendChild(ingredientInput);
     instructionStepTh.appendChild(instructionStepInput);
     createTh.appendChild(newMeasurementButton);
     formRow.appendChild(quantityTh);
     formRow.appendChild(ingredientTh);
     formRow.appendChild(instructionStepTh);
     formRow.appendChild(createTh);
     return table;
 }


function clearElement(element) { /* remove every first child while there 
 is a first child*/
     while(element.firstChild) {
         element.removeChild(element.firstChild);
     }
 }

 