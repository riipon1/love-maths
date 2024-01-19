
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        this.addEventListener("click", function() {
            if (this.getattribute("data-type") === "submit") {
                checkAnswer();
            } else { 
                let gameType = this.getAttribute("data-type");  
                runGame(gameType);

                
            }

        })  
    }

    runGame ("Addition")


})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame (gameType) {
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "Addition") {
    displayAdditionQuestion(num1, num2);
} else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;

}


} 



function checkAnswer() {
    

}

/**
 * Gets the operands (The numbers) and the operator (plus, minus etc)
 * directly from the DOm, and returns the correcxt answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert (`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+"; 

}

function displaySubtractQuestion() {

}

function DisplayMultiplyQuestion() {

}
