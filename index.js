document.getElementById("calcAnswer").value = "answer"; //Display "Answer initialy"
var calcButtons = document.querySelectorAll(".calcBtn"); // define the variable
var numberCalcBtn = calcButtons.length; // define the variable
let currentNumber  = ""; // define the variable
let storedNumber = null;
let currentOperation = null;


for (var i=0; i<numberCalcBtn; i++ ){
    calcButtons[i].addEventListener("click",function(){
        
        var btnValue = this.innerHTML;        

        number(btnValue);//Call number with btnValue
        btnAnnimation(btnValue);//Call btnAnnimation with btnValue
                     
    })  
} 

//Detect Keyboard Stroke
document.addEventListener("keydown", function(event){
    number(event.key);//Call number
    btnAnnimation(event.key);//Call btnAnnimation

    switch(event.key){
        case "Enter":
            // Prevent default behaviour for enter to add the last clicked/ pressed button and append to currentNumber
           event.preventDefault(); 
           break; 
    }
})

// Appends the given value to the currentNumber  string and returns it
function addValue(val){
    currentNumber  += val;
} 

// Handles key input for numbers and basic operators
function number(key){
    // Valid keys: digits, basic operators, equal sign, comma, Enter, Back, Backspace  
    // HTML value
    switch (key) {
        // Digits 0–9 and comma for decimal input
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            addValue(key);
            break;
        case ",":
            // Treat comma as a decimal point and only allow one
            if (!currentNumber.includes(",")) {
                addValue("."); // Internally use dot
            }
            break;
        // Arithmetic operations
        case "+":
            setOperation('+');
            break;
        case "-":
            setOperation('-');
            break;
        case "*":
            setOperation('*');
            break;
        case "/":
            setOperation('/');
            break;
        // Clear the current number input
        case "Clear":
            currentNumber = "";
            break;
        // Delete the last character (Backspace or back arrow)
        case "⟵":
        case "Backspace":
            currentNumber = currentNumber.slice(0, -1);
            break;
        // Calculate the result when Enter or = is pressed
        case "Enter":
        case "=":
            calculate();
            break;
        // Handle unsupported keys
        default:
            alert('Unsupported key - ' + key);
    }

    // Update the calculator display with the current number
    document.getElementById("calcAnswer").value = currentNumber;
}


function setOperation(op) {
    // Only proceed if there is a number currently entered
    if (currentNumber !== '') {
        // Convert the current input (string) to a number and store it
        storedNumber = parseFloat(currentNumber);
        // Save the selected operation (e.g., "+", "-", "*", "/")
        currentOperation = op;
        // Clear the currentNumber so the user can enter the next number
        currentNumber = '';
    }
}


function calculate() {
    // Check that both storedNumber and currentNumber are valid (not null)
    if (storedNumber !== null && currentNumber !== null) {
        let result;
        // Convert the current input string to a number (can include decimals)
        let secondNumber = parseFloat(currentNumber.replace(',', '.'));

        // Perform the calculation based on the selected operation
        switch (currentOperation) {
            case '+':
                result = storedNumber + secondNumber; // Addition
                break;
            case '-':
                result = storedNumber - secondNumber; // Subtraction
                break;
            case '*':
                result = storedNumber * secondNumber; // Multiplication
                break;
            case '/':
                // Check for divide-by-zero error
                result = secondNumber !== 0 ? storedNumber / secondNumber : 'Error';
                break;
        }

        // Display the result in the calculator display field
        document.getElementById("calcAnswer").value = result;
        // Update currentNumber with the result so it can be used in the next operation
        // toString() keeps any decimal points if the result is not a whole number
        currentNumber = result.toString();
        // Clear stored values to prepare for a new calculation
        storedNumber = null;
        currentOperation = null;
    }
}


function btnAnnimation(currentKey){
    // Map key characters to the class names used in your HTML
    // HTML value to class
    const keyToClass = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "+": "sum",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        "=": "equals",
        ".": "comma",
        ",": "comma",
        "Clear": "clear",
        "⟵": "back",
        "Backspace": "back",
        "Enter": "equals"
    };

    // Look up the corresponding CSS class name for the pressed key using the keyToClass mapping
    const className = keyToClass[currentKey];

    // Select the button element that matches the class name mapped from the pressed key
    var activeButton = document.querySelector("." + className);
    // Add the "pressed" class to the button to apply visual feedback (e.g., animation or styling)
    activeButton.classList.add("pressed");
    // After 200 milliseconds, remove the "pressed" class to reset the button's appearance
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}