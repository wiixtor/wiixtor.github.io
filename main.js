//People in village
var population = 1;
var popCost = 10;

//Food variables
var food = 1;
var foodPS = 0;
var foodClick = 1;
var foodLimit = 100;
var foodUpClickCost = 10;

//Money variables
var dosh = 0;
var doshPS = 0;
var doshClick = 1;
var doshUpClickCost = 10;

//Buildings
var houses = 1;
var popPerHouse = 1;
var houseCost = 100;


function farm() {
    food += foodClick;
    if (food > foodLimit) food = foodLimit;
    update();
}

function upFarmClick(){
    if(dosh >= foodUpClickCost) {
        dosh -= foodUpClickCost;
        foodUpClickCost = Math.round(Math.pow(foodUpClickCost, 1.2));
        foodClick++;
    }
    update();
}

function makeDosh() {
    dosh += doshClick;
    update();
}

function upDoshClick(){
    if(dosh >= doshUpClickCost) {
        dosh -= doshUpClickCost;
        doshUpClickCost = Math.round(Math.pow(doshUpClickCost, 1.2));
        doshClick++;
    }
    update();
}

function populate() {
    if (food >= popCost && (population+1) <= (houses * popPerHouse)) {
        population++;
        food -= popCost;
        popCost = Math.pow(popCost, 2);
    }
    update();
}

function buildHouse(){
    if (dosh >= houseCost) {
        dosh -= houseCost;
        houses++;
        houseCost = Math.pow(houseCost, 2);
    }
    update();
}

function update() {
    document.getElementById("doshID").innerHTML = dosh;
    document.getElementById("foodID").innerHTML = food;
    document.getElementById("popsID").innerHTML = population;
    document.getElementById("popCostID").innerHTML = popCost;
    document.getElementById("houseID").innerHTML = houses;
    document.getElementById("houseCostID").innerHTML = houseCost;
    document.getElementById("farmCCID").innerHTML = foodUpClickCost;
    document.getElementById("doshCCID").innerHTML = doshUpClickCost;
}