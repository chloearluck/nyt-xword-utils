const modifier = "Alt";
const togglePencilKey = "KeyT"
const toggleMenuKey = "KeyH"

const getPencilButton = () => {
  let pencilIcons = document.getElementsByClassName("Icon-pencil--1cTxu Icon-icon--1RAWC");
  if (pencilIcons.length == 1)
    return pencilIcons[0].parentElement;
  pencilIcons = document.getElementsByClassName("pencil-mode-toggle")
  if (pencilIcons.length == 1)
    return pencilIcons[0];
  return null;
}

const getMenuBar = () => {
  let headers = document.getElementsByClassName("Header-header--2X8Zj");
  if (headers.length == 1) {
    return headers[0];
  }
  headers = document.getElementsByClassName("pz-header");
  if (headers.length == 1) {
    return headers[0];
  }
  return null;
}

let menuBar = document.getElementsByClassName("Header-header--2X8Zj")[0];
let pencilButton = getPencilButton();

let modifierDown = false;
let display = "";

const toggleMenu = () => {
  if (!menuBar) {
    menuBar = getMenuBar();
  }

  if (menuBar) {
    if (!menuBar.hidden) {
      display = menuBar.style.display;
      menuBar.style.display = "none";
      menuBar.hidden = true;
    } else {
      menuBar.hidden = true;
      menuBar.style.display = display;
    }
  }
}

const togglePencil = () => {
  if (!pencilButton)
    pencilButton = getPencilButton();

  if (pencilButton)
    pencilButton.click();
}

window.onkeydown = (event) => {
  if (event.key == modifier) {
    modifierDown = true;
  }

  if (modifierDown && event.code == togglePencilKey) {
    togglePencil();
  }

  if (modifierDown && event.code == toggleMenuKey) {
    toggleMenu();
  }
}

window.onkeyup = (event) => {
  if (event.key == modifier)
    modifierDown = false;
}