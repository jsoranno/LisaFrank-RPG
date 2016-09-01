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


// VARIABLES
// ==========================================================================
var winter = {

	houses: {
		houseStark: {hp: 500, ap: 35, cap: 50},
		houseBar: {hp: 450, ap: 70, cap: 25},
		houseTar: {hp: 475, ap: 50, cap: 15}
	}, //end houses
	house: " ",
	houseHP: 0,
	houseAP: 0,
	counterAP: 0,
	vsHouse: false,
	vsHouseLeft: true,
	mainPlayer: false
}; //end winter	

// FUNCTION DECLARATIONS
// ==============================================================================	 
	// player choses House
function houseChoice(e){
	e.empty();
}; // end houseChoice

function userChooses(){
if ($(this).hasClass("stark") && $(this).mainPlayer("false")) {
		console.log("Main player is Stark");
		this.setAttribute("class", "player1");
		$("stark").html("<h3> 'Player 1 ATTACK' </h3>");
		$("h2").html("<h2> Will House Stark win the iron throne? </h2>");
		$("#player1").replaceWith($(".stark"));
		this.mainPlayer = true;
		console.log("User chose" + mainPlayer);
	}//end stark
else if($(this).hasClass("baratheon") && $(this).mainPlayer("false")){
		console.log("Main player is Baratheon");
		this.setAttribute("class", "player1");
		$("baratheon").html("<h3> 'Player 1 ATTACK' </h3>");
		$("h2").html("<h2> Will House Baratheon win the iron throne? </h2>");
		$("#player1").replaceWith($(".baratheon"));
		this.mainPlayer = true;
		console.log("User chose " + mainPlayer);
	}//end baratheon
else if($(this).hasClass("targaryan") && $(this).mainPlayer("false")){
		console.log("Main player is Targaryan");
		this.setAttribute("class", "player1");
		$("targaryan").html("<h3> 'Player 1 ATTACK' </h3>");
		$("h2").html("<h2> Will House Targaryan win the iron throne? </h2>");
		$("#player1").replaceWith($(".targaryan"));
		this.mainPlayer = true;
		console.log("User chose " + mainPlayer);		
	}//end targaryan
		// how to move one div to another div when clicked
		//boolean is player 1 chosen? is
		//set to be true
		// swal({   
		// 	title: "Choose your opponent",   
		// 	text: "Choose your opponent.",         
		// 	confirmButtonColor: "#cc00ff",     
		// 	closeOnConfirm: false });
},//end of userChooses
				//if opponent is baratheon - then 
					// .fadeOutDown targaryan
					// show HP fade with each click of attack button
					// Would it be better to have the user click a character, change the button to say Player 1 then immediately pick the oppenent and say Opponent, then click a Fight button? How to measure health after each attack?
		// if ($(this).hasClass("baratheon")) {
		// 		console.log("Main player is Baratheon");
		// 		this.setAttribute('class', 'player1');
		// 		$('baratheon').html("<h3> 'Player 1 ATTACK' </h3>");
		// 		$('h2').html("<h2> 'Will House Baratheon win the iron throne?' </h2>");
		// 		 	closeOnConfirm: false });
		// 	}; //end of baratheon
		//  if ($(this).hasClass("targaryan")) {
		//  		console.log("Main player is Targaryan");
		//  		this.setAttribute('class', 'player1');
		//  		$('targaryan').html("<h3> 'Player 1 ATTACK' </h3>");
		//  		$('h2').html("<h2> 'Will House Targaryan win the iron throne?' </h2>");
		// 		 swal({   
		// 		 	title: "Choose your opponent",   
		// 		 	text: "Choose your opponent.",         
		// 		 	confirmButtonColor: "#cc00ff",     
		// 		 	closeOnConfirm: false });
			// }; //end of targaryan	
}; //end userChooses	


// FUNCTION CALLS
	// ==============================================================================	

$(document).ready(function(){
	$(".stark").on("click", function() {
		console.log("TEST");
		}); // end on click
				// TO RELOAD GAME: 
				// function(){  
				// location.reload();}
});//end document ready