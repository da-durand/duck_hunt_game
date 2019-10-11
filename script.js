var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var screenElement = document.createElement("section");
mainElement.appendChild(screenElement);
screenElement.id = "screen";

var firstPlanElement = document.createElement("div");
screenElement.appendChild(firstPlanElement);
firstPlanElement.id = "firstPlan";

var infoBarElement = document.createElement("div");
infoBarElement.className = "info";
firstPlanElement.appendChild(infoBarElement);

var infoBarContainer = document.createElement("div");
infoBarContainer.className = "container";
infoBarElement.appendChild(infoBarContainer);

var roundShotContainer = document.createElement("div");
infoBarContainer.appendChild(roundShotContainer);
roundShotContainer.id = "roundAndShot";

var roundElement = document.createElement("div");
roundShotContainer.appendChild(roundElement);
roundElement.id = "round";

var shotElement = document.createElement("div");
roundShotContainer.appendChild(shotElement);
shotElement.id = "shot";

var hitElement = document.createElement("div");
infoBarContainer.appendChild(hitElement);
hitElement.id = "hit";

var scoreElement = document.createElement("div");
infoBarContainer.appendChild(scoreElement);
scoreElement.id = "score";
var score = 000000;
scoreElement.innerHTML = score + " SCORE";




roundElement.innerHTML = "R=0";
shotElement.innerHTML = "SHOT";
hitElement.innerHTML = "HIT";

function scorePoint(){
    score += 100;
    scoreElement.innerHTML = score + " SCORE";
}

// function fire(){
//     var flashEvent = document.createElement("div");
//     flashEvent.className = "flash";
//     firstPlanElement.appendChild(flashEvent);
//     setTimeout(function(){
//         flashEvent.remove();
//     }, 100)
// }

function createDuck(){
    var duckElement = document.createElement("div");
    duckElement.className = "duck";
    screenElement.appendChild(duckElement);
    setRandomPosition(duckElement);
    duckElement.addEventListener("click", ducksKill);
}

function setRandomPosition(duck) {
    duck.style.left = Math.floor(Math.random() * 1230) + "px";
    duck.style.top = Math.floor(Math.random() * 490) + "px";
}

function ducksKill() {
    this.remove();
    createDuck();
    scorePoint();
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

// screenElement.addEventListener("click", fire);

setInterval(ducksMove, 2000);

