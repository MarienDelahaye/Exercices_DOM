// Functions //
function displayP(){
    var changeColor = document.getElementsByTagName("p");
    var i; 
    for (i = 0; i < changeColor.length; i++) {
        
        if (i % 2 == 0 ){
            changeColor[i].style.backgroundColor = "red";
        } else {
            changeColor[i].style.backgroundColor = "transparent";
        }
    }

}

function displayP2(){
    var changeColor2 = document.getElementsByTagName("p");
    var i; 
    for (i = 0; i < changeColor2.length; i++) {
        changeColor2[i].style.color = "salmon";
        }
    }



// Script Part //
document.getElementById("btn").addEventListener("click", displayP); 
document.getElementById("btn2").addEventListener("click", displayP2); 