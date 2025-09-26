const display = document.getElementById("display")
let justCalculated = false;
function appendToDisplay(input){
    if(justCalculated){
        display.value = ""
    }
    display.value += input;
    justCalculated = false;
}

function clearDisplay(){
    display.value = "";
    justCalculated = false;
}

function calculate(){
    
    try{
        display.value = eval(display.value)
        justCalculated = true;
    }
    catch(error){
        display.value = "Error";
    }
    
    
    
}