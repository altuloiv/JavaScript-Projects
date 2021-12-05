function my_Dictionary(){ //create function my_Dictionary
    var FamilyMember = { //var Family Member is equal to ""
        Name:"Albert", //Family Member Name
        Height:"6\'1\"", //Their Height
        Weight:"Too Much", //Their Weight
        Age: 21, //Their Age
        Motto: "You only Live Once." //Their motto
    };
    delete FamilyMember.Motto; //delete FamilyMember.Motto variable
    document.getElementById("Dictionary").innerHTML = FamilyMember.Motto; //write my_Dictionary to id Dictioinary in innerHTML
}