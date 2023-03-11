const main_input = document.querySelector("#main-input");
const task_list = document.querySelector("#task-list");
task_list.addEventListener("click", doneTask);
let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => renderTask(task));
}

function addTask() {
  const task_text = main_input.value;

  const newTask = {
    id: Date.now(),
    text: task_text,
    done: false,
  };

  tasks.push(newTask);
  saveLC();

  renderTask(newTask);

  main_input.value = "";
  main_input.focus();
}

function deleteTask(event) {
  let target = event.target;
  while (!target.classList.contains("task-element")) {
    target = target.parentNode;
  }

  const id = Number(target.id);

  const index = tasks.findIndex((task) => task.id === id);

  tasks.splice(index, 1);
  saveLC();

  target.remove();
}

function doneTask(event) {
  if (event.target.matches(".task-element__checkbox")) {
    let target = event.target;
    while (!target.classList.contains("task-element")) {
      target = target.parentNode;
    }
    const id = Number(target.id);

    const task = tasks.find((task) => task.id === id);
    task.done = !task.done;
    saveLC();

    const label = event.target.nextElementSibling;
    if (event.target.checked) {
      label.classList.add("crossed-out");
    } else {
      label.classList.remove("crossed-out");
    }
  }
}

function saveLC() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
  const cssClass = task.done
    ? "task-element__label crossed-out"
    : "task-element__label";

  const task_HTML = `
<li id=${task.id} class="task-element">
  <input type="checkbox" class="task-element__checkbox" />
  <label class="${cssClass}">${task.text}</label>
    <a class="close-button" href="#" onclick="deleteTask(event)">
      <span class="close-icon"></span>
    </a>
</li>`;

  task_list.insertAdjacentHTML("beforeend", task_HTML);
}

// function allDone(){

// }
