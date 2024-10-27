const counter = document.getElementById('counter')
const btnIncrease = document.getElementById('increase')
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')


btnIncrease.addEventListener('click', () => counter.innerText = +counter.innerText + 1)

btnDecrease.addEventListener('click', () => counter.innerText = counter.innerText > 0 ? +counter.innerText - 1 : 0)

btnReset.addEventListener('click', () => counter.innerText = 0)