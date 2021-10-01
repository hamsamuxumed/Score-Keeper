const p1Score = document.querySelector('#p1Score')
const p2Score = document.querySelector('#p2Score')
const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const reset = document.querySelector('#reset')
const playto = document.querySelector('#playto')
let p1Count = 0;
let p2Count = 0;
let winningScore = parseInt(playto.value)
let isGameover = false;

p1btn.addEventListener('click', () => {
    if (!isGameover) {
        p1Score.textContent = p1Count += 1;
        if (p1Count === winningScore) {
            isGameover = true
        }
        p1Score.textContent = p1Count
    }

})

p2btn.addEventListener('click', () => {
    if (!isGameover) {
        p2Score.textContent = p2Count += 1
        if (p2Count === winningScore) {
            isGameover = true
        }
        p2Score.textContent = p2Count
    }
})



function resetFunc() {
    isGameover = false;
    p1Count = 0;
    p2Count = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
}
reset.addEventListener('click', resetFunc)


playto.addEventListener('change', () => {
    winningScore = parseInt(playto.value);
    resetFunc()

})