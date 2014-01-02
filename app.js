$(document).ready(function(){
	var randValue = randomNumGen();
	var userGuess;
	var guessCount = 1;
	var prev_Guess;
	
	//alert(randValue);
	
	$('#submitButton').click(function(){
		userGuess = $('#guess').val();
		
		if(guessCount == 1){
			InitCompareDisplayResult(randValue, userGuess);
		}
		else{
			ConsecutiveCompareDisplayResult(randValue, userGuess);
		}
		
		guessCount++;
	});
	
	function InitCompareDisplayResult(actual, expected){
		
		if(expected % 1 != 0){
			ResultMessage('Invalid non-integer input, please enter an integer between 0 - 100', 'black', 5, 2000);
		}
		else if(expected != null && (expected < 100 && expected > 0)){
			if(expected == actual){
				ResultMessage('CORRECT!!! You have guessed in ' + guessCount + ' attempt(s)', 'green', 5, 3000);
				setTimeout(function() {PromptAnotherGame();}, 5000);
			}
			else if(expected > actual){
				ResultMessage('TOO HIGH!!!', 'red', 5, 200);
				prev_Guess = expected;
			}
			else if (expected < actual){
				ResultMessage('TOO LOW!!!', 'navy', 5, 200);
				prev_Guess = expected;
			}
		}
		else{
			ResultMessage('Invalid value input, please enter an integer between 0 - 100', 'black', 5, 2000);
		}
	};
	
	function ConsecutiveCompareDisplayResult(actual, expected){
		if(expected % 1 != 0){
			ResultMessage('Invalid non-integer input, please enter an integer between 0 - 100', 'black', 5, 2000);
		}
		else if(expected != null && (expected < 100 && expected > 0)){
			if(prev_Guess != null && prev_Guess == expected){
				ResultMessage('same number was entered consecutively...', 'brown', 5, 200);
				prev_Guess = expected;
			}
			else if(expected == actual){
				ResultMessage('CORRECT!!! You have guessed in ' + guessCount + ' attempt(s)', 'green', 5, 3000);
				setTimeout(function() {PromptAnotherGame();}, 5000);
			}
			else if(Math.abs(prev_Guess - actual) > Math.abs(expected - actual)){
				ResultMessage('warmer...', 'magenta', 5, 200);
				prev_Guess = expected;
			}
			else if (Math.abs(prev_Guess - actual) < Math.abs(expected - actual)){
				ResultMessage('colder...', 'blue', 5, 200);
				prev_Guess = expected;
			}
		}
		else{
			ResultMessage('Invalid value input, please enter an integer between 0 - 100', 'black', 5, 2000);
		}
	};
	
	function randomNumGen(){
		return Math.floor(Math.random()*100);
	};
	
	function PromptAnotherGame(){
		var userAnswer = prompt('another game? Y/N');
		
		if(userAnswer.toLowerCase() == 'y'){
			guessCount = 0;
			randValue = randomNumGen();
			ResultMessage('<b>Let\'s Start Another Game!</b>', 'black', 0, 0);
		}
		else if(userAnswer.toLowerCase() == 'n'){
			$('input').prop("disabled",true);
			ResultMessage('<b>Game Complete, please exit your browser or refresh to start over</b>', 'black', 0, 0);
		}
	};
	
	function ResultMessage(message, color, occurance, interval){
		$('#results').html(message).css({color:color}).effect("pulsate", {times:occurance}, interval);
	};
});
