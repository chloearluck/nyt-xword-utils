const modifier = "Alt";
const togglePencilKey = "KeyT"
const toggleMenuKey = "KeyH"

const menuBar = document.getElementsByClassName("Header-header--2X8Zj")[0];
const pencilButton = document.getElementsByClassName("Icon-pencil--1cTxu Icon-icon--1RAWC")[0].parentElement;

let modifierDown = false;

const toggleMenu = () => {
  menuBar.hidden = !menuBar.hidden;
}

const togglePencil = () => {
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

window.onkeyUp = (event) => {
  if (event.key == modifier)
    modifierDown = false;
}