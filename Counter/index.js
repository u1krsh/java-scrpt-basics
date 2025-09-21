const decreaseBtn = document.getElementById('DecreaseButton');
const increaseBtn = document.getElementById('IncreaseButton');
const resetBtn = document.getElementById('ResetButton');
const counter = document.getElementById('CountLabel');
let count = 0;

increaseBtn.onclick = function () {
    count++;
    counter.textContent= count;
}
decreaseBtn.onclick = function () {
    count--;
    counter.textContent= count;
}
resetBtn.onclick = function () {
    count = 0;
    counter.textContent= count;
}