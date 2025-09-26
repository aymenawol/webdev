const textbox = document.getElementById("textbox");
const c2f = document.getElementById("C2F");
const f2c = document.getElementById("F2C");
const result = document.getElementById("result");
let temp;

function convert(){
    if(c2f.checked){
        temp = Number(textbox.value);
        temp = (textbox.value * 1.8) + 32;
        result.textContent = `${temp}°F`;
    } else if(f2c.checked){
        temp = Number(textbox.value);
        temp = (textbox.value - 32) * (5/9);
        result.textContent = `${temp}°C`;
    } else{
        result.textContent = "Select a unit";
    }
}