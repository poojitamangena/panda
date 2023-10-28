let score=0;
function startGame(){
    setInterval(placeMole,1000);
}
function placeMole(){
    const mole = document.getElementById("mole");
    const gameContainer = document.querySelector(".game-container");
const maxY=gameContainer.clientHeight - mole.clientHeight;
const maxX=gameContainer.clientWidth - mole.clientWidth;
const randomX=Math.floor(Math.random() * maxX);
const randomY=Math.floor(Math.random() * maxY);
mole.style.left = randomX + "px";
mole.style.top  = randomY + "px";
}
function whackMole(event){
    const mole = document.getElementById("mole");
    if(event.target === mole)
    {
        score++;
        document.getElementById("score").textContent=score;
        placeMole();
    }
}
window.onload = startGame;