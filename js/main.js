// cached elements
const gameComponents = document.querySelectorAll('#game-component')

// global variables
let playerChoice = ''
let currentAnswer = 'bop-it'
let timerCountdown = 3000
let isGameOver = false
let remainingTime = 3000
let timerID = null


gameComponents.forEach(function(component) {
    component.addEventListener('click',componentClicked)
})

function componentClicked(event) {
    console.log(event.target.innerHTML + ' clicked')
    playerChoice = event.target.getAttribute('class')
    remainingTime = 3000
    clearInterval(timerID)
    if (playerChoice === currentAnswer) {
        timerID = setInterval(subtractTime,10)
        if (event.target.getAttribute('class') === 'bop-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'spin-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'flick-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'twist-it') {
            // make sound, do animation
        } else if (event.target.getAttribute('class') === 'pull-it') {
            // make sound, do animation
        }
    } else {
        clearInterval(timerID)
        console.log('wrong answer')
    }
}

function subtractTime () {
    remainingTime -= 10
    console.log(remainingTime)
    if (remainingTime === 0) {
        console.log('game over')
        isGameOver = true
        clearInterval(timerID)
    }
}
function startTime() {

}
