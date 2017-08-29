// Variables //
var ford = document.getElementById("ford");
var toyota = document.getElementById("toyota");
var renault = document.getElementById("renault");
var opel = document.getElementById("opel");
var div = document.getElementById("div1");


// Functions //
function contentInDiv(){
    document.getElementById("ford").addEventListener("click", fordInDiv);
    document.getElementById("toyota").addEventListener("click", toyotaInDiv);
    document.getElementById("renault").addEventListener("click", renaultInDiv);
    document.getElementById("opel").addEventListener("click", opelInDiv);
}
function fordInDiv(){
document.getElementById("div1").innerHTML = (ford.innerText);
}
function toyotaInDiv(){
    document.getElementById("div1").innerHTML = (toyota.innerText);
}
function renaultInDiv(){
    document.getElementById("div1").innerHTML = (renault.innerText);
}
function opelInDiv(){
    document.getElementById("div1").innerHTML = (opel.innerText);
}
// Script Part //
contentInDiv();