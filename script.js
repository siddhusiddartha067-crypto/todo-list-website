function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = task;

    taskText.onclick = function() {
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}