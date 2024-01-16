
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        this.addEventListener("click", function() {
            if (this.getattribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else { 
                let gameType = this.getattribute("data-type");
                alert (`You clicked ${gameType}`);
            }

        })  
    }


})


function runGame () {


}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function DisplayMultiplyQuestion() {

}
