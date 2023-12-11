let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//Mijn interacties

// rotate 'click'

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', rotate)

function rotate() {
  frontend.classList.toggle('rotate')
}

