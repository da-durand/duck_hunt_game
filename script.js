var screenElement = document.createElement("section");
document.body.appendChild(screenElement);


function createDuck(){
    var duckElement = document.createElement("div");
    duckElement.className = "duck";
    screenElement.appendChild(duckElement);
    setRandomPosition(duckElement);
    duckElement.addEventListener("click", ducksKill);
}

function setRandomPosition(duck) {
    duck.style.left = Math.floor(Math.random() * 960) + "px";
    duck.style.top = Math.floor(Math.random() * 560) + "px";
}

function ducksKill() {
    this.remove();
    createDuck();
};

for (let i = 0; i < 15; i++) {
    createDuck();
}

function ducksMove() {

    allDucks = document.getElementsByClassName("duck")
    for (let i = 0; i < allDucks.length; i++) {
        setRandomPosition(allDucks[i]);
        allDucks[i].style.transitionDuration = "3s";
    }

}

setInterval(ducksMove, 2000);