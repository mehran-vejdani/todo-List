const toDoItems = document.querySelector(".to-do-items");
const input = document.querySelector(".input");
const trashIcon = document.querySelector(".trash");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

function addItem() {
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let checkIcon = document.createElement("i");
  let trashIcon = document.createElement("i");
  divParent.className = "item";
  divParent.innerHTML = `<div>` + input.value + `</div>`;
  checkIcon.classList = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  ///checkIcon event
  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "green";
  });
  divChild.appendChild(checkIcon);
}
