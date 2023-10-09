document.addEventListener("DOMContentLoaded", function () {
  const taskNameInput = document.getElementById("taskName");
  const deadlineInput = document.getElementById("deadline");
  const priorityInput = document.getElementById("priority");
  const labelsInput = document.getElementById("labels");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("tasks");

  addTaskButton.addEventListener("click", function () {
    const taskName = taskNameInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;
    const labels = labelsInput.value.split(",");

    const taskItem = document.createElement("li");
    taskItem.textContent = `Task: ${taskName}, Deadline: ${deadline}, Priority: ${priority}, Labels: ${labels.join(
      ", "
    )}`;

    if (priority === "high") {
      taskItem.classList.add("high-priority");
    } else if (priority === "medium") {
      taskItem.classList.add("medium-priority");
    } else if (priority === "low") {
      taskItem.classList.add("low-priority");
    }

    taskList.appendChild(taskItem);

    // Clear input fields
    taskNameInput.value = "";
    deadlineInput.value = "";
    priorityInput.value = "high";
    labelsInput.value = "";
  });
});
