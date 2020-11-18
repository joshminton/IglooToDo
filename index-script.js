const todoList = document.querySelector('#todoList')

// var todos = new Array();

const btn = document.querySelector('.addWrapper');
btn.addEventListener('click', () => {
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
    var template = document.querySelector('#todoTemp');
    var clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector('.taskText').innerHTML = document.getElementById('task').value;
    clone.querySelector('.checkbox').onclick = function() { this.parentNode.classList.toggle("done"); };
    todoList.appendChild(clone);
})
