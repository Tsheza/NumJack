// javascript
let rightGuess = document.getElementById("right-guess")
let wrongGuess = document.getElementById("wrong-guess")
let guessList = []
let guessDisplay = document.getElementById("guess-list")
let randNum = Math.floor(Math.random() * 100) + 1 

function guessGame(){ 
    let inputValue = document.getElementById("input-value")
    let guess = parseInt(inputValue.value)
    inputValue.value = ""
    if (isNaN(guess) || guess > 100 || guess < 1){
        wrongGuess.textContent = "Please input a number between 1 and 100!"
        wrongGuess.style.display = "block"
        setTimeout(function() {
        wrongGuess.style.display = "none";
        }, 1000);
    } else if (guessList.includes(guess)){
        wrongGuess.textContent = "Please input a different number!"
        wrongGuess.style.display = "block"
        setTimeout(function() {
        wrongGuess.style.display = "none";
        }, 1000);        
    } else if (guess < randNum){
        guessList.push(guess)
        guessDisplay.innerHTML = `<strong>Your Guesses:</strong> ${guessList.join(", ")}`
        wrongGuess.textContent = "Your guess is low..."
        wrongGuess.style.display = "block"
        setTimeout(function() {
        wrongGuess.style.display = "none";
        }, 1000);
    } else if (guess > randNum){
        guessList.push(guess)
        guessDisplay.innerHTML = `<strong>Your Guesses:</strong> ${guessList.join(", ")}`
        wrongGuess.textContent = "Your guess is high..."
        wrongGuess.style.display = "block"
        setTimeout(function() {
        wrongGuess.style.display = "none";
        }, 1000);
    } else {
        guessList.push(guess)
        rightGuess.textContent = `The answer is ${randNum}. You got it right!!`
        rightGuess.style.display = "block"
    }
    
}
