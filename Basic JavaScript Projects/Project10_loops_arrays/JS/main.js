function count(){ //function that utilizes a while loop while X < 11, count up 1
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

function string(){ //learning the let variable
    let text = "Cheese Pizza!";
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){ //for loop
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){ //array
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function(){ //utilizing constant to make an object
    const Vehicle = {make: "Lamborhini", model:"Huracan",color: "verde-mantis"};
    Vehicle.color = "blue";
    Vehicle.price = "$300,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicle.make + " was " + Vehicle.price;
}

function let_Keyword(){ //let keywaord
    let car = "Lamborghini";
    document.getElementById("let").innerHTML = car;
}

function return_Function(){
    return document.getElementById("return").innerHTML = "wow it worked!";
}

let car = { //making an object with the let keyword
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red " , 
    description : function(){
        window.alert("This Car is a " + this.year + this.color +this.make + this.model);
    }
}; 
car.description() ;


function testBreak(x){ //learning how to use a break in the function to interupt a loop and go to the next step
    var i = 0;
    var x = 2;
    while (i < 6){
        if (i == 3){
            break;
        }
        i += 1;
    }
    document.getElementById("break").innerHTML = i * x;
}

let text = '';

for (let i = 0; i < 10; i++){ //learning how to use a continue keyword to continue throught a loop when something is met. 
    if (i === 3) {
        continue;
    }
    text = text + i;
}

console.log(text);