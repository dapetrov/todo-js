const todo = {
  create(text) {
    return ` <div class="list-todo_wrapper">
    <ul class="list-todo">
      <li class="list-todo__li">
        <div class="list-todo__li__container">
          <input
            type="checkbox"
            class="list-todo__li__container__checkbox"
          /><label class="list-todo__li__container__label">${text}</label>
          <button class="delete-todo" onclick="deleteToDo(event)">del
        </div>
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
};

function AddNewToDo() {
  todo.add();
}
function deleteToDo(event) {
  let target = event.target;
  while (target != this) {
    if (target.classList.contains("list-todo_wrapper")) {
      target.remove();
      return;
    }
    target = target.parentNode;
  }
  target.remove();
}
