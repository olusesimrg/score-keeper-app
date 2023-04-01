
	//using query selector to get element from html page
	//and saving each element inside variable.
	var p1Button = document.querySelector("#p1");
	var p2Button = document.getElementById("p2");
	var resetButton = document.querySelector("#reset");
	var p1Display = document.querySelector("#player1-display");
	var p2Display = document.querySelector("#player2-display");
	var overDisplay = document.querySelector("p");
	var numInput = document.querySelector("input");
	var targetValue = document.querySelector("p span");
	var p1Score = 0;
	var p2Score = 0;
	var gameOver = false;
	var winningScore = 10;

// player one button code

	p1Button.addEventListener("click", function(){
		if (!gameOver){
		// incresing player one point on click if game not over
		p1Score++;
		if (p1Score === winningScore){
		// once scores is exactly winning score then game over
		gameOver = true;
		// string display and css class
		overDisplay.textContent = "THE GAME IS OVER";
		overDisplay.classList.add("winner");
		p1Display.classList.add("winner");
		alert("Player one Won the Game");
	}
		// player one display point	
		p1Display.textContent = p1Score;
	}

	});

/*
function playerOne(){
		if (!gameOver){
		// incresing player one point on click if game not over
									p1Score++;
									if (p1Score === winningScore){
		// once scores is exactly winning score then game over
												gameOver = true;
		// string display and css class
												overDisplay.textContent = "THE GAME IS OVER";
												overDisplay.classList.add("winner");
												p1Display.classList.add("winner");
												alert("Player one Won the Game");
																								}
		// player one display point	
		p1Display.textContent = p1Score;
									}

	};
playerOne()
*/

		// player two button functions
  p2Button.addEventListener("click", function(){
  	if (!gameOver){
  		// incresing player two point on click if game not over
  		p2Score++;
  	 if (p2Score === winningScore){
  	 	// once score is exactly winning point then game over
  			gameOver = true;
  			// string display and css class
  			overDisplay.textContent = "THE GAME IS OVER";
  			overDisplay.classList.add("winner");
  			p2Display.classList.add("winner");
  			alert("Player two Won the Game");
  	}	
  	// player two display point board
  	   	p2Display.textContent = p2Score;
  	}		

  });
      // reset event listener
 	 resetButton.addEventListener("click", function(){
 	 	//calling the reset buttton function
    	reset();
  });
 	 //reset button function declare seperately.
 	 function reset(){
 	 	//every declared and manipulated variable set back to 0.
 	 	p1Score = 0;
    	p2Score = 0;
    	p1Display.textContent = 0;
    	p2Display.textContent = 0;
    	gameOver = false;
    	//removing the css class back to normal.
    	p1Display.classList.remove("winner");
    	p2Display.classList.remove("winner");
    	overDisplay.classList.remove("winner");
    	overDisplay.textContent = "Playing to: " + Number(numInput.value);
 	 }
 		// input event lisener code
 	numInput.addEventListener("change", function(){
 		//setting the input value to the score or playing to
 	targetValue.textContent = numInput.value;
 	//setting the input value to the winning score
 	winningScore = Number(numInput.value);
 	//reseting all the scoreboard why setting new value
 	reset();
 });

