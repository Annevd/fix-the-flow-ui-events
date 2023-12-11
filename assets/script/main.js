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

sprint.addEventListener('keydown', flip)

function flip(e) { //als je met je muis hovert over de knop en op 'e' klikt, flipt de knop
  if (e.keyCode === 69) {
    sprint.classList.toggle('flip')
  }
}