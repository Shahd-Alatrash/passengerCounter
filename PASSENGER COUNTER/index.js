counterElement = document.getElementById("counter-el");
saveElement = document.getElementById("save-el");
let counter = 0;
function increment(){
    counter++;
    counterElement.innerHTML = counter;
}

function save(){
    counterString = counter + " - ";
    saveElement.textContent  += counterString;
    counterElement.textContent = 0;
    counter = 0;
}