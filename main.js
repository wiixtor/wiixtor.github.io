//People in village
var population = 0;
var popCost = 50;
var popPS = 0;

//Food variables
var food = 1000;
var foodPS = 0;
var foodClick = 1;
var foodLimit = 100;

var foodUpClickCost = 10;
var foodNumberOfTimesUpgraded = 0;

//Money variables
var dosh = 10000;
var doshPS = 0;
var doshClick = 1;
var doshUpClickCost = 10;
var doshNumberOfTimesUpgraded = 0;

//Buildings
var houses = 0;
var houseUpgradeCost = 1000;
var houseNumberOfUpgrades = 0;
var popPerHouse = 1;
var houseCost = 100;

var farms = 0;
var farmCost = 100;
var mines = 0;
var mineCost = 100;
var cloneVats = 0;
var cloneVatCost = 10000;

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
        foodNumberOfTimesUpgraded++;
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
        doshNumberOfTimesUpgraded++;
    }
    update();
}

function populate() {
    if (food >= popCost && (population+1) <= (houses * popPerHouse)) {
        population++;
        food -= popCost;
        popCost = Math.round(Math.pow(popCost, 1.2));
    }
    update();
}

function buildHouse(){
    if (dosh >= houseCost) {
        dosh -= houseCost;
        houses++;
        houseCost = Math.round(Math.pow(houseCost, 1.2));
    }
    update();
}

function buildFarm(){
    if (dosh >= farmCost) {
        dosh -= farmCost;
        farms++;
        farmCost = Math.round(Math.pow(farmCost, 1.2));
        foodPS++;
        foodLimit = Math.round(Math.pow(foodLimit, 1.2));
    }
    update();
}

function buildMine(){
    if (dosh >= mineCost) {
        dosh -= mineCost;
        mines++;
        mineCost = Math.round(Math.pow(mineCost, 1.2));
        doshPS++;
    }
    update();
}

function buildCloneVat(){
    if (dosh >= cloneVatCost) {
        dosh -= cloneVatCost;
        cloneVats++;
        cloneVatCost = Math.round(Math.pow(mineCost, 1.3));
        popPS++;
    }
    update();
}

function upgradeHouse(){
    if (dosh >= houseUpgradeCost) {
        dosh -= houseUpgradeCost;
        popPerHouse++;
        houseNumberOfUpgrades++;
        houseUpgradeCost = Math.round(Math.pow(houseUpgradeCost, 1.2));
    }
    update();
}


//Objects
var populationObj;
var popCostObj;
var popPSObj;
var popLimitObj;
var foodObj;
var foodPSObj;
var foodClickObj
var foodLimitObj;
var foodUpClickCostObj;
var foodNumberOfTimesUpgradedObj;
var doshObj;
var doshPSObj;
var doshClickObj;
var doshUpClickCostObj;
var doshNumberOfTimesUpgradedObj;
var housesObj;
//var popPerHouseObj;
var houseCostObj;
var houseUpgradeCostObj;
var houseNumberOfUpgradesObj;
var farmsObj;
var farmCostObj;
var minesObj;
var mineCostObj;
var cloneVatsObj;
var cloneVatCostObj;

function init() {
    doshObj = document.getElementById("doshID");
    populationObj = document.getElementById("popsID");
    popCostObj = document.getElementById("popCostID");
    popPSObj = document.getElementById("popsPSID");
    popLimitObj = document.getElementById("popLimitID");
    foodObj = document.getElementById("foodID");
    foodPSObj = document.getElementById("foodPSID");
    foodClickObj = document.getElementById("foodPCID");
    foodLimitObj = document.getElementById("foodLimitID");
    foodUpClickCostObj = document.getElementById("foodCCID");
    foodNumberOfTimesUpgradedObj = document.getElementById("foodCCNUMID");
    doshPSObj = document.getElementById("doshPSID");
    doshClickObj = document.getElementById("doshPCID");
    doshUpClickCostObj = document.getElementById("doshCCID");
    doshNumberOfTimesUpgradedObj = document.getElementById("doshCCNUMID");
    housesObj = document.getElementById("houseID");
    //popPerHouseObj;
    houseCostObj = document.getElementById("houseCostID");
    houseUpgradeCostObj = document.getElementById("houseUCID");
    houseNumberOfUpgradesObj = document.getElementById("houseUCNUMID");
    farmsObj = document.getElementById("farmID");
    farmCostObj = document.getElementById("farmCostID");
    minesObj = document.getElementById("mineID");
    mineCostObj = document.getElementById("mineCostID");
    cloneVatsObj = document.getElementById("cloneVatID");
    cloneVatCostObj = document.getElementById("cloneVatCostID");
    update();
}
function update() {
    doshObj.innerHTML = dosh;
    doshPSObj.innerHTML = (doshPS * population);
    doshClickObj.innerHTML = doshClick;
    foodObj.innerHTML = food;
    foodPSObj.innerHTML = foodPS;
    foodClickObj.innerHTML = foodClick;
    foodLimitObj.innerHTML = foodLimit;
    populationObj.innerHTML = population;
    popLimitObj.innerHTML = houses * popPerHouse;
    popCostObj.innerHTML = popCost + " food";
    popPSObj.innerHTML = popPS;
    housesObj.innerHTML = houses;
    houseCostObj.innerHTML = houseCost + " dosh";
    houseUpgradeCostObj.innerHTML = houseUpgradeCost;
    houseNumberOfUpgradesObj.innerHTML = houseNumberOfUpgrades;
    farmsObj.innerHTML = farms;
    farmCostObj.innerHTML = farmCost + " dosh";
    minesObj.innerHTML = mines;
    mineCostObj.innerHTML = mineCost + " dosh";
    foodUpClickCostObj.innerHTML = foodUpClickCost + " dosh";
    foodNumberOfTimesUpgradedObj.innerHTML = foodNumberOfTimesUpgraded;
    doshUpClickCostObj.innerHTML = doshUpClickCost + " dosh";
    doshNumberOfTimesUpgradedObj.innerHTML = doshNumberOfTimesUpgraded;
    cloneVatsObj.innerHTML = cloneVats;
    cloneVatCostObj.innerHTML = cloneVatCost;
}

var tick = setInterval(upkeep, 1000);
//Handles all ticks, food per sec, dosh per sec, pop per sec, food drain.
function upkeep() {
    food = food + foodPS - population;
    if(food > foodLimit) {
        food = foodLimit;
    }
    dosh += (doshPS * population);
    population += popPS;
    if(population > (popPerHouse * houses)) {
        population = (popPerHouse * houses);
    }
    if(food < 0) {
        population--;
    }
    update();
}