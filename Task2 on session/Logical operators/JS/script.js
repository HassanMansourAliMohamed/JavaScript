// TASK1 ANSWER IS : 2

// TASK2 ANSWER IS : 1 then 2 because the first truthy value found is 2, alert is not a value

// task3 answer is : null first falsy value

// task4 answer is : ??

// task5 answer is : 3 because && excuted first and its the first truthy after null

// task6 answer is : 
let age = prompt("how old are you?","");
if (age >= (14 || 90)) {
    alert("you are right");
} else {
    alert("try again");
}

// task 7 answer is : 
let age1 = prompt("type your age", "");
if (!(age1 >=14 && age1 <= 90)) {
    alert("good");
} else {
    alert("bad");
}

let age2 = prompt("type your age again?", "");
if (age2 <= (14||90)) {
    alert("nice again");
} else {
    alert("bad again");
}

// task8 answer is : first, no alert, third

// task9 answer is : 
let name = prompt("enter your name?","");
if (name == "Admin") {
    let password = prompt("enter your password?","");
    if (password == "The Master") {
        alert("welcome");
    }
    else if (password == ("" || null)) {
        alert("cancel");    
    }else {
        alert("wrong password");
    }
}else if ( name == ("" || null)) {
    alert("cancel");
} else {
    alert("I don't know you");
}
