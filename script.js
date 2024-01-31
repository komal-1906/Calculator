// JavaScript code for handling keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = /[0-9%/*\-+.]/; // Regular expression for valid keys
    if (validKeys.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById('display').value;
    if (expression) {
        const result = eval(expression);
        document.getElementById('display').value = result;
    }
}