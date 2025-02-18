document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});

function replayAnimation() {
    const element = document.querySelector('.wave');
    element.classList.remove('wave');
    element.style.animationDelay = "0s";
    void element.offsetWidth;
    element.classList.add('wave');
}