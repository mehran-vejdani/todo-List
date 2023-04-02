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
  checkIcon.classList = "fas fa-check-square check";
  //   checkIcon.style.color = "lightgray";
  ///checkIcon event
  checkIcon.addEventListener("click", () => {
    checkIcon ? checkIcon.classList.toggle("green") : "";
  });
  divChild.appendChild(checkIcon);

  //trash the event
  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    divParent.remove();
  });
  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);
  input.value = "";
}
