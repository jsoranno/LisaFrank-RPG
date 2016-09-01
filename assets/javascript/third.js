// VARIABLES
// ==========================================================================
var battle = {
	
	houses: {
		stark: {name: "stark", hp: 500, ap: 35, cap: 50},
		baratheon: {name: "baratheon", hp: 450, ap: 70, cap: 25},
		targaryan: {name: "targaryan", hp: 475, ap: 50, cap: 15},
		baratheonandon: {name: "baratheonandon", hp: 470, ap:40, cap:40},
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
		//add this house to the deadHouses array so we can't use it again until game is reset
	} //end if mainHouse
	else if (this.house != null && this.opponent === null){
		this.opponent = (houseClicked);
		console.log(this.opponent); //test who opponent is
		this.counterHP = this.houses[this.opponent].hp;
		console.log(this.counterHP); //test what counter HP is
		this.counterAP = this.houses[this.opponent].cap;
		console.log(this.counterAP);
		this.vsHouse = true; 
		console.log(this.vsHouse); //test if vsHouse is true
		//add this house to the deadHouses array
		//add this house to the deadHouses array so we can't use it again until game is reset
	} //end else if
}, //end chooseHouse

fight: function(){
	if (this.house != "" && this.opponent != "" && this.counterHP > 0 && this.houseHP > 0) {
			this.counterHP = Math.max(0, this.counterHP - this.houseAP);
			console.log("Let's fight")
			
			} //end if
	else if(this.counterHP == 0) {
			this.houseAP = Math.max(0, this.houseAP - this.counterAP);
			console.log("You won! Choose your next opponent!");
			} //end else if
	//else if more opponents are left and houseHP is >0, choose next opponent
	//else if houseHP == 0 and there are more opponents, you lost
	else if (this.houseHP == 0) {
			console.log("You lost.");				
			} //end else if
} //end fight 

}; // end battle
// FUNCTION CALLS
	// ==============================================================================	
$('.house').on('click', function(){
	console.log("You chose " + $(this).data("name")); //test what was clicked
	battle.chooseHouse($(this).data("name"));
	$("battle").animate({top:"-=400px"}, "normal"); //why won't you move up you silly pictures?
});
$('.fight').on('click', function(){
	console.log("You clicked attack!");
	battle.fight();
});
