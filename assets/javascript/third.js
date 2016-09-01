// VARIABLES
// ==========================================================================
var battle = {
	
	houses: {
		houseStark: {name: "stark", hp: 500, ap: 35, cap: 50},
		houseBar: {name: "baratheon", hp: 450, ap: 70, cap: 25},
		houseTar: {name: "targaryan", hp: 475, ap: 50, cap: 15},
		houseBar2: {name: "baratheonandon", hp: 470, ap:40, cap:40},
		}, //end of houses
	
	house: null,
	houseHP: 0,
	houseAP: 0,
	
	opponent: null,
	counterHP: 0,
	counterAP: 0,
	
	mainHouse: false,
	vsHouse: false,
	deadHouses:[],
	vsHouseLeft: true,


// FUNCTION DECLARATIONS
// ==============================================================================	 

chooseHouse: function(houseClicked){
	if (this.house === null) {
		this.house = (houseClicked);
		console.log(this.house); //test what main player
		this.houseHP = (this.houses[this.house]).hp; //how to take houseClicked and connect this to array?
		console.log(this.houseHP); //test what main player hp is
		this.houseAP = this.houses[this.house].ap;
		console.log(this.houseAP); //test what main player ap is
		this.mainHouse = true;
		console.log(this.mainHouse);
		//add this house to the deadHouses array
		//? battle.deadHouses.push(battle.houses.indexof;
	} //end if mainHouse
	else if (house != null && opponent === null){
		this.vsHouse = ($(this).data("name"));
		this.counterHP = this.houses[this.house].hp;
		this.counterHP = this.houses[this.house].cap;
		this.vsHouse = true;
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

}; // end battle
// FUNCTION CALLS
	// ==============================================================================	
$('.house').on('click', function(){
	console.log("You chose " + $(this).data("name")); //test what was clicked
	battle.chooseHouse($(this).data("name"));
});
