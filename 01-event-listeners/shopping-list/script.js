const btnClear = document.querySelector("#clear");

//? addEventListner
btnClear.addEventListener("click", (e) => {
  //? 1:
  //   const listItems = document.querySelectorAll(".items li");
  //   listItems.forEach((item) => item.remove());
  //? 2:
  const ul = document.querySelector(".items");
  //   ul.innerHTML = "";
  //? 3:
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
