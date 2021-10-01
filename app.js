const p1Score = document.querySelector('#p1Score')
const p2Score = document.querySelector('#p2Score')
const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
let count = 0;

p1btn.addEventListener('click', () => {
    p1Score.textContent = count += 1
})