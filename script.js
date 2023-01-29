"use strict"
//**********************************************************************************

// Game secret number generates here 
let secretN = Math.floor(Math.random() * 20) + 1;
console.log(secretN);

let score = 20;
let highscore = 0;

// a function that display message for different scenario
let displayMsg = function(msg){
    document.querySelector('.message').textContent = msg;
}

// here we add eventListner method on .check class and the event is mouse 'click' and it performs the action that written in the anonymous function
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof (guess));

    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = "⭕ No number";
        displayMsg("⭕ No number");

        // when player wins
    } else if (guess == secretN) {
        document.querySelector('.number').textContent = secretN;
        // document.querySelector('.message').textContent = "🎉 Correct Number";
        displayMsg("🎉 Correct Number");
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.high-score').textContent = highscore;
        }

        // when guess is not equal to secret number
    } else if(guess != secretN){
        if (score > 1) {
            document.querySelector('.message').textContent = (guess > secretN) ? "📈 Too High" : "📉 Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            // document.querySelector('.message').textContent = "💥 You lost the Game!"
            displayMsg("💥 You lost the Game!");
        }
    }
    
    //*************************************************🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿***************************************************************** */
    // else if (guess > secretN) {
    //     document.querySelector('.message').textContent = "📈 Too High";
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = "💥 You lost the Game!"
    //     }

    //     // when guess is low than secret number
    // } else if (guess < secretN) {
    //     document.querySelector('.message').textContent = "📉 Too Low";
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('.message').textContent = "💥 You lost the Game!"
    //     }
    // }
    //******************************************************🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀***************************************************************** */
})

// resettiung the value when player cliks on Again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretN = Math.floor(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = "Start guessing...";
    displayMsg("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
})

