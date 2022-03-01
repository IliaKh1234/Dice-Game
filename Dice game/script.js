let player1Score = 0
let player2Score = 0
let player1Turn = true
const container = document.querySelector(".container")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const player1Name = document.getElementById("player1Input")
const player2Name = document.getElementById("player2Input")
const submit = document.getElementById("submit")
const names = document.querySelector(".names")

container.style.display = "none"

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
function reset(){
    message.textContent = `${player1Name.value}'s Turn`
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    player1Dice.classList.remove("winner");
    player1Dice.classList.remove("loser")
    player2Dice.classList.remove("winner");
    player2Dice.classList.remove("loser")
}

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = `${player2Name.value}'s Turn`
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `${player1Name.value}'s Turn`
    }
    
    if (player1Score >= 20) {
        message.textContent = `${player1Name.value} has Won 🥳`
        showResetButton()
        player1Dice.classList.add("winner")
        player2Dice.classList.add("loser")
    }  else if (player2Score >= 20) {
        message.textContent = `${player2Name.value} has Won 🎉`
        showResetButton()
    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function(){
    reset()
})
submit.addEventListener("click", function(){
    if(player1Name.value === "" || player2Name.value == ""){
        alert("Something is wrong")
        player1Name.value = ""
        player2Name.value = ""
    }else{
        container.style.display = "block"
        names.style.display = "none"
        message.textContent = `${player1Name.value}'s Turn`
    }
})

