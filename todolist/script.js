const data = {
    todos: [],
};



function deleteTodo(id) {
    const Todolist = data.todos.filter(function (todo) {
        return todo.id !== id;
    });
    data.todos = Todolist;
    renderView();
}




function creatTodoNode(value, id) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');

    input.type = 'checkbox';
    span.innerHTML = value;
    button.innerHTML = 'X';

    li.append(input);
    li.append(span);
    li.append(button);

    let temp =0;

    

    input.addEventListener('click', function() {
        
        if (temp==0) {

            span.innerHTML = "<S>"+value+"</S>";
            temp =1;

        }
        else {
            span.innerHTML = value;
            temp= 0;
        }
        
    });
 
    button.addEventListener('click', function() {
        deleteTodo(id);
    });

    return li;

}


function renderView() {
    const listContianer = document.querySelector('.list-container');
    listContianer.innerHTML = '';
    data.todos.forEach(function (todo) {
        const li = creatTodoNode(todo.value, todo.id);
        listContianer.append(li);
    });

}

function addTodo(value) {
    const todo ={
        value: value,
        id: new Date().valueOf(),
    };

    data.todos.push(todo);
    renderView();
}

function loadEvent() {
    const addButton = document.querySelector('#addButton');
    const input = document.querySelector('#inputBox');
    const clearButton = document.querySelector('#clearButton');
    
    addButton.addEventListener('click', function(event){
        addTodo(input.value);
        input.value ='';
    });
    clearButton.addEventListener('click', function (event) {

        input.value = '';
        const Todolist = data.todos.filter(function (todo) {
            return false;
        });
        data.todos = Todolist;
        renderView();
    
    });

}

loadEvent();