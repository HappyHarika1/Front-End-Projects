
const displayDecimal = () => {
    let inputBox = document.getElementsByName("display")[0];
    let current = inputBox.value;
    let parts = current.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1]
    if (!lastPart.includes(".")) {
        inputBox.value += ".";
    }

}