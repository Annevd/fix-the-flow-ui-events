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

// background 'click'

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', background)

function background() {
  design.classList.toggle('background')
}

// rainbow 'click'

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', rainbow)

function rainbow() {
  and.classList.toggle('rainbow')
}

// shake 'dblclick'

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('dblclick', shake)

function shake() {
  development.classList.toggle('shake')
}

// flip 'keydown'

let sprint = document.querySelector('a:nth-of-type(5)')

document.addEventListener('keydown', flip) // document omdat het over een toetsenbord gaat

function flip(e) { // e staat voor event
  if(e.key == "a"){ // als de key gelijk is aan 'a', doe dan dit:
    console.log("we hebben een "+e.key) // om te testen
    sprint.classList.toggle('flip') // toggle de .flip class
  }
}