var upgrades = [];

var upgrade1 = { // Consider this as an example upgrade.
	id: "upgradeButton0", // ID.
	name: "Unlock Multiplier", // Name, or Title
	description: "Unlocks the yellow color, the multiplier. Multiplies everything by x2", // Description
	cost: 40, // How much it costs
	uses: 1, // 20 Uses
	effect: function() { // The effect the upgrade will do. In this case, it will make the grid color red or blue
		if (energy.count >= this.cost && this.uses != 0) { // In this case, the player needs 0 energy to buy the upgrade.
			this.uses--;
			gmulti++;
			energy.count -= this.cost;
			updateUpgrades(1);
		}
	}
}

upgrades.push(upgrade1);

var upgrade2 = { // Consider this as another example upgrade.
	id: "upgradeButton1", // ID.
	name: "Multiply Multipler", // Name, or Title
	description: "Multiplies the Multipier by x2", // Description
	cost: 200, // How much it costs
	uses: 1,
	effect: function() { // Code
		if (energy.count >= this.cost && this.uses != 0) {
			this.uses--;
			energy.count -= this.cost;
			gmulti += 2;
			updateUpgrades(2);
		}
	}
}

upgrades.push(upgrade2);

var upgrade3 = { // Consider this as another example upgrade.
	id: "upgradeButton2", // ID.
	name: "Multiply The Multiplying Multipler", // Name, or Title
	description: "Multiplies the Multiplying Multipier by another x2", // Description
	cost: 1000, // How much it costs
	uses: 1,
	effect: function() { // Code
		if (energy.count >= this.cost && this.uses != 0) {
			this.uses--;
			energy.count -= this.cost;
			gmulti += 4;
			updateUpgrades(3);
		}
	}
}

upgrades.push(upgrade3);

var upgrade4 = { // Consider this as another example upgrade.
	id: "upgradeButton3", // ID.
	name: "Multiply The Multipler that Multiplies Multipliers", // Name, or Title
	description: "Multiplies the Multiplier that is Multiplying the Multipier by yet another x2", // Description
	cost: 2100, // How much it costs
	uses: 1,
	effect: function() { // Code
		if (energy.count >= this.cost && this.uses != 0) {
			this.uses--;
			energy.count -= this.cost;
			gmulti += 8;
			updateUpgrades(4);
		}
	}
}

upgrades.push(upgrade4);

var upgrade5 = { // Consider this as another example upgrade.
	id: "upgradeButton4", // ID.
	name: "Multipler that Multiplies the Multipier that Multiplies the Multipler", // Name, or Title
	description: "Multiplies the Multiplier that is Multiplying the Multiplying Multipier by ANOTHER x2", // Description
	cost: 4000, // How much it costs
	uses: 1,
	effect: function() { // Code
		if (energy.count >= this.cost && this.uses != 0) {
			this.uses--;
			energy.count -= this.cost;
			gmulti += 16;
			updateUpgrades(5);
		}
	}
}

upgrades.push(upgrade5);

console.log(upgrades);
