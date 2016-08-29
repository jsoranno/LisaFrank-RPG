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

// VARIABLES
// ==========================================================================
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

// GAME PLAY
	// ==============================================================================	
	$('img').on("click", function() {
		// player choses characater as player1
		if ($(this).hasClass("stark")) {
				console.log("Main player is Stark");
				this.setAttribute('class', 'player1');
				$('stark').html("<h3> 'Player 1 ATTACK' </h3>");
				$('h2').html("<h2> 'Who will win the iron throne?' </h2>");
				// swal({   
				// 	title: "Choose your opponent",   
				// 	text: "Choose your opponent.",         
				// 	confirmButtonColor: "#cc00ff",     
				// 	closeOnConfirm: false });
			};
				//if opponent is baratheon - then 
					// .fadeOutDown targaryan
					// show HP fade with each click of attack button
					// Would it be better to have the user click a character, change the button to say Player 1 then immediately pick the oppenent and say Opponent, then click a Fight button? How to measure health after each attack?
		if ($(this).hasClass("baratheon")) {
				console.log("Main player is Baratheon");
				this.setAttribute('class', 'player1');
				$('baratheon').html("<h3> 'Player 1 ATTACK' </h3>");
				$('h2').html("<h2> 'Who will win the iron throne?' </h2>");
				// swal({   
				// 	title: "Choose your opponent",   
				// 	text: "Choose your opponent.",         
				// 	confirmButtonColor: "#cc00ff",     
				// 	closeOnConfirm: false });
			};
		if ($(this).hasClass("targaryan")) {
				console.log("Main player is Targaryan");
				this.setAttribute('class', 'player1');
				$('targaryan').html("<h3> 'Player 1 ATTACK' </h3>");
				$('h2').html("<h2> 'Who will win the iron throne?' </h2>");
				// swal({   
				// 	title: "Choose your opponent",   
				// 	text: "Choose your opponent.",         
				// 	confirmButtonColor: "#cc00ff",     
				// 	closeOnConfirm: false });
			};		
		}); //end if Player 1	

	}); // end on click
				// TO RELOAD GAME: 
				// function(){  
				// location.reload();}
// }); //end document ready