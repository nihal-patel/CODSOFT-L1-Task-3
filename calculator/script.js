function valuebutton(e) {
    calculatorform.screen.value += e.value;
}
function AC() {
    calculatorform.screen.value = null;
}


function Calculate() {
    calculatorform.screen.value = eval(calculatorform.screen.value)
}