function addition_Function(){ //addition function  called by button push
    var addition = 5 + 2; //variable additon is equal to the sum of 5 plus 2
    document.getElementById("Math").innerHTML = "5 + 2 = " + addition; //write addition_Function in innerHTML Math id

}
function subtraction_Function(){ //subtraction function called by button push
    var Subtraction = 6 - 5; //var Subtraction is the difference of 6 and 5
    document.getElementById("Math2").innerHTML = " 6 - 5 = " + Subtraction; //write subtraction_Function in innerHTML Math2 id
}
function multiplication(){ //multiplication function called by button push
    var simple_Math = 6 * 8; //variable simple_Math is equal to the product of 6 and 8
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math; //write multiplication function in innerHTML Math3 id
}
function division(){ //division function called by button push
        var simple_Math2 = 48 / 6; //var simple_Math2 is the quotent of 48 and 6
        document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math2; //write division function in innnerHTML Math4 id
}
function more_Math(){ //more_Math function called by button push
    var more_Math = (1 + 2) * 10 / 2 -5; // var more_Math is the sum of 1 and 2 multiplied by 10 divided in half then subtracted by 5. 
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, dividied in half and then subtracted by 5 equals " + more_Math; //write more_math function in innHTML Math5 id
}
function modulus_Operator(){ //function modulus_Operator called by button push.
    var modulus_Op = 25 % 6; //var modulus_Op is equal to 25 divided by 6's remainder. 
    document.getElementById("Op").innerHTML = "When you divide 25 by 6, you have a remainder of: " + modulus_Op; //write modulus_Operator function to innerHTML ID Op
}
function negation_Operator(){ //function negation_Operator is called by button push
    var x = 10; //var x is equal to 10
    document.getElementById("neg").innerHTML = -x; // write negation_Operator in innerHTML neg id, the oposite of x. 
}
function increment_Up(){ //call function increment_Up by button push.
    var y = 5; //var y is equal to 5
    y++; //increase increment of y by 1 
    document.getElementById("inc1").innerHTML = y; //write increment_Up function in innerHTML id inc1
}
function increment_Down(){//call function increment_Up by button push.
    var z = 5.25; //var z is equal to 5.25
    z--; //decrease increment of z by 1
    document.getElementById("dec").innerHTML = z; //write increment_Down function in innerHTML id dec
}
function random(){ //call function random by button push
    window.alert(Math.random()); //create a window with a random number ranging from 0 and 1
}
function random100(){ // call function random100 by button push
    window.alert(Math.random() * 100); //create a window with a random number ranging from 0 and 100
}
function pi(){ //call function pi by button push
    window.alert(Math.PI); //create a window with the value of pi inside. 
}