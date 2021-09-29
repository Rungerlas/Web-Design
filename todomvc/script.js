const data ={
    todos:[]
};

function createTodoNode(value, id){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerHTML =value;
    button.innerHTML = 'Delete';

    li.append(span);
    li.append(button);


    button.addEventListener('click', function(){
        console.log('delete!');

    });

    return li;
}


function renderView(){
    
        const listContainer = document.querySelector('.list-container');
        listContainer.innerHTML ='';

        data.todos.forEach(function (todo){
            const li = document.createElement('li');
            li.innerHTML = todo.value
            listContainer.append(li);
        });
       
    
}


function addTodo(value){

    const todo ={
        value: value
        id: new Date().valueOf()
    }

    data.todos.push(todo);
    //console.log(data.todos);
    renderView();
}



function loadevents(){
    const addbutton = document.querySelector('addButton');
    const input = document.querySelector('#inputBox');
    // addbutton.addEventListener('click', function(/*event*/) {
    //     //console.log(event.target);
    //     console.log('click');
    // });
    addbutton.addEventListener('click', function(event){
        addTodo(input.value);
        console.log(input.value);
        input.value='';
    });
}

loadevents();