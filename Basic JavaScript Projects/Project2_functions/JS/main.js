
function My_First_Function(){
    var str = "This is a blue text."; //string that will be displayed when button is clicked
    var result= str.fontcolor("blue"); //changing the font color of the string to blue
    document.getElementById("Blue_text").innerHTML = result; //writing My_First_Function to the html id "Blue_text"
}

function myFunction(){
    var sentence = "I am learning"; //string that will be displayed when the paragraph element is clicked on
    sentence += " a lot from this book!"; //adding the the var sentence
    document.getElementById("sentence").innerHTML= sentence; //writing myFunction to html id "sentence"
}