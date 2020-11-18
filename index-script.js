const todoList = document.querySelector('#todoList')

const btn = document.querySelector('.addWrapper');
btn.addEventListener('click', () => {
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
    var template = document.querySelector('#todoTemp');
    var clone = template.content.cloneNode(true);
    clone.querySelector('.taskText').innerHTML = document.getElementById('task').value;
    todoList.appendChild(clone);
})
