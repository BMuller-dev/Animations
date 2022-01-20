function stars() {
  let scene = document.querySelector(".scene");
  for (let i = 0; i < 200; i++) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.floor(Math.random() * 10) + 1;


    star.style.animationDuration = 5 + duration + 's';
    
    star.style.left = x + "px";
    star.style.top = y + "px";

    scene.appendChild(star);
  }
}
stars();
