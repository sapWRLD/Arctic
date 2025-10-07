const text = document.getElementById("copyright");
const date = new Date();

addEventListener("DOMContentLoaded", () => {
    text.textContent = `©${date.getFullYear()} Arctiq. All rights reserved.`; 
})