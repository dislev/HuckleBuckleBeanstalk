$(document).ready(function(){
	var randValue = Math.floor(Math.random()*100);
	var userGuess;
	var guessCount = 0;
	var prev_diff;
	
	$('#results h1:nth-child(1)').hide();
	$('#results h1:nth-child(2)').hide();
	$('#results h1:nth-child(3)').hide();
	$('#results h1:nth-child(4)').hide();
	$('#results h1:nth-child(5)').hide();
	
	
	alert(randValue);
	
	$('#submitButton').click(function(){
		guessCount++;
		userGuess = $('#guess').val();
		alert(userGuess);
		InitCompare(randValue, userGuess);
	});
	
	function InitCompare(actual, expected){
		//var absoluteValue = abs(actual-expected);
		//var displayText;
		
		if(actual == expected){
			$('#results h1:nth-child(5)').show();
			setTimeout(function(){
				$('#results h1:nth-child(5)').fadeOut();},3500);
		}
		else if(actual > expected){
			$('#results h1:nth-child(1)').show();
			setTimeout(function(){
				$('#results h1:nth-child(1)').fadeOut();},3500);
		}
		else{
			$('#results h1:nth-child(2)').show();
			setTimeout(function(){
				$('#results h1:nth-child(2)').fadeOut();},3500);
		}
	};
	
});
