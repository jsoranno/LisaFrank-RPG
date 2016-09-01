// VARIABLES
// ==========================================================================
var battle = {
	
	houses: {
		houseStark: {name: "Stark", hp: 500, ap: 35, cap: 50},
		houseBar: {name: "Baratheon", hp: 450, ap: 70, cap: 25},
		houseTar: {name: "Targaryan", hp: 475, ap: 50, cap: 15},
		houseBar2: {name: "Baratheonandon", hp: 470, ap:40, cap:40},
		}, //end of houses
	
	house: "",
	houseHP: 0,
	houseAP: 0,
	
	opponent: "",
	counterHP: 0,
	counterAP: 0,
	
	mainHouse: false,
	vsHouse: false,
	deadHouses:[],
	vsHouseLeft: true,


// FUNCTION DECLARATIONS
// ==============================================================================	 

chooseHouse: function(){
	if (mainHouse == false) {
		this.house = MH;
		this.houseHP = this.houses[this.house].hp;
		this.houseAP = this.houses[this.house].ap;
		mainHouse = true;
		//add this house to the deadHouses array
		//? battle.deadHouses.push(battle.houses.indexof;
	} //end if mainHouse
	else if (vsHouse == false && mainHouse == true){
		this.vsHouse = VH;
		this.counterHP = this.houses[this.house].hp;
		this.counterHP = this.houses[this.house].cap;
		vsHouse = true;
		//add this house to the deadHouses array
		//? battle.deadHouses.push(battle.houses.indexof;
	} //end else if
}, //end chooseHouse

fight: function(){
	if (this.house != "" && this.opponent != "" && this.counterHP > 0 && this.houseAP > 0) {
			this.counterHP = Math.max(0, this.counterHP - this.houseAP);
			} //end if
	else if(this.counterhp == 0) {
				this.houseAP = Math.max(0, this.houseAP - this.counterAP);
			} //end else if
	//else if more opponents are left and houseHP is >0, choose next opponent
	//else if houseHP == 0 and there are more opponents, you lost
	else if (this.deadHouses.length > 3) {
				alert("You win!");				
			} //end else if
} //end fight 

} // end battle
// FUNCTION CALLS
	// ==============================================================================	
