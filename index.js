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
        
        let result = addValue(btnValue);//Call addValue with btnValue
        
        document.getElementById("calcAnswer").value = storedValue;//Update the display     
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

//Generate Animation
function btnAnnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    //Set timeout using anonamous function
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}