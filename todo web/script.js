let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

showTasks();

function addTask() {

    let input = document.getElementById("taskInput");
    let priority = document.getElementById("priority").value;

    if (input.value == "")
        return;

    tasks.push({
        name: input.value,
        completed: false,
        priority: priority,
        date: new Date().toLocaleString()
    });

    input.value = "";

    save();
    showTasks();
}

function showTasks() {

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let completed = 0;

    tasks.forEach((task, index) => {

        if (task.completed)
            completed++;

        let li = document.createElement("li");

        li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''} ${task.priority.toLowerCase()}">
        ${task.name}
        <br>
        <small>${task.priority} | ${task.date}</small>
        </span>

        <button onclick="done(${index})">✔</button>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });

    document.getElementById("total").innerHTML = tasks.length;
    document.getElementById("completed").innerHTML = completed;
}

function done(i) {
    tasks[i].completed = !tasks[i].completed;
    save();
    showTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    save();
    showTasks();
}

function editTask(i) {

    let newTask = prompt("Edit Task", tasks[i].name);

    if (newTask != null) {
        tasks[i].name = newTask;
        save();
        showTasks();
    }
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    save();
    showTasks();
}

function clearAll() {
    tasks = [];
    save();
    showTasks();
}

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.getElementById("search").addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let li = document.querySelectorAll("#taskList li");

    li.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(value) ? "" : "none";
    });

});

document.getElementById("taskInput").addEventListener("keypress", function (e) {

    if (e.key == "Enter")
        addTask();

});

function darkMode() {
    document.body.classList.toggle("dark");
}