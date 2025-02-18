document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();

    const hiElement = document.getElementById('hi');
    const nichElement = document.getElementById('nich')

    const typewriterHi = new Typewriter(hiElement, {
        loop: false,
        delay: 150,
        cursor: '|'
    });

    typewriterHi
        .typeString('Hi!')
        .pasteString('👋')
        .pauseFor(1000)
        .callFunction(() => {
            hiElement.querySelector('.Typewriter__cursor').style.display = 'none';
            
            const typewriterNich = new Typewriter(nichElement, {
                loop: false,
                delay: 200,
                cursor: '|'
            });
            
            typewriterNich
                .typeString('I am Nich.')
                .callFunction(() => {
                    nichElement.querySelector('.Typewriter__cursor').style.display = 'none';
                })
                .start();
        })
        .start();
});