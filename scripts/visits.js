// initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// get stored value for the number of viists key in localStorage if it exists. If the key is missing, then assign 0 to the number of viists variable
let numV = Number(window.localStorage.getItem("numV-ls")) || 0;

// see if this is the first viist or display the number of visists
if (numV !== 0) {
    visitsDisplay.textContent = numV;
} else {
    visitsDisplay.textContent = "This is your first visit! Welcome! 😊"
}

// increment the number of viists by 1
numV++;

// store the new viist total into localStorage, key=numV-ls
localStorage.setItem("numV-ls", numV);