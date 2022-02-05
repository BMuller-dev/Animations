let engine = document.querySelector('.engine');
let rocket = document.querySelector('.rocket_launch');
let body = document.querySelector('body');

engine.addEventListener('click', function() {
    rocket.classList.toggle("start")
    stars();
})

function stars() {
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let d = Math.floor(Math.random() * 10) + 1;

        star.style.animationDelay = 2 + d + 's';
        star.style.animationDuration = 5 + d + 's';

        star.style.left = x + "px";
        star.style.top = y + "px";

        body.appendChild(star);

    }
}