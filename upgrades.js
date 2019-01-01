var upgrades = [];

var upgrade1 = { // Consider this as an example upgrade.
	id: "upgradeButton0", // ID.
	name: "Red and Blue", // Name, or Title
	description: "Changes the Grid color to red or blue.", // Description
	cost: 0, // How much it costs
	uses: 20, // 20 Uses
	effect: function() { // The effect the upgrade will do. In this case, it will make the grid color red or blue
		if (energy.count >= this.cost && this.uses != 0) { // In this case, the player needs 0 energy to buy the upgrade.
			this.uses--;
			color(); // Function to change the color (red or blue)
			updateUpgrades(1);
		}
	}
}

upgrades.push(upgrade1);

var upgrade2 = { // Consider this as another example upgrade.
	id: "upgradeButton1", // ID.
	name: "Energy Maker", // Name, or Title
	description: "Makes +1 Energy, but gets a x2 boost if it is touching another Energy Maker.", // Description
	cost: 0, // How much it costs
	uses: 1, // -1 is Infinite 
	effect: function() { // The effect the upgrade will do. In this case, it will make the grid color red or blue
		if (energy.count >= this.cost) { // In this case, the player needs 0 energy to buy the upgrade.
			console.log("Baldi's Basics"); // Function to change the color (red or blue)
		}
	}
}

upgrades.push(upgrade2);

console.log(upgrades);
