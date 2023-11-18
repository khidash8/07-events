const clearBtn = document.querySelector("#clear");
const icon = document.querySelector("header img");

//! `target` - The element that triggered the event
// clearBtn.addEventListener("click", (e) => console.log(e.target));

//! `currentTarget` - The element that the event listener is attached to (These are the same in this case
const body = document.querySelector("body");
// body.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

//! `type` - The type of event that was triggered
// clearBtn.addEventListener("click", (e) => console.log(e.type));
// icon.addEventListener("dragstart", (e) => console.log(e.type));

//! `timeStamp` - The time that the event was triggered
// clearBtn.addEventListener("click", (e) => console.log(e.timeStamp));

//! `clientX` - The x position of the mouse click relative to the window
// icon.addEventListener("click", (e) => console.log(e.clientX));

//! `clientY` - The y position of the mouse click relative to the window
// icon.addEventListener("click", (e) => console.log(e.clientY));

//! `offsetX` - The x position of the mouse click relative to the element
// icon.addEventListener("click", (e) => console.log(e.offsetX));

//! `offsetY` - The y position of the mouse click relative to the element
// icon.addEventListener("click", (e) => console.log(e.offsetY));

//! `pageX` - The x position of the mouse click relative to the page
// icon.addEventListener("click", (e) => console.log(e.pageX));

//! `pageY` - The y position of the mouse click relative to the page
// icon.addEventListener("click", (e) => console.log(e.pageY));

//! `screenX` - The x position of the mouse click relative to the screen
// icon.addEventListener("click", (e) => console.log(e.screenX));

//! `screenY` - The y position of the mouse click relative to the screen
// icon.addEventListener("click", (e) => console.log(e.screenY));

//TODO- set H1 value to the x and y value of the window when Darg icon
// const h1 = document.querySelector("h1");

// icon.addEventListener("drag", (e) => {
//   h1.textContent = `X ${e.clientX} Y ${e.clientY}`;
//   console.log("dragging");
// });
