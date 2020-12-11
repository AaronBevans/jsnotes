// Create changeable variables for the game state
let playerOneScore = 0
let playerTwoScore = 0
let playerTurn = true


//button listens for a click event, then runs a function.
//player 1 variables
let message = document.getElementById('message')

let playerOneBrd = document.getElementById('player1Scoreboard')
let dice1 = document.getElementById('player1Dice')

//player 2 variables
let playerTwoBrd = document.getElementById('player2Scoreboard')
let dice2 = document.getElementById('player2Dice')


let rollBtn = document.querySelector('#rollBtn')//accessing the roll button on the page.


rollBtn.addEventListener('click', function(event){
    event.preventDefault()
    let randomNumber = Math.floor(Math.random() * 6) + 1

    if(playerTurn){
        dice1.textContent = randomNumber
        playerOneScore += randomNumber
        playerOneBrd.textContent = playerOneScore
        dice1.classList.remove('active')
        dice2.classList.add('active')
        message.textContent = 'Player 2'
        
    }else{
        dice2.textContent = randomNumber
        playerTwoScore += randomNumber
        playerTwoBrd.textContent = playerTwoScore
        dice2.classList.remove('active')
        dice1.classList.add('active')
        message.textContent = 'Player 1'
    }

//playerTurn value changes when the roll dice button is clicked.
    if(playerTurn){
        playerTurn = false
    }else{
        playerTurn = true
    }

    function showDisplayBtn(){
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    }

    if(playerOneScore >= 20){
        message.textContent = 'Player 1 Wins 🥳'
        showDisplayBtn()

    }else if(playerTwoScore >= 20){
        message.textContent = 'Player 2 Wins 🎉'
        showDisplayBtn()
    }
    
})


//function that resets the game.
function resetGame(){
    playerTurn = true
    playerOneScore = 0
    playerTwoScore = 0
    playerOneBrd.textContent = playerOneScore
    playerTwoBrd.textContent = playerTwoScore
    dice1.textContent = playerOneScore
    dice2.textContent = playerTwoScore
    message.textContent = 'Start'
}

//button/id event that calls the resetGame() function and resets the game.
let resetBtn = document.querySelector('#resetBtn')

resetBtn.addEventListener('click',  function(event){
    event.preventDefault()
    rollBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    resetGame()
})



