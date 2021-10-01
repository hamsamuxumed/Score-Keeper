const p1Score = document.querySelector('#p1Score')
const p2Score = document.querySelector('#p2Score')
const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
let p1Count = 0;
let p2Count = 0;
let winningScore = 5;

p1btn.addEventListener('click', () => {
    if (p1Count !== winningScore) {
        p1Score.textContent = p1Count += 1
    }
})

p2btn.addEventListener('click', () => {
    if (p2Count !== winningScore) {
        p2Score.textContent = p2Count += 1
    }
})