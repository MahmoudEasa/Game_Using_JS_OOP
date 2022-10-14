function UIElements(name) {
	this.attackBtn = document.querySelector(`#${name}-attack`);
	this.healthBtn = document.querySelector(`#${name}-make-health`);
	this.healthProgress = document.querySelector(`.${name}-health`);
	this.actions = document.querySelector(`#${name}-action`);
}

function Character(name, strength, health) {
	this.name = name;
	this.strength = strength;
	this.health = health;
	this.elements = new UIElements(this.name);
}

Character.prototype.makeAttackBtn = function (opponent) {
	this.elements.attackBtn.addEventListener("click", () => {
		this.attack(opponent);
	});
};

Character.prototype.makeHealthBtn = function () {
	this.elements.healthBtn.addEventListener("click", () => {
		this.makeHealth();
	});
};

Character.prototype.attack = function (opponent) {
	if (opponent.health >= 10) {
		opponent.health -= this.strength;
	}
	opponent.elements.healthProgress.style.width = `${opponent.health}%`;
	if (opponent.health <= 0) {
		opponent.elements.actions.innerHTML = `${opponent.name} is died`;
	}
};

Character.prototype.makeHealth = function () {
	if (this.health < 100) {
		this.health += this.strength;
	}
	if (this.health > 100) {
		this.health = 100;
	}
	this.elements.healthProgress.style.width = `${this.health}%`;
};

Character.prototype.status = function () {
	return {
		name: this.name,
		strength: this.strength,
		health: this.health,
	};
};

const nartoo = new Character("nartoo", 10, 100);
const sasakii = new Character("sasakii", 10, 100);

nartoo.makeAttackBtn(sasakii);
sasakii.makeAttackBtn(nartoo);
nartoo.makeHealthBtn();
sasakii.makeHealthBtn();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
    const actionLeft = document.querySelector(".left .action");
    const actionRight = document.querySelector(".right .action");

    const progressLeft = document.querySelector(".left .progress");
    const progressRight = document.querySelector(".right .progress");
    const button = document.querySelectorAll("button");

    let leftWidthNum = 100;
    let rightWidthNum = 100;

    for (const btn of button) {
        btn.addEventListener("click", (e) => {
            if (e.target.id === "nartoo-attack") {
                if (rightWidthNum >= 10) {
                    rightWidthNum -= 10;
                }

                progressRight.style.width = `${rightWidthNum}%`;
            } else if (e.target.id === "nartoo-make-health") {
                if (leftWidthNum <= 90) {
                    leftWidthNum += 10;
                }

                progressLeft.style.width = `${leftWidthNum}%`;
            } else if (e.target.id === "sasakii-attack") {
                if (leftWidthNum >= 10) {
                    leftWidthNum -= 10;
                }

                progressLeft.style.width = `${leftWidthNum}%`;
            } else if (e.target.id === "sasakii-make-health") {
                if (rightWidthNum <= 90) {
                    rightWidthNum += 10;
                }

                progressRight.style.width = `${rightWidthNum}%`;
            }

            if (leftWidthNum <= 0) {
                actionLeft.innerHTML = "You Lost";
            }

            if (rightWidthNum <= 0) {
                actionRight.innerHTML = "You Lost";
            }
        });
    }
*/
