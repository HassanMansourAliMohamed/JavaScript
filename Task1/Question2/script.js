function points() {
    var wins = parseInt(document.getElementById("number").value),
        draws = parseInt(document.getElementById("number1").value),
        loses = parseInt(document.getElementById("number2").value),
        outcome =  (wins*3) + (draws*1) + (loses*0);
    
   
    return outcome;
}

function calculate() {
    document.getElementById("result").innerHTML = points();
}


