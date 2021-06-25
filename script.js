const canvas = document.querySelector("#sketchContainer");
const userDims = 16;
/*
function gridGenerator(userDims) {
    for (let i=userDims*userDims; i>0; i--) {
        const square = document.createElement('div');
        //square.textContent = "square"; //debug
        square.setAttribute("id", "sq"+i);
        square.setAttribute("class", "sq");
        canvas.appendChild(square);
    }
}*/
function gridGenerator(userDims) {
    for (let i=userDims; i>0; i--) {
        //make userDims rows
        const row = document.createElement('div');
        row.setAttribute("id", "row"+i); //potentially unnecessary...
        row.setAttribute("class", "row");
        canvas.appendChild(row);
        for  (let j=userDims; j>0; j--) { 
        //make userDims squares per row
            const square = document.createElement('div');
            //square.textContent = "square"; //debug
            square.setAttribute("id", i+"sq"+j);
            square.setAttribute("class", "sq");
            row.appendChild(square);
        }
    }
    window.getComputedStyle(document.documentElement).getPropertyValue('--colNum'); ///
    document.documentElement.style.setProperty("--colNum", userDims);
    //window.getComputedStyle(document.documentElement).getPropertyValue('--sqSize'); ///
    //document.documentElement.style.setProperty("--sqSize",);
}
gridGenerator(userDims);

let squares = document.querySelectorAll('.sq');
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
function removeClassNodeList() {
    /*for (let i=0, len = squares.length; i < len; i++) {
            //document.getElementById(list[i].id).addEventListener(event, function() {
            squares[i].remove("class","colored");
        //});
    }*/
    canvas.innerHTML = "";
    gridGenerator(prompt("How many squares tall/wide do you want your Etch-a-Sketch to be?", "input a number 1-100"));
    squares = document.querySelectorAll('.sq');
    addClassNodeList(squares, "mouseenter");
}
//document.getElementById("restart").addEventListener("click", removeClassNodeList(squares, "click"));
//squares.addEventListener("hover", squares.setAttribute("class", "colored"));