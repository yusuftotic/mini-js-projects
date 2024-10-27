const counter = document.getElementById('counter')
const btnIncrease = document.getElementById('increase')
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')

// Increase
btnIncrease.addEventListener('click', () => counter.innerText = +counter.innerText + 1)

// Decrease
btnDecrease.addEventListener('click', () => counter.innerText = Math.max(0, +counter.innerText - 1))

// Reset
btnReset.addEventListener('click', () => counter.innerText = 0)