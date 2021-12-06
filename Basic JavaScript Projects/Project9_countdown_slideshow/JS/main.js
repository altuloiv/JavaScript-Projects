function countdown(){ //calling function countdown will take the inputted value and tick it down by 1000 milliseconds until it reaches zero, then alert a message.
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if(seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}






var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1} //if the slide number is greater than slide length it will show the slide.
if (n < 1) {slideIndex = slides.length} //if n is less than 1 the slide will not show
for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) { //depending on which slide is shown, will correspond which smaller image is shown highlighted on the bottom
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}