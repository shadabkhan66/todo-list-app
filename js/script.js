
document.getElementById("add-task").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();
  if (task) {
    const taskList = document.getElementById("task-list");
    const newTask = document.createElement("li");
    newTask.textContent = task;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});
