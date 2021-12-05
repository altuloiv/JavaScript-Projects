function full_Sentence(){ //calling full_Sentence function will concat parts 1 through 4 into a complete sentence, writing to id Concatenate
    var part_1 = "I like ";
    var part_2 = "to make ";
    var part_3 = "home - made ";
    var part_4 = "mac\'n\'cheese.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){ //calling slice_Method function will slice the charectors of var sentence 27 through 33 and write the slice to id Slice
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

let text = "I love my cheese!"; //setting text = a string
let result = text.toUpperCase(); //changing the string into all uppercase letters

function UpperCase(){ //writing string result in id of case
    document.getElementById("Case").innerHTML = result;
}

let position = text.search("cheese"); //setting position to search for cheese in var text. 

function search_Function(){ //writing position to id search in html
    document.getElementById("Search").innerHTML = position;
}

function string_Method(){ //string_Method function called will convert var Z's number to a string to output to html id Numbers_to_string.
    var Z = 53;
    document.getElementById("Numbers_to_string").innerHTML = Z.toString();
}

function precision_Method(){ //precision_Method function called setting var x to a number, outputting to id Precision the toPrecision location of 10 charecters.
    var X = 129384.162198515951;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function tofix_Method(){ //calling function tofix_Method will fix var x to 2 decimal places writing to html id Fix.
    var x = 5.51865;
    var n = x.toFixed(2);
    document.getElementById("Fix").innerHTML = n;
}

function valueof_Method(){ //calling function valueof_Method to get the true value of the number 18 and outputting it to id Value in html.
    var num = 18;
    var n = num.valueOf();
    document.getElementById("Value").innerHTML = n;
}