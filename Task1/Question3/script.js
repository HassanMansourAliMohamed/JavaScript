function outcome() {
    var n1 = parseFloat(document.getElementById("number1").value),
        n2 =parsefloat(document.getElementById("nummber2").value);
    if(num1 === num2){
        return true
    }else {
        return false
    }
}
function result() {
    document.getElementById("result2").innerText = outcome();
}