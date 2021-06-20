const canvas = document.querySelector("#sketchContainer");

//eventually, let players select grid size: that would go here for '16'
for (let i=256; i>0; i--) {
    const square = document.createElement('div');
    square.textContent = "square"; //debug
    square.setAttribute("id", "sq"+i);
    square.setAttribute("class", "sq");
    canvas.appendChild(square);
}

const squares = document.querySelectorAll('.sq');
/*console.log(squares);*/
function addClassNodeList(list, event) {
    for (let i=0, len = list.length; i < len; i++) {
            document.getElementById(list[i].id).addEventListener(event, function() {
            list[i].setAttribute("class","colored");
        });
    }
}
addClassNodeList(squares, "mouseenter");

/*Everything below this line needs to be reworked, maybe entirely, to get the 
reset button to work.*/
function removeClassNodeList(list, event) {
    for (let i=0, len = list.length; i < len; i++) {
            document.getElementById(list[i].id).addEventListener(event, function() {
            list[i].remove("class","colored");
        });
    }
}
document.getElementById("restart").addEventListener("click", removeClassNodeList(squares, "click"));
//squares.addEventListener("hover", squares.setAttribute("class", "colored"));