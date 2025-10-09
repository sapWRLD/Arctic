
const themeToggle = document.getElementById("theme-btn");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let isDark = storedTheme === "dark" || (!storedTheme && prefersDark);


function setTheme(dark) {
    document.documentElement.setAttribute("data-bs-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
    isDark = dark;
    themeToggle.innerHTML = dark
    ? `<img src="Assets/Images/svg/sun.svg" alt="Light mode" width="24" height="24">`
    : `<img src="Assets/Images/svg/moon.svg" alt="Dark mode" width="24" height="24">`;
}


document.addEventListener("DOMContentLoaded", () => {
    setTheme(isDark);
    
    themeToggle.addEventListener("click", () => {
        setTheme(!isDark);
    });
});
