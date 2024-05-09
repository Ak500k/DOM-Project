document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector("button");
  var input = document.querySelector("input");
  const ul = document.querySelector("ol");
  var button2 = document.querySelectorAll("button")[1];
  const list = document.querySelector("ol");

  function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
  function inputLength() {
    return input.value.length;
  }
  function cleanList() {
    ul.removeChild(list.firstElementChild);
  }
  function addListAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }
  }

  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
      createListElement();
    }
  }

  button.addEventListener("click", addListAfterClick);
  input.addEventListener("keydown", addListAfterKeypress);
  button2.addEventListener("click", cleanList);
});
