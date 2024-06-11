let numbers = []; // Ensure numbers array is defined and initialized

const resultElement = document.getElementById('result');
const numberInputElement = document.getElementById('numberInput');
const numbersListElement = document.getElementById('numbersList');

function addNumber() {
    const numberInput = parseFloat(numberInputElement.value);
    if (isNaN(numberInput)) {
        resultElement.innerText = `Please enter a valid number`;
        resultElement.classList.add('error-message');
        return;
    }
    numbers.push(numberInput);
    resultElement.innerText = `Number ${numberInput} added successfully`;
    resultElement.classList.remove('error-message');
    updateNumbersList();
    numberInputElement.value = '';
}

function getMax() {
    if (numbers.length === 0) {
        resultElement.innerText = `No numbers added yet`;
        resultElement.classList.add('error-message');
    } else {
        const maxNumber = Math.max(...numbers);
        resultElement.innerText = `Maximum Number: ${maxNumber}`;
        resultElement.classList.remove('error-message');
        highlightNumber(maxNumber);
    }
}

function getMin() {
    if (numbers.length === 0) {
        resultElement.innerText = `No numbers added yet`;
        resultElement.classList.add('error-message');
    } else {
        const minNumber = Math.min(...numbers);
        resultElement.innerText = `Minimum Number: ${minNumber}`;
        resultElement.classList.remove('error-message');
        highlightNumber(minNumber);
    }
}

function updateNumbersList() {
    numbersListElement.innerHTML = '';
    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.innerText = number;
        numberElement.classList.add('number-item');
        numbersListElement.appendChild(numberElement);
    });
}

function clearNumbers() {
    numbers = [];
    resultElement.innerText = `Numbers cleared`;
    resultElement.classList.remove('error-message');
    updateNumbersList();
}

function highlightNumber(number) {
    const numberElements = numbersListElement.children;
    Array.from(numberElements).forEach(element => {
        if (parseFloat(element.innerText) === number) {
            element.classList.add('highlight');
        } else {
            element.classList.remove('highlight');
        }
    });
}
