const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    // Toggle the dark mode class for body and main
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');

    // Change the icon based on the dark mode state
    if (modeButton.textContent.includes("◪")) {
        modeButton.textContent = "◩";  // Change icon to "◩" for dark mode
    } else {
        modeButton.textContent = "◪";  // Change icon to "◪" for light mode
    }
});

