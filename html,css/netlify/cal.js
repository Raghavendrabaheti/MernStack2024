let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = "";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
    display.innerText += value;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
function toggleSign() {
    let currentValue = display.innerText;

    if (currentValue) {
        display.innerText = (parseFloat(currentValue) * -1).toString();
    }
}

function handleKeyPress(event) {
    const key = event.key;

    if (!isNaN(key)) {
        appendToDisplay(key);  // If the key is a number, append it to the display
    } else if (key === "+") {
        appendToDisplay("+");
    } else if (key === "-") {
        appendToDisplay("-");
    } else if (key === "*") {
        appendToDisplay("*");
    } else if (key === "/") {
        appendToDisplay("/");
    } else if (key === "%") {
        appendToDisplay("%");
    } else if (key === ".") {
        appendToDisplay(".");
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    } else if (key === "Escape") {
        clearDisplay();
    }
}

// Attach the event listener to the document
document.addEventListener("keydown", handleKeyPress);
