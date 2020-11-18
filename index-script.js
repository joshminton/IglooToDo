const todoList = document.querySelector('#todoList')


if (localStorage.getItem("todos") === null) {
    var todos = new Array();
} else {
    var todos = JSON.parse(localStorage.getItem("todos"));
}

draw();

const btn = document.querySelector('.addWrapper');
btn.addEventListener('click', () => {

    var newTodo = {text:document.getElementById('task').value, done:false};

    todos.push(newTodo)

    document.getElementById('task').value = '';

    draw();
})

function check(id){
    if(todos[id].done){
        todos[id].done = false;
    } else {
        todos[id].done = true;
    }
    draw();
}

function remove(id){
    todos.splice(id, 1);
    draw();
}

function draw(){
    todoList.innerHTML=''

    todos.forEach((item, i) => {
        //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
        var template = document.querySelector('#todoTemp');
        var clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.taskText').innerHTML = item.text;
        clone.id = i;
        if(item.done){
            clone.classList.add("done");
            clone.firstElementChild.innerHTML = 'check_box';
        }
        clone.querySelector('.checkbox').onclick = function(){check(i);};
        clone.querySelector('.delete').onclick = function(){remove(i);};
        todoList.appendChild(clone);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
