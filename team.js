class Member {     /*class for members */
    constructor(name, position) {
    this.name = name;
    this.position = position;
    }
}

class Team {     /*class for team */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = []; /*empty array for members added by user */
    }

    addMember(member) {   /*take a member and add it */
        this.members.push(member);
    }
    
    deleteMember(member) {   /*take a member and delete */
        let index = this.members.indexof(member);
        this.members.splice(index, 1); /*removes only 1 element */
    }
}

/*This code enables us to use our classes in relationship to HTML */
/*Top-down method instructions*/
let teams = [];  /*array of teams stored in this array; that data 
is rendered or drawn to the HTML document =>DOM*/
let teamId = 0; /*each tem will get an incremented ID each time 
it's added */

onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
    drawDOM(); /*getValue is being used before creation with 
    top-down method*/
}); /*anytime we add new team it gets added to array and incremented */

function onClick(id, action){ /*the action is what happens when we call 
onclick */
    let element = document.getElementById(id); /*passing the ID we want in 
    our onclick */
    element.addEventListener('click', action);
    return element;
}

function getValue(id){  /*here is where we actually add 
implementation of getValue used above*/
    return document.getElementById(id).value;
} /*now we can use getValue() everytime */

function drawDOM() { /*iterates over teams array and builds tables 
for each one */
    let teamDiv = document.getElementById('teams'); /*adding teams
to empty teams div on HTML doc */
    clearElement(teamDiv); /* clear out the team div*/
    for (team of teams) { /* iterate over the teams 
    creating a table for each team and a delete button 
    for each team, and add all the members to the team */
        let table = createTeamTable(team);
        let title = document.createElement('h2');
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) {
            createMemberRow(team, table, member);
        }
    }
}


/*Here we are creating functions for the above instructions*/
function createMemberRow(team, table, member) {
    let row = table.insertRow(2); /*we start at position 2 because
    there's other data above it  */
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton (team, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete'; 
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index, 1);
        drawDOM();
    };
    return btn; /*we return the button so we can append it to the
    table and row level actions*/
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Team';
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index, 1);
        drawDOM();
    };
    return btn; /*we return the button so we can append it to the
     table and row level actions*/
 }

 function createNewMemberButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}` )));
       drawDOM();
        };
       return btn;
   }       
 

 function createTeamTable(team) { /*takes a team and builds the table off of 
 the team*/
     let table = document.createElement('table');
     table.setAttribute('class', 'table table-dark table-striped');
     let row = table.insertRow(0);
     let nameColumn = document.createElement('th');
     let positionColumn = document.createElement('th');
     nameColumn.innerHTML = "Name"; 
     positionColumn.innerHTML = 'Position'; 
     row.appendChild(nameColumn);
     row.appendChild(positionColumn);
    
     let formRow = table.insertRow(1); /*form that has info where
    we add members */
     let nameTh = document.createElement('th')
     let positionTh = document.createElement('th');
     let createTh = document.createElement('th');
     let nameInput = document.createElement('input');
     nameInput.setAttribute('id', `name-input-${team.id}`);
     nameInput.setAttribute('type', 'text');
     nameInput.setAttribute('class', 'form-control');
    
     let positionInput = document.createElement('input');
     positionInput.setAttribute('id', `position-input-${team.id}`);
     positionInput.setAttribute('type', 'text');
     positionInput.setAttribute('class', 'form-control');
    
     let newMemberButton = createNewMemberButton(team);
     nameTh.appendChild(nameInput);
     positionTh.appendChild(positionInput);
     createTh.appendChild(newMemberButton);
     formRow.appendChild(nameTh);
     formRow.appendChild(positionTh);
     formRow.appendChild(createTh);
     return table;
 }

 function clearElement(element) { /* remove every first child while there 
 is a first child*/
     while(element.firstChild) {
         element.removeChild(element.firstChild);
     }
 }

 