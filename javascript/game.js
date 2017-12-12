//varaible declarations
var goal =  Math.floor(Math.random() * 82)+19;
var score = 0;
var wins = 0;
var losses = 0;
var rubyValue = 0;
var sapphireValue = 0;
var amethystValue = 0;
var emeraldValue = 0;




//function declarations
function updateCurrentGoal(){
	goal =  Math.floor(Math.random() * 82)+19;
	$("#currentGoal").html(goal);
	// console.log("goal: " + goal);
}

function resetGame(){
	score = 0;
	$("#currentScore").html(score);
	// console.log("reset score: " + score);

	updateCurrentGoal();


	//resets gem values and ensures they are different numbers
	rubyValue = Math.floor(Math.random() * 12) + 1;
	// console.log("ruby value: " + rubyValue);

	sapphireValue = Math.floor(Math.random() * 12) + 1;
	while(rubyValue === sapphireValue){
		sapphireValue = Math.floor(Math.random() * 12) + 1;
	}
	// console.log("sapphire value: " + sapphireValue);

	amethystValue = Math.floor(Math.random() * 12) + 1;
	while(rubyValue === amethystValue || sapphireValue === amethystValue){
		amethystValue = Math.floor(Math.random() * 12) + 1;
	}
	// console.log("amethyst value: " + amethystValue);

	emeraldValue = Math.floor(Math.random() * 12) + 1;
	while(rubyValue === emeraldValue || sapphireValue === emeraldValue || amethystValue === emeraldValue){
		emeraldValue = Math.floor(Math.random() * 12) + 1;
	}
	// console.log("emerald value: " + emeraldValue);
}

function updateWins(){
	wins++;
	$("#wins").html(wins);
	// console.log("wins: " + wins);
}

function updateLosses(){
	losses++;
	$("#losses").html(losses);
	// console.log("losses: " + losses);
}

function gameStatus(){
	if(goal > score){
		// console.log("game continues");
	} else if(goal == score){
		// console.log("game won");
		updateWins();
		resetGame();
	} else{
		// console.log("game lost");
		updateLosses();
		resetGame();
	}
}

function updateScore(gemValue){
	score += gemValue;
	$("#currentScore").html(score);
	gameStatus();
}



//on click events
$("#ruby").on("click", function(){
	updateScore(rubyValue);
});

$("#sapphire").on("click", function(){
	updateScore(sapphireValue);
});

$("#amethyst").on("click", function(){
	updateScore(amethystValue);
});

$("#emerald").on("click", function(){
	updateScore(emeraldValue);
});



//game initialization
resetGame();
$("#wins").html(wins);
$("#losses").html(losses);

