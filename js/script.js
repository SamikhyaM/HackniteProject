// =========================================
// BEARCAT: NO TUTORIAL
// Main JavaScript
// =========================================


// Small page-load effect

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});


// Button hover interaction

const buttons = document.querySelectorAll(".big-button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.letterSpacing = "2px";
    });

    button.addEventListener("mouseleave", () => {
        button.style.letterSpacing = "1px";
    });

});
