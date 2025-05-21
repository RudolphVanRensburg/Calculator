document.getElementById("calcAnswer").value = "answer"; //Display "Answer initialy"
var calcButtons = document.querySelectorAll(".calcBtn"); // define the variable
var numberCalcBtn = calcButtons.length; // define the variable
let storedValue = ""; // define the variable


for (var i=0; i<numberCalcBtn; i++ ){
    calcButtons[i].addEventListener("click",function(){
        //This gets the first class in the list of the clicked button e.g one or sum or divide
        var btnClass = this.classList[0]; 
        var btnValue = this.innerHTML;        
        
        btnAnnimation(btnClass);//Call btnAnnimation with btnClass
        number(btnValue);//Call number with btnValue             
    })  
} 

//Detect Keyboard Stroke
document.addEventListener("keypress", function(event){
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
    // Valid keys: digits, basic operators, equal sign, and comma
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
            // Add the key to the stored input string
            let result = addValue(key);
            //Update the display
            document.getElementById("calcAnswer").value = storedValue; 
        break;
        // Handle unsupported keys by showing an alert
        default: alert('unsupported key - '+ key);
    }
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

function btnAnnimation(currentKey){
    // Map key characters to the class names used in your HTML
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
        ",": "comma"
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