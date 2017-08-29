var div = document.getElementById("div1");

// Functions //
function divChanger(){
    document.getElementById("div1").addEventListener("mouseover", divColorChange);
}
function divColorChange(){
    document.getElementById("div1").style.backgroundColor = "blue";
    document.getElementById("div1").style.width = "700px";
    document.getElementById("div1").style.height = "300px";
    document.getElementById("div1").style.boxShadow = "0px 0px 10px grey";
}



// Script Part //
divChanger();
