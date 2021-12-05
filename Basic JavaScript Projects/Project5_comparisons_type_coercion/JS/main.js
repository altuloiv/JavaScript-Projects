document.write(10 + "5"); //write 10 + "5"

function my_Function(){ //call my_functioni on click
    document.getElementById("Test").innerHTML = 0/0; //0/0 is not possible not a real number will be returned
}
function nanstring(){ //call nanstring function
    document.getElementById("Test2").innerHTML = isNaN('This is a String'); //will return true as the string is not a real number. 
}
function nannum(){ //call function nannum
    document.getElementById("Test3").innerHTML = isNaN('007'); //will return false as 007 is a real number. 
}
function infinity(){ //call function infinity
    window.alert(2E310); //number is too big to print so will default to 'infinity'
}
function neginfinity(){ //call function neginfinity
    window.alert(-3E310); //number is too small to print so will default to 'negative infinity'
}
function boolean(){ //call function boolean
    window.alert(3 > 5); //will return false as 3 is not greater than 5
}
function boolean2(){ //call function boolean2
    window.alert(10 < 12); //will return true as 10 is less than 12
}
console.log(5+5); //print to console sum of 5 and 5
console.log(5<4); //print to console if 5 is less than 4

function equal(){ //call function equal
    window.alert(5 == 5); //return true as 5 is equal to 5
} 
function notEqual(){ //call function notEqual
    window.alert(8 == 6); //window will return false as 8 is not equal to 6
}
function tripleEqualT(){ //call function tripleEqualT
    var A = "Equal"; //var A  is equal to string "Equal"
    var B = "Equal"; //var B is equal to string "Equal"
    window.alert( A === B); //window will return as true as var A and B is absolutly equal
}
function tripleEqualF(){ //call function tripleEqualF
    var A = 8; //var A is equal to integer 8
    var B = "7"; //var B is equal to string "7"
    window.alert( A === B); //window will return false as 8 and 7 are not equal but also because they are different type of data set.
}
function tripleEqualF2(){ //function tripleEqualF2 is called
    var A = 8; //var A is equal to integer 8
    var B = "8"; //var B is equal to string "8"
    window.alert( A === B); //window will return false as even though 8 is equal to 8, var A is a integer while B is a String value.
}
function tripleEqualF3(){ //call function tripleEqualF3
    var A = 8; //var A is equal to 8
    var B = 7; //var B is equal to 7
    window.alert( A === B); // window will return false as thought both variable are the same data set, 8 is not equal to 7
}
function and(){ //call function and
    window.alert(5 > 10 && 10 > 4); //window will return true as both booleans are false.
}
function or(){ //call function or
    window.alert(5 > 10 || 10 > 4); //window will return true as both booleans are still false or true, so will almost always be true unless they're equal
}
function or2(){ //call function or2
    window.alert(5 > 10 || 10 > 20); //window will return false as both booleans are false.
}
function not_Function(){ //call function not_Function
    document.getElementById("Not").innerHTML = !(20>10); //document write id Not will return false as function is true
}