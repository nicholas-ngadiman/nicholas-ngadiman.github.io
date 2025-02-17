const moonIcon = document.getElementById("moon-icon");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light-mode");
    moonIcon.classList.replace("fa-moon", "fa-sun");
    document.getElementById("addepar_logo").src = "images/addepar_logo_light.jpeg";
    document.getElementById("rareskills_io_logo").src = "images/rareskills_io_logo_light.jpeg";
}

moonIcon.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        moonIcon.classList.replace("fa-moon", "fa-sun");
        document.getElementById("addepar_logo").src = "images/addepar_logo_light.jpeg";
        localStorage.setItem("theme", "light");
    } else {
        document.getElementById("addepar_logo").src = "images/addepar_logo_dark.png";
        moonIcon.classList.replace("fa-sun", "fa-moon");
        document.getElementById("rareskills_io_logo").src = "images/rareskills_io_logo_dark.png";
    }
});