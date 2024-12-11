function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todo-list');

    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="complete" onclick="toggleComplete(this)">✔</button>
            <button class="delete" onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    
    todoList.appendChild(newTask);

    
    taskInput.value = '';
}

function toggleComplete(button) {
    const task = button.closest('li');
    task.classList.toggle('complete');
}

function deleteTask(button) {
    const task = button.closest('li');
    task.remove();
}
