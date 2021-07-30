var i=0;
var names=["James Araujo","Thomas Araujo","Sara Araujo","Patricia Araujo","Sergio Araujo"];
var images=["James.JPG","Thomas.JPG","Sara.JPG","Patricia.JPG","Sergio.JPG"];
function next(){
    i++;
    if(i>4) i=0;
    document.getElementById("image").src=images[i];
    document.getElementById("name").innerHTML=names[i];
}