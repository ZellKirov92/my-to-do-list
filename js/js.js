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
        checkbox.classList.add("checkbox");
        li.appendChild(checkbox);
        const removeTask = document.createElement("button");
        removeTask.type = "button";
        removeTask.classList.add("removeTask");
        removeTask.textContent = "X";
        removeTask.addEventListener("click", () => {
        li.remove();
    });
        li.appendChild(removeTask);

        checkbox.addEventListener('click', function() {
            li.classList.toggle("completed");
        });
    }
});
