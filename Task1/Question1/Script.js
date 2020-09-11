function convertion() {
    var n1 = parseFloat(document.getElementById("numbers").value),
        n2 = 60,
        outcome = n1 * n2;
        
    return outcome;   

}
function convert() {
    document.getElementById("result").innerText = convertion();
}

