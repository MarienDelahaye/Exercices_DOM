// Variables //
var liItems = document.getElementsByTagName("li");


// Functions //

// Script Part //
for (let i = 0; i < liItems.length; i++){
    liItems[i].click
    function divContent(){
        document.getElementById("div1").innerHTML = (liItems[i].innerText);
    }
    
        liItems[i].addEventListener("click", function(){
            divContent();

    }
        )};
