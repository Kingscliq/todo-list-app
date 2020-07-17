// ADD TODO

// Grab The UL tag to hold the entire todos
var ul = document.querySelector('.todoList');
//grab the form element from the DOM
var form = document.querySelector('form');
//add submit event to the form 
form.addEventListener('submit', addTodo);

ul.addEventListener('click', deleteTodo);





function addTodo(e){
    e.preventDefault();
    // Get TextInput
    const taskInput = document.querySelector('#textInput').value;
    
    
    // Create an Element Li to hold list Items
    const li = document.createElement('li');
    li.className = 'taskName';
    //create input
    buttonDiv = document.createElement('div');
    buttonDiv.className = "funcBtn";
    //create button element for mark
    const mark = document.createElement('button');
    mark.className = "buttons";
    // create markicon
    const markIcon = document.createElement('i');
    markIcon.className = "fas fa-check-circle";
    //create button Element for edit
    const edit = document.createElement('button');
    edit.className = "buttons";
    // create Icon for Edit
    const editIcon  = document.createElement('i');
    editIcon.className = "fas fa-edit";
    // create button for delete
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "buttons";
    //create TrashIcon
    const trash =  document.createElement('i');
    trash.className = "fas fa-trash delete";

    //create input field for taskInput Value
    var inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('class', 'inputValue');
    inputField.setAttribute('value', taskInput);
    inputField.setAttribute('disabled', false);

    // append icons to buttons
    mark.appendChild(markIcon);
    edit.appendChild(editIcon);
    deleteBtn.appendChild(trash);

    //append buttons to div
    buttonDiv.appendChild(mark);
    buttonDiv.appendChild(edit);
    buttonDiv.appendChild(deleteBtn);

    //append all Li children Elements
    li.appendChild(inputField);
    li.appendChild(buttonDiv);

    //append li to parent Ul
    ul.appendChild(li);

    // clear Field
    textInput.value = "";

    
    // EDIT TODO
    //add click event to the edit button
    edit.addEventListener('click', editTodo);  
    
    function editTodo(e){
        if(e.target.classList.contains('fa-edit')){
            let updateValue = prompt(inputField.value, 'Update');
            inputField.value = updateValue;
        }else{
            console.error('cannot edit');
        }
    }   

    // COmplete TODO
    mark.addEventListener('click', markComplete)

    function markComplete(e){
        if(e.target.classList.contains('fa-check-circle')){
            markIcon.style.color = 'green';
            inputField.style.textDecoration = 'line-through';
            inputField.style.color = 'grey';
        }
    }
    
    

    }

    //DELETE TODO
    function deleteTodo(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you Sure?')){
                let li = e.target.parentElement.parentElement.parentElement;
                ul.removeChild(li);
                
            }

         
        }
    }

    // function to Edit Todo list Item
    
    





