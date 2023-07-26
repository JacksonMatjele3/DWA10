import { onMount } from '@shoelace-style/shoelace';

const numberInput = document.getElementById('counterValue');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const resetButton = document.querySelector('.buton');
const resetDialog = document.getElementById('resetDialog');
const closeButton = document.getElementById('closeButton');

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

let counterValue = 0;

const updateCounter = (newValue) => {
    counterValue = newValue;
    numberInput.textContent = counterValue; // Use textContent to update the displayed value
    subtract.disabled = counterValue <= MIN_NUMBER;
    add.disabled = counterValue >= MAX_NUMBER;
};

const handleAdd = () => {
    if (counterValue < MAX_NUMBER) {
        updateCounter(counterValue + 1);
    }
};

const handleSubtract = () => {
    if (counterValue > MIN_NUMBER) {
        updateCounter(counterValue - 1);
    }
};

const handleReset = () => {
    updateCounter(0);
    resetDialog.open();
};

const handleCloseDialog = () => {
    resetDialog.close();
};

// Use 'click' event for the buttons
add.addEventListener('click', handleAdd);
subtract.addEventListener('click', handleSubtract);
resetButton.addEventListener('click', handleReset);
closeButton.addEventListener('click', handleCloseDialog);

// Add 'keydown' event for the buttons to support keyboard interaction (optional but recommended)
add.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        handleAdd();
    }
});

subtract.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        handleSubtract();
    }
});

updateCounter(counterValue);

