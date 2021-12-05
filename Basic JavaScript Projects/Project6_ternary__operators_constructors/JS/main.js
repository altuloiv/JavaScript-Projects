
function Ride_Function(){ //ternary operator taking an input to determin if the value is true or false to output a string accordingly
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}




function Vehicle(Make, Model, Year, Color){ //Vehicle function defining make, model, year through "this" keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //variables for function Vehicle creating New Vehicles adding names to each area. 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");
var Albert = new Vehicle("Lamborghini", "Huracan", 2020, "Verde Mantis");
function myFunction(){ //created an if then function to display a string from the constructor function when inputted a matching name
    const val = document.getElementById("person").value;
    if(val == "Jack"){
        document.getElementById("Keywords_and_Constructors").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
    } else if(val == "Emily"){
        document.getElementById("Keywords_and_Constructors").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
    } else if(val == "Erik"){
        document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    }else if(val == "Albert"){
        document.getElementById("Keywords_and_Constructors").innerHTML = "Albert drives a " + Albert.Vehicle_Color + "-colored " + Albert.Vehicle_Make + " " + Albert.Vehicle_Model + " manufactured in " + Albert.Vehicle_Year;
    } else{ //if a name that is not entered in the constructor is entered, this text is displayed. 
        window.alert("Please enter a valid name. (Value is Case-Sensitive)");
    }
}

function count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}