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
        checkbox.style.marginLeft = "30px";
        checkbox.style.textAlign = "right";
        checkbox.style.width = "20px";
        checkbox.style.height = "20px";
        li.appendChild(checkbox);
        const removeTask = document.createElement("button");
        removeTask.type = "button";
        removeTask.style.width = "40px";
        removeTask.style.height = "40px";
        removeTask.textContent = "X";
        removeTask.style.margin = "5px 10px 0 20px";
        removeTask.style.padding = "5px 5px 10px 5px";
        removeTask.style.backgroundColor = "hsl(0, 100%, 33%)";
        removeTask.addEventListener("click", () => {
        li.remove();
    });
        li.appendChild(removeTask);

        checkbox.addEventListener('click', function() {
            li.classList.toggle("completed");
        });
    }
});
