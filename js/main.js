const gameComponents = document.querySelectorAll('#game-component')

gameComponents.forEach(function(component) {
    component.addEventListener('click',componentClicked)
})

function componentClicked(event) {
    console.log(event.target.innerHTML + ' clicked')
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
}