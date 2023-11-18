//? Method 1:
// const body = document.querySelector("body");

// const ekey = document.querySelector(".e-key");
// const eKeyCode = document.querySelector(".e-key-code");
// const eCode = document.querySelector(".e-code");

// const h1 = document.querySelector("#head");

// function setH1(value) {
//   h1.textContent = value;
// }

// body.addEventListener("keypress", (e) => {
//   ekey.innerHTML = `${e.key === " " ? "space" : e.key} <small>e.key</small>`;
//   eKeyCode.innerHTML = `${e.keyCode} <small>e.keyCode</small>`;
//   eCode.innerHTML = `${e.code} <small>e.code</small>`;
//   setH1(e.key.toUpperCase());
// });

//? Method 2:
const parent = document.querySelector("#insert");
window.addEventListener("keypress", onPressKey);

function onPressKey(e) {
  parent.innerHTML = "";

  const keyPair = {
    "e.key": e.key === " " ? "space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (const key in keyPair) {
    const div = document.createElement("div");
    div.classList.add("key");
    div.append(document.createTextNode(keyPair[key]));
    parent.appendChild(div);

    const small = document.createElement("small");
    small.append(document.createTextNode(key));
    div.appendChild(small);
  }
}
