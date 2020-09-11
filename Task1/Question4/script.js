function voteCount(){
    var n1 = document.getElementById("rise").value ,
        n2 = document.getElementById('down').value;
        printResult(votes(n1 , n2));
}
function votes(n1 , n2){
    return n1 - n2;

}
function printResult(result){
    document.getElementById('result').innerHTML = result;
}