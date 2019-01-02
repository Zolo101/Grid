// The Grid is made up of 9 boxes.
// Each Grid can have a color which does things.

// White = Normal. Does nothing.
// Blue = Energy Maker. Makes 1 Energy.
// Green = Steel Maker. Makes 2 Steel.
// Orange = For every Energy Maker touching, the energy output will be multipled by 20%
var gmulti = 1; // global multi
var gnumid = 0; // global numid
var colors = ["lightskyblue","green","orange","grey","#f6f8f9"];
var colorname = ["Energy Maker","Steel Maker","Multiplier (only for grid 5)","Energized Steel (doesn't work)","Clear box"];

$(document).ready(function() {
	for (i = 0; i < colors.length; i++) {
		var colorbutton = document.createElement("button");
		colorbutton.id = "colorbutton" + i;
		colorbutton.innerHTML = colorname[i];
		colorbutton.style.background = colors[i];
		document.getElementById("boxcolorchange").appendChild(colorbutton);
		if (i == 0) {
			colorbutton.onclick = function(){colorBox(colors[0])};
		} else if (i == 1) {
			colorbutton.onclick = function(){colorBox(colors[1])};
		} else if (i == 2) {
			colorbutton.onclick = function(){colorBox(colors[2])};
		} else if (i == 3) {
			colorbutton.onclick = function(){colorBox(colors[3])};
		} else if (i == 4) {
			colorbutton.onclick = function(){colorBox(colors[4])};
		} else {
			colorbutton.onclick = function(){colorBox(colors[0])};
		}
	}
});

function selectBox(numid) {
	numid1 = numid-1;
	gnumid = numid;
	var selectedBox = grid[numid1];
	var gridbox = document.getElementById(numid);
	var boxstyle = gridbox.style;
	document.getElementById("selectboxtext").innerHTML = "You have selected box " + numid;
	boxstyle.background = "#EBFFFFFF";
	console.log(numid);
	console.log(selectedBox);
}

function resetGrid() {
	grid = ["white","white","white","white","white","white","white","white","white"];
	for (var i = 1; i < grid.length+1; i++) {
		document.getElementById(i).style.background = "#f6f8f9";
	}
	document.getElementById("selectboxtext").innerHTML = "You're not selecting any boxes";
}

function colorBox(color) {
	console.log(gnumid);
	grid[gnumid] = color;
	document.getElementById(gnumid).style.background = color;
	console.log(grid);
}

function gridtick() {
	var e = 0; // energy var
	var s = 0; // steel var
	var multi = 1; // multiply var
	var orange = false;
	for (var i = 0; i < grid.length; i++) {
		if (grid[i] == "lightskyblue") {
			e++;
		}
		if (grid[i] == "green") {
			s+=2;
		}
		if (grid[5] == "orange") {
			orange = "true";
			multi=2;
		}
	}
	if (orange == "true") {
		energy.persec = e*multi*gmulti;
		steel.persec = s*multi*gmulti;
	} else {
		energy.persec = e;
		steel.persec = s;
	}
	console.log(e);
	console.log(multi);
	console.log(gmulti);
}
