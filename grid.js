// The Grid is made up of 9 boxes.
// Each Grid can have a color which does things.

// White = Normal. Does nothing.
// Blue = Energy Maker. Makes 1 Energy.
// Green = Steel Maker. Makes 2 Steel.
// Orange = For every Energy Maker touching, the energy output will be multipled by 20%
var lol22 = 0;
function selectBox(numid, id) {
	numid1 = numid-1;
	var selectedBox = grid[numid1];
	document.getElementById("selectboxtext").innerHTML = "You have selected box " + numid;
	console.log(lol22);
	if (lol22 % 2 == 0) {
		document.getElementById(numid).style.background = "blue";
		grid[id-1] = "blue";
	} else { //if (lol22 % 2 == 1) {
		document.getElementById(numid).style.background = "green";
		grid[id-1] = "green";
	// } else {
	// 	document.getElementById(numid).style.background = "orange";
	// 	grid[id-1] = "orange";
	}
	console.log(numid);
	console.log(id);
	console.log(selectedBox);
	gridtick();
	lol22++;
}

function gridtick() {
	var e = 0; // energy var
	var s = 0; // steel var
	var multi = 1; // multiply var
	for (var i = 0; i < grid.length; i++) {
		if (grid[i] == "blue") {
			e++;
		}
		if (grid[i] == "green") {
			s++;
		}
		// if (grid[i] == "orange") {
		// 	for (var o = 2; o < 9; o+=2) {
		// 		if (grid[o] == "blue") {
		// 			multi*=1.20;
		// 		}
		// 	}
		// } yeah.. this doesn't work.
	}
	energy.persec = e*multi;
	steel.persec = s;
	console.log(multi);
}
