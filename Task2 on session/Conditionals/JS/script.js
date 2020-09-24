// task1  (answer yes)

// task2
let name = prompt("what's the official name of javascript?", "");
if (name == "ECMAscript") {
    alert ("Right!");
} else {
    alert (" you don't know? ECMAscript");
}

// task3 
let value = prompt("type a number", "");
if (value > 0 ) {
    alert ("1");
} else if (value < 0) {
    alert ("-1");
} else {
    alert ("0");
}

// task4 
let result = (a + b < 4) ? alert("below") : alert("over");

// task5
let message = prompt(login == "Employee") ? alert("Hello") : 
(login == "Director") ? "Greetings" :
(login == "") ? "No login" : "" ;

// another way to task 5
let type = prompt("login name?", "");
(type == "Employee") ? alert("Hello") : 
(type == "Director") ? alert("Greetings") :
(type == "") ? alert("No login") : "";
