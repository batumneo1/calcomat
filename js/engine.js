function getValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function setResult(id, text) {
    document.getElementById(id).innerText = text;
}