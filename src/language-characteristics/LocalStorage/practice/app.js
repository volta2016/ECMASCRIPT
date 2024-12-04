const alert = document.querySelector(".alert");
const form = document.querySelector("#form");
const printTodoHTML = document.querySelector("#printTodo");
const templateTodo = document.querySelector("#templateTodo").content;

let todos = [];

const processForm = (e) => {
  e.preventDefault();
  alert.classList.add(".d-none");

  const data = new FormData(form);
  const [todo] = [...data.values()];

  //validation field empty
  if (!todo.trim()) {
    alert.classList.remove("d-none");
    return;
  }

  addTodo(todo);
  printTodos();
};

const addTodo = (todo) => {
  const objTodo = {
    name: todo,
    id: `${Date.now}`,
  };
  todos.push(objTodo);
};

const printTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  printTodoHTML.textContent = "";
  const fragment = document.createDocumentFragment();

  //iterate todo
  todos.forEach((item) => {
    const clone = templateTodo.cloneNode(true);
    clone.querySelector(".lead").textContent = item.name;
    clone.querySelector(".btn-danger").dataset.id = item.id;

    fragment.appendChild(clone);
  });

  printTodoHTML.appendChild(fragment);
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-danger")) {
    console.log(e.target.dataset.id);
    todos = todos.filter((item) => item.id !== e.target.dataset.id);
    printTodos();
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("todo")) {
    todos.JSON.parse(localStorage.getItem("todos"));
    printTodos();
  }
});

form.addEventListener("submit", processForm);
