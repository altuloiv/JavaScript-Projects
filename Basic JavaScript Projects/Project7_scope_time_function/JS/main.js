
var X = 2; //global variable X = 2

function myFunction(){ //calling myFunction() will multiply the global variable X to a local variable and output to math1
    var y = X * 1;
    document.getElementById("math1").innerHTML = "2 multiplied by 1 is " + y;
}

function myFunction2(){ //calling myFunction2() will multiply the global variable X by a local variable y, then output to math2
    var y = 2;
    var z = y * X;
    document.getElementById("math2").innerHTML = "2 multiplied by 2 is " + z;
}

function myFunction5(){ //a function that will execute in the console, and will fail because x is not defined. 
    var y = x + 10;
    console.log(y);
}
myFunction5();

function get_Date(){ //calling get_Date() function will generate the current time and compare it to 18:00 to output a string to Greeting if true.
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}


function Time_function(){ //calling Time_Function() will get the time and assign it to a var "Time", then compare it to 2 different attributes, depending on the time will correspond to a specific message.
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "it is morning time!";
    } else if(Time >= 12 == Time <18){
        Reply = "It is afternoon.";
    } else{
        Reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}

function ageFunction(){ //calling ageFunction when a valid number is inputted will test the input against 4 arguements to determine the output, if anything but a number is inputted, you will get an error alert
    const age = document.getElementById("age").value;
    var Reply;
    if(age >= 1, age < 16){
        Reply = "You are too young to do anything, go back to the playground.";
    }else if(age >= 16, age < 18){
        Reply = "You can drive!";
    }else if(age >= 18, age < 21){
        Reply = "You can drive and vote! You are officially an adult!";
    }else if(age >= 21){
        Reply = "Congratulations! You can gamble, vote and drive!? Well, it goes down hill from here.";  
    }else {
        window.alert("Please enter your age");
    }
    document.getElementById("answer").innerHTML = Reply;
}