let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//Mijn interacties

// rotate 'click'

let frontend = document.querySelector('a:nth-of-type(1)') //hiermee selecteer ik de eerste link en voeg hem toe aan een variabele

frontend.addEventListener('click', rotate) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval één muisklik en geef ik de opkomende functie een naam

function rotate() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  frontend.classList.toggle('rotate') //dit toggled de class .rotate in de CSS
}

// background 'click'

let design = document.querySelector('a:nth-of-type(2)') //hiermee selecteer ik de tweede link en voeg hem toe aan een variabele

design.addEventListener('click', background) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval één muisklik en geef ik de opkomende functie een naam

function background() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  design.classList.toggle('background') //dit toggled de class .background in de CSS
}

// rainbow 'click'

let and = document.querySelector('a:nth-of-type(3)') //hiermee selecteer ik de derde link en voeg hem toe aan een variabele

and.addEventListener('click', rainbow) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval één muisklik en geef ik de opkomende functie een naam

function rainbow() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  and.classList.toggle('rainbow') //dit toggled de class .rainbow in de CSS
}

// shake 'dblclick'

let development = document.querySelector('a:nth-of-type(4)') //hiermee selecteer ik de vierde link en voeg hem toe aan een variabele

development.addEventListener('dblclick', shake) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval een dubbele muisklik en geef ik de opkomende functie een naam

function shake() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  development.classList.toggle('shake') //dit toggled de class .shake in de CSS
}

// flip 'keydown'

let sprint = document.querySelector('a:nth-of-type(5)') //hiermee selecteer ik de vijfde link en voeg hem toe aan een variabele

document.addEventListener('keydown', flip) //document.addEventListener omdat je het toetsenbord wil kunnen klikken in het gehele document, niet alleen in een knop

function flip(e) { // e staat voor event, ook hier roep je de functie aan en zeg je eronder wat de functie moet doen
  if(e.key == "a") { // als de toets gelijk is aan 'a', doe dan dit:
    console.log("we hebben een "+e.key) // om te testen
    sprint.classList.toggle('flip') // dit toggled de .flip class in de CSS
  }
}

// blur 'mouseover'

let fix = document.querySelector('a:nth-of-type(6)') //hiermee selecteer ik de zesde link en voeg hem toe aan een variabele

fix.addEventListener('mouseover', blur) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval een hover met de muis en geef ik de opkomende functie een naam

function blur() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  fix.classList.toggle('blur') //dit toggled de class .blur in de CSS
}

// scale 'mousover'

let the = document.querySelector('a:nth-of-type(7)') //hiermee selecteer ik de zevende link en voeg hem toe aan een variabele

the.addEventListener('mouseover', scale) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval een hover met de muis en geef ik de opkomende functie een naam

function scale() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  the.classList.toggle('scale') //dit toggled de class .scale in de CSS
}

// flicker 'dblclick'

let flow = document.querySelector('a:nth-of-type(8)') //hiermee selecteer ik de achtste link en voeg hem toe aan een variabele

flow.addEventListener('dblclick', flicker) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval een dubbele muisklik en geef ik de opkomende functie een naam

function flicker() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  flow.classList.toggle('flicker') //dit toggled de class .flicker in de CSS
}

// negative 'keydown'

let user = document.querySelector('a:nth-of-type(9)') //hiermee selecteer ik de negende link en voeg hem toe aan een variabele

document.addEventListener('keydown', negative) //document.addEventListener omdat je het toetsenbord wil kunnen klikken in het gehele document, niet alleen in een knop

function negative(e) { // e staat voor event, ook hier roep je de functie aan en zeg je eronder wat de functie moet doen
  if(e.key == "n") { // als de key gelijk is aan 'n', doe dan dit:
    console.log("we hebben een "+e.key) // om te testen
    user.classList.toggle('negative') // dit toggled de .negative class
  }
}

// turn 'mouseover'

let interface = document.querySelector('a:nth-of-type(10)') //hiermee selecteer ik de tiende link en voeg hem toe aan een variabele

interface.addEventListener('mouseover', turn) //d.m.v addEventListener wordt er geluisterd naar een event, in dit geval een hover met de muis en geef ik de opkomende functie een naam

function turn() { //vervolgens zeg ik hier wat de functie die ik in de vorige regel heb benoemd moet doen
  interface.classList.toggle('turn') //dit toggled de class .turn in de CSS
}