const textInputTodoListEntry = document.getElementById('textInputTodoListEntry');
const buttonTodoList = document.getElementById('buttonTodoList');

let myTemporaryTodolistEntry = {
  textInputTodoListEntry: ''
};

function handelChange(event) {
  myTemporaryTodolistEntry = {
    ...myTemporaryTodolistEntry, [event.target.name]: event.target.value
  };
}

function handleDelete() {
  const deleteButton = document.getElementById(this.id);
  const idToUseForDeleting = this.id.replace('delete-button: ', '');

  const todoList = document.getElementById(`todo-list: ${idToUseForDeleting}`);
  const todoEntry = document.getElementById(`todo-entry: ${idToUseForDeleting}`);
  const editButton = document.getElementById(`edit-button: ${idToUseForDeleting}`);

  todoList.parentNode.removeChild(todoList);
  todoEntry.parentNode.removeChild(todoEntry);
  editButton.parentNode.removeChild(editButton);
}

function createNewElement(htmlObject, id, className, innerText, parentElement) {
  
  const newElement = document.createElement(htmlObject);

  newElement.id = id;
  newElement.className = className;
  newElement.innerHTML = innerText;
  document.getElementById(parentElement).appendChild(newElement);
    if(className === 'icon-trash .divForButtons .deleteButton') {
      newElement.addEventListener('click', handleDelete);
    }
}


function handleClick() {
        
    if(myTemporaryTodolistEntry.textInputTodoListEntry != '') {
      createNewElement('div', `todo-list: ${myTemporaryTodolistEntry.textInputTodoListEntry}`, `todo-list`, '', 'todoList');

      createNewElement(
        'button', 
        `edit-button: ${myTemporaryTodolistEntry.textInputTodoListEntry}`, 
        'icon-check .divForButtons .editButton',
        '<svg class="icon-trash .divForButtons .deleteButton .nothing" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>',
        `todo-list: ${myTemporaryTodolistEntry.textInputTodoListEntry}`
        )
      createNewElement('div', `todo-entry: ${myTemporaryTodolistEntry.textInputTodoListEntry}`, `todo-entry:`, myTemporaryTodolistEntry.textInputTodoListEntry, `todo-list: ${myTemporaryTodolistEntry.textInputTodoListEntry}` )

      createNewElement(
        'button', 
        `delete-button: ${myTemporaryTodolistEntry.textInputTodoListEntry}`, 
        'icon-trash .divForButtons .deleteButton', 
        '<svg class="icon-trash .divForButtons .deleteButton .nothing" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>',
        `todo-list: ${myTemporaryTodolistEntry.textInputTodoListEntry}`
      )           
      textInputTodoListEntry.value = '';
      myTemporaryTodolistEntry.textInputTodoListEntry = '';
  } else{
    alert('Bitte Aufgabe hinzufügen!');
  }
}



textInputTodoListEntry.addEventListener('change', handelChange);
buttonTodoList.addEventListener('click', handleClick); 


