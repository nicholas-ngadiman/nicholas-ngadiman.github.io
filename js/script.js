document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});

function replayAnimation() {
    const element = document.querySelector('.wave');
    element.classList.remove('wave');
    void element.offsetWidth;
    element.classList.add('wave');
}