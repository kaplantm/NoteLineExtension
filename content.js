let isOpen = false;
let input;
let position = "top";

function addNoteLine() {
  input = document.createElement("TEXTAREA");
  input.style.position = "fixed";
  input.style.top = 0;
  input.style.left = 0;
  input.style.width = "100%";
  input.rows = 2;
  input.style.zIndex = "10000";
  input.style.boxSizing = "border-box";
  input.style.padding = ".5em";
  input.style.border = "10px solid dodgerblue";
  input.style.fontSize = "16px";
  document.body.appendChild(input);
  isOpen = true;
}

function togglePosition() {
  console.log("togglePosition", position);
  if (position === "top") {
    input.style.top = "unset";
    input.style.bottom = 0;
    position = "bottom";
  } else {
    input.style.top = 0;
    input.style.bottom = "unset";
    position = "top";
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("hey from message", request.message);
  if (request.message === "clicked_browser_action") {
    if (!isOpen) {
      addNoteLine();
    } else {
      togglePosition();
    }
  }
});
