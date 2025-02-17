const moonIcon = document.getElementById("moon-icon");
const body = document.body;

const savedTheme = localStorage.getItem("");
if (savedTheme === "light") {
    body.classList.add("light-mode");
    moonIcon.classList.replace("fa-moon", "fa-sun");
}

moonIcon.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        moonIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        moonIcon.classList.replace("fa-sun", "fa-moon");
    }
});