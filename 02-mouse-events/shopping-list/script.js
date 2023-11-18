const icon = document.querySelector("header img");
const body = document.querySelector("body");
const h1 = document.querySelector("header h1");

//? 1: click event
icon.addEventListener("click", () => console.log("click event"));

//? 2: double click
icon.addEventListener("dblclick", () => {
  if (body.style.backgroundColor !== "red") {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "";
  }
});

//? 3: context menu
icon.addEventListener("contextmenu", () => (icon.style.display = "hidden"));

//? 4: Mouse Down
icon.addEventListener("mousedown", () => console.log("Mouse Down"));

//? 5: Mouse up
icon.addEventListener("mouseup", () => console.log("Mouse up"));

//? 6: scroll -wheel
icon.addEventListener("wheel", console.log("Scrolling"));

//? 7: mouse hover
icon.addEventListener("mouseover", () => {
  h1.style.fontSize = "30px";
});

//? 8: mouse hover release
icon.addEventListener("mouseout", () => {
  h1.style.fontSize = "50px";
});

//? 9: drag start
icon.addEventListener("dragstart", () => console.log("drag start"));

//? 10: drag end
icon.addEventListener("dragstart", () => console.log("drag end"));

//? 11: drag end
icon.addEventListener("drag", () => console.log("drag"));
