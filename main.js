$(document).ready(function () {
	makeGrid();
	setupUpgrades();

	var energytext = document.createElement("p");
	energytext.id = "energy";
	energytext.innerHTML = "Energy: " + energy.count;
	document.getElementById("inventory").appendChild(energytext);

	var steeltext = document.createElement("p");
	steeltext.id = "steel";
	steeltext.innerHTML = "Steel: " + steel.count;
	document.getElementById("inventory").appendChild(steeltext);

	//for selectbox
	var selectbox = document.createElement("p");
	selectbox.id = "selectboxname";
	//$("selectboxname").hide();
	document.getElementById("selectbox").appendChild(selectbox);
});

var energy = {
	count: 0,
	persec: 0,
	shown: false
} // main resource

var steel = {
	count: 0,
	persec: 0,
	shown: false
} // side resource

var grid = ["white","white","white","white","white","white","white","white","white"];

var lol = 1;
var lol2 = 0;
var num = 0;

function color() { // to make sure the grid is responding
	var box = document.getElementsByClassName("box");
	if (lol % 2 == 1) {
		$(box).css("background-color", "red");
	} else {
		$(box).css("background-color", "blue");
	}
	lol++;
}

function showResource(resource, show) {
	if (show == true) {
		resource.shown = true;
	} else {
		resource.shown = false;
	}
}

function tick() {
	energy.count += energy.persec;
	steel.count += steel.persec;
	document.getElementById("energy").innerHTML = "Energy: " + energy.count;
	document.getElementById("steel").innerHTML = "Steel: " + steel.count;
}

window.setInterval(function() {
	tick();
}, 1000);

function setupButton() {
	for (var i = 1; i < grid.length+1; i++) {
		createButton(i);
	}
}

function createButton(num) {
	var number = document.createElement("button");
	number.id = "numtext";
	number.innerHTML = num;
	document.getElementById(num).appendChild(number);
	number.onclick = function(){selectBox(Number(number.parentElement.id), number.parentElement.id)};
}

function makeGrid() {
	var c = 0; // how much boxes we have made
	for (var i = 1; i < 4; i++) {
		var gridrow = document.createElement("div");
		gridrow.id = "gridrow";
		for (var j = 1; j < 4; j++) {
			c++;
			var gridbox = document.createElement("div");
			gridbox.id = c;
			gridrow.appendChild(gridbox);
			gridbox.className = "box";
		}
		document.getElementById("grid").appendChild(gridrow);
	}
	setupButton();
}

function setupUpgrades() {
	for (var i = 0; i < upgrades.length; i++) {
		createUpgrades(upgrades[i]);
	}
}

function createUpgrades(upgrade) {
	console.log(upgrades[lol2]);
	lol2++;
	var upgradediv = document.createElement("div");
	upgradediv.id = "upgradeid" + lol2;
	upgradediv.className = "upgradeid";
	var upgradename = document.createElement("h4");
	upgradename.innerHTML = upgrade.name;
	var upgradedesc = document.createElement("p");
	upgradedesc.innerHTML = upgrade.description;
	var upgradebutton = document.createElement("button");
	upgradebutton.id = "upgradebutton" + lol2;
	if (upgrade.cost == 0) {
		upgradebutton.innerHTML = "Free" + " (" + upgrade.uses + ")";
	} else if (upgrade.uses == -1) {
		upgradebutton.innerHTML = upgrade.cost + " Energy";
	} else if (upgrade.uses == 0) {
		upgradebutton.innerHTML = "Out of Uses!";
	} else {
		upgradebutton.innerHTML = upgrade.cost + " Energy" + " (" + upgrade.uses + ")";
	}

	document.getElementById("upgrades-container").appendChild(upgradediv);
	document.getElementById("upgradeid"+lol2).appendChild(upgradename);
	document.getElementById("upgradeid"+lol2).appendChild(upgradedesc);
	document.getElementById("upgradeid"+lol2).appendChild(upgradebutton);
	upgradebutton.onclick = function(){upgrade.effect()};
}

function updateUpgrades(upgradenum) { // this is not a good function
 	var upgradebutton = document.getElementById("upgradebutton" + upgradenum);
 	var upgrade = upgrades[upgradenum-1];
 	if (upgrade.cost == 0) {
		upgradebutton.innerHTML = "Free" + " (" + upgrade.uses + ")";
	} else if (upgrade.uses == -1) {
		upgradebutton.innerHTML = upgrade.cost + " Energy";
	} else if (upgrade.uses == 0) {
		upgradebutton.innerHTML = "Out of Uses!";
	} else {
		upgradebutton.innerHTML = upgrade.cost + " Energy" + " (" + upgrade.uses + ")";
	}
}
