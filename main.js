//People in village
var population = 0;
var popCost = 50;
var popPS = 0;

//Food variables
var food = 0;
var foodPS = 0;
var foodClick = 1;
var foodLimit = 100;

var foodUpClickCost = 10;
var foodNumberOfTimesUpgraded = 0;

//Money variables
var dosh = 0;
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
        foodUpClickCost = Math.round((10+foodUpClickCost) * 1.5);
        foodClick += Math.ceil(1 + (foodNumberOfTimesUpgraded*0.5));
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
        doshUpClickCost = Math.round((10+doshUpClickCost) * 1.5);
        doshClick += Math.ceil(1 + (doshNumberOfTimesUpgraded*0.5));
        doshNumberOfTimesUpgraded++;
    }
    update();
}

function populate() {
    if (food >= popCost && (population+1) <= (houses * popPerHouse)) {
        population++;
        food -= popCost;
        popCost = Math.round((10+popCost) * 1.5);
    }
    update();
}

function buildHouse(){
    if (dosh >= houseCost) {
        dosh -= houseCost;
        houses++;
        houseCost = Math.round((10+houseCost) * 1.5);
    }
    update();
}

function buildFarm(){
    if (dosh >= farmCost) {
        dosh -= farmCost;
        farms++;
        farmCost = Math.round((10+farmCost) * 1.5);
        foodPS++;
        foodLimit = Math.round((10+foodLimit) * 1.5);
    }
    update();
}

function buildMine(){
    if (dosh >= mineCost) {
        dosh -= mineCost;
        mines++;
        mineCost = Math.round((10+mineCost) * 1.5);
        doshPS++;
    }
    update();
}

function buildCloneVat(){
    if (dosh >= cloneVatCost) {
        dosh -= cloneVatCost;
        cloneVats++;
        cloneVatCost = Math.round((10+cloneVatCost) * 1.5);
        popPS++;
    }
    update();
}

function upgradeHouse(){
    if (dosh >= houseUpgradeCost) {
        dosh -= houseUpgradeCost;
        popPerHouse++;
        houseNumberOfUpgrades++;
        houseUpgradeCost = Math.round((10+houseUpgradeCost) * 1.5);
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

//UI Objects
var doshCIObj;
var foodCIObj;

function init() {
    //load storage
    if(typeof(Storage) !== "undefined") {
        if (localStorage.dosh) {     
            population = Number(localStorage.population);
            popCost = Number(localStorage.popCost);
            popPS = Number(localStorage.popPS);

            food = Number(localStorage.food);
            foodPS = Number(localStorage.foodPS);
            foodClick = Number(localStorage.foodClick);
            foodLimit = Number(localStorage.foodLimit);

            foodUpClickCost = Number(localStorage.foodUpClickCost);
            foodNumberOfTimesUpgraded = Number(localStorage.foodNumberOfTimesUpgraded);

            dosh = Number(localStorage.dosh);
            doshPS = Number(localStorage.doshPS);
            doshClick = Number(localStorage.doshClick);
            doshUpClickCost = Number(localStorage.doshUpClickCost);
            doshNumberOfTimesUpgraded = Number(localStorage.doshNumberOfTimesUpgraded);

            houses = Number(localStorage.houses);
            houseUpgradeCost = Number(localStorage.houseUpgradeCost);
            houseNumberOfUpgrades = Number(localStorage.houseNumberOfUpgrades);
            popPerHouse = Number(localStorage.popPerHouse);
            houseCost = Number(localStorage.houseCost);

            farms = Number(localStorage.farms);
            farmCost = Number(localStorage.farmCost);
            mines = Number(localStorage.mines);
            mineCost = Number(localStorage.mineCost);
            cloneVats = Number(localStorage.cloneVats);
            cloneVatCost = Number(localStorage.cloneVatCost);
        }
    } 

    //store elements
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
    doshCIObj = document.getElementById("doshCIIDtest");
    foodCIObj = document.getElementById("foodCIIDtest");
    update();
}
function update() {
    //Elements
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
    houseUpgradeCostObj.innerHTML = houseUpgradeCost + " dosh";
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
    cloneVatCostObj.innerHTML = cloneVatCost + " dosh";
    doshCIObj.innerHTML = Math.ceil(1 + (doshNumberOfTimesUpgraded*0.1));
    foodCIObj.innerHTML = Math.ceil(1 + (foodNumberOfTimesUpgraded*0.1));
}

function store() {
    if (dontsave) {
        return;
    }
    if(typeof(Storage) !== "undefined") {
        localStorage.population = population;
        localStorage.popCost = popCost;
        localStorage.popPS = popPS;

        localStorage.food = food;
        localStorage.foodPS = foodPS;
        localStorage.foodClick = foodClick;
        localStorage.foodLimit = foodLimit;

        localStorage.foodUpClickCost = foodUpClickCost;
        localStorage.foodNumberOfTimesUpgraded = foodNumberOfTimesUpgraded;

        localStorage.dosh = dosh;
        localStorage.doshPS = doshPS;
        localStorage.doshClick = doshClick;
        localStorage.doshUpClickCost = doshUpClickCost;
        localStorage.doshNumberOfTimesUpgraded = doshNumberOfTimesUpgraded;

        localStorage.houses = houses;
        localStorage.houseUpgradeCost = houseUpgradeCost;
        localStorage.houseNumberOfUpgrades = houseNumberOfUpgrades;
        localStorage.popPerHouse = popPerHouse;
        localStorage.houseCost = houseCost;

        localStorage.farms = farms;
        localStorage.farmCost = farmCost;
        localStorage.mines = mines;
        localStorage.mineCost = mineCost;
        localStorage.cloneVats = cloneVats;
        localStorage.cloneVatCost = cloneVatCost;
    }
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

var dontsave = false;
function reset() {
    dontsave = true;
    localStorage.clear();
}