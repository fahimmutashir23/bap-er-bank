function getInputValue (inputField){
    const getInput = document.getElementById(inputField);
    const inputValueString = getInput.value;
    const inputValue = parseFloat(inputValueString);
    getInput.value = ""
    return inputValue
}