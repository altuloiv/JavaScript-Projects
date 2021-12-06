function count(){
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

function string(){
    let text = "Cheese Pizza!";
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function(){
    const Vehicle = {make: "Lamborhini", model:"Huracan",color: "verde-mantis"};
    Vehicle.color = "blue";
    Vehicle.price = "$300,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicle.make + " was " + Vehicle.price;
}

function let_Keyword(){
    let car = "Lamborghini";
    document.getElementById("let").innerHTML = car;
}

function return_Function(){
    return document.getElementById("return").innerHTML = "wow it worked!";
}
