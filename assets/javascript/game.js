// set HP, AP, CAP to each house
// On click if then statements:
// Click picture of Main House
// change HTML to ask to choose opponent 
// Click picture of opponent
// fade out third option
// sweet click something to attack
// hp decrease with each attack, until death
// if main wins, replace opponent with third option
// if main loses, alert lost and reset
// if main wins again, alert wins, reset

$(document).ready(function(){

var starkPlay = {
	hp: 500,
	ap: 35,
	cap: 50
} //end starkPlay

var barPlay = {
	hp: 450,
	ap: 70,
	cap: 25
} //end barPlay

var tarPlay = {
	hp: 475,
	ap: 50,
	cap: 50
} //end tarPlay


	$('img').on("click", function() {

		
		if ($(this).hasClass("stark")) {
				console.log("stark");
		

		} //end if class stark		
	}) // end on click
}) //end document ready