// File: 5-building.js

class Building {
    constructor(sqft) {
        if (this.constructor === Building) {
            throw new Error(
		    	"Building is an abstract class and cannot be instantiated directly."
	    );
        }
        this._sqft = sqft;
    }
    get sqft() {
        return this._sqft;
    }
    evacuationWarningMessage() {
        throw new Error(
			"Class extending Building must override evacuationWarningMessage."
	);
    }
}

class OfficeBuilding extends Building {
    constructor(sqft) {
        super(sqft);
    }
    evacuationWarningMessage() {
        return "Please evacuate the office building calmly and promptly.";
    }
}

const office = new OfficeBuilding(3000);
console.log(office.sqft);
console.log(office.evacuationWarningMessage());
