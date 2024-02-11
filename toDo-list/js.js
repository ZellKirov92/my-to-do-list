const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        checkbox.addEventListener('click', function() {
            li.classList.toogle("completed");
        });
    }
});


