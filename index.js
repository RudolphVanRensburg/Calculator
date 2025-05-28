document.getElementById("calcAnswer").value = "answer"; //Display "Answer initialy"
var calcButtons = document.querySelectorAll(".calcBtn"); // define the variable
var numberCalcBtn = calcButtons.length; // define the variable
let storedValue = ""; // define the variable


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
})

// Appends the given value to the storedValue string and returns it
function addValue(val){
    storedValue += val;
    return val;
} 

// Handles key input for numbers and basic operators
function number(key){
    // Valid keys: digits, basic operators, equal sign, comma, Enter, Back, Backspace  
    // HTML value
    switch(key){
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
        case "/":
        case "*":
        case "-":
        case "+":
        case "=":
        case ",": 
        case "Enter":
            // Add the key to the stored input string
            addValue(key);            
            break; 
        case "Clear": 
            //Clear storedValue
            storedValue = ""; 
            break;
        case "⟵":
        case "Backspace":
            //Remove one character from storedValue
            storedValue = storedValue.slice(0,-1);
            break;            
        // Handle unsupported keys by showing an alert
        default: alert('unsupported key - '+ key);
    }
    //Update the display
    document.getElementById("calcAnswer").value = storedValue; 
}

/* function sum (num1, num2){
    return(num1+num2);
}
function subtract(num1, num2){
    return(num1-num2);
}
function divide(num1, num2){
    return(num1/num2);
}
function multiply(num1, num2){
    return(num1*num2);
} */

function clearAnswer(){
    document.getElementById("calcAnswer").value = "answer";
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