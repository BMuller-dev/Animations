let sonic = document.querySelector('.sonic');
let fast = document.querySelector('.fast');

let x = 1
let y = 1

function Timer(){
    sonic.style.marginLeft = 1 * x + "px";
    x += y
    setTimeout("Timer()",200);
}

fast.addEventListener("click", function() {
y *= 1.10

})
Timer();
