const todo = {
  create(text) {
    return `<div class="list-todo_wrapper">
    <ul class="list-todo">
      <li class="list-todo__li">
        <div class="list-todo__li__container">
          <input
            type="checkbox"
            class="list-todo__li__container__checkbox"
          /><label class="list-todo__li__container__label">${text}</label>
          <a class="close-button" href="#" onclick="todo.delete(event)">
            <span class="close-icon"></span>
          </a>
      </li>
    </ul>
  </div>`;
  },
  add() {
    const elemText = document.querySelector(".input-container__input");
    if (elemText.disabled || !elemText.value.length) {
      return;
    }
    document
      .querySelector(".todo-all")
      .insertAdjacentHTML("beforeend", this.create(elemText.value));
    elemText.value = "";
  },
  delete(event) {
    let target = event.target;
    while (target != this) {
      if (target.classList.contains("list-todo_wrapper")) {
        target.remove();
        return;
      }
      target = target.parentNode;
    }
    target.remove();
  },
};

const todoALL = document.querySelector(".todo-all");
todoALL.addEventListener("change", function (event) {
  if (event.target.matches(".list-todo__li__container__checkbox")) {
    const label = event.target.nextElementSibling;
    if (event.target.checked) {
      label.classList.add("crossed-out");
    } else {
      label.classList.remove("crossed-out");
    }
  }
});

const allСheckbox = document.getElementById("all-checkboxes");
const allСheckboxesLabel = document.querySelector(".label-for-checkbox");

allСheckboxesLabel.addEventListener("click", function () {
  allСheckbox.checked = !allСheckbox.checked;

  const checkboxess = document.querySelectorAll(
    ".list-todo__li__container__checkbox"
  );

  checkboxess.forEach((checkbox) => {
    checkbox.checked = allСheckbox.checked;
    const label = checkbox.nextElementSibling;
    if (allСheckbox.checked) {
      label.classList.add("crossed-out");
    } else {
      label.classList.remove("crossed-out");
    }
  });
});
