document.getElementById("calcAnswer").value = "answer";
var calcButtons = document.querySelectorAll(".calcBtn");
var numberCalcBtn = calcButtons.length; 
let storedValue = "";


for (var i=0; i<numberCalcBtn; i++ ){
    calcButtons[i].addEventListener("click",function(){
        //This gets the first class in the list of the clicked button e.g one or sum or divide
        var btnClass = this.classList[0]; 
        var btnValue = this.innerHTML;
        
        //Call btnAnnimation with btnClass
        btnAnnimation(btnClass);
        
        //Call addValue with btnValue
        let result = addValue(btnValue);
        
        //Update the display
        document.getElementById("calcAnswer").value = storedValue;      
    })  
} 

function addValue(val){
    storedValue += val;
    return val;
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
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}