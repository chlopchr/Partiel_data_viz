const counter = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const moinsButton = document.getElementById('moins');
const resetButton = document.getElementById('reset');

let count = 0;

function updateCounter() {
    counter.textContent = count;
}


plusButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

moinsButton.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});


updateCounter();