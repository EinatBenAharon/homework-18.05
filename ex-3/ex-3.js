
function ballGameWinner() {
    const player1Name = document.querySelector("#player1_name")
    const player2Name = document.querySelector("#player2_name")
    const player1Score = parseInt(document.querySelector("#player1_score").value)
    const player2Score = parseInt(document.querySelector("#player2_score").value)
    if (player1Score > player2Score) {
        document.querySelector("#span_winPlayer").innerHTML = `The winner is ${player1Name.value} with ${player1Score} points!`
    } else if (player1Score === player2Score) {
        document.querySelector("#span_winPlayer").innerHTML = `The game ended in a draw, with ${player1Score} points for each. Try another time.`
    } else {
        document.querySelector("#span_winPlayer").innerHTML = `The winner is ${player2Name.value}  with ${player2Score} points!`
    }
}