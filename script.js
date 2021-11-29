const black = document.getElementById("color-black")
const blue = document.getElementById("color-blue")
const purple = document.getElementById("color-purple")
const pink = document.getElementById("color-pink")
const colorPalette = document.getElementById('color-palette').children

//tornar paleta de cores clicavel
for (let counter = 0; counter < colorPalette.length; counter += 1) {
    colorPalette[counter].addEventListener('click', selectColor);
}

//selecionar e capturar a cor
function selectColor(event) {
    for (let c = 0; c < colorPalette.length; c += 1) {
        if (colorPalette[c].classList.contains('selected')) {
            colorPalette[c].classList.remove('selected')    
        }
    }
    event.target.classList.add('selected');
    let selected = document.querySelector('.selected');
    let currStyle = window.getComputedStyle(selected)//.backgroundColor;
    let currColor = currStyle.getPropertyValue('background-color')
    console.log(currStyle)
    console.log(currColor)
}

const elementBody = document.getElementById('body')
const pixelBoard = document.getElementById('pixel-board')

for (let i = 0; i < 25; i += 1) {
    const elementDiv = document.createElement('div'); 
    elementDiv.className = "pixel"
    elementDiv.addEventListener('click', paintPixel);    
    pixelBoard.appendChild(elementDiv);
}

//pintar os quadrados clicados com a cor selecionada
function paintPixel(event) {
   //event.target.classList.add('test')
   //let currColor = 
   //let currPixel = event.target ;
   event.target.style.backgroundColor = currColor; 
}
// kudos: mislaine presidente, esdras, leo carvalho, fernando cabral

//function criaGrid() {
   // document.getElementById("#pixel-board").appendChild(div)
//}

// ref: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
/* function selectedColor() {
    var elem = document.getElementById("test");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("demo").innerHTML = theCSSprop;
  }
 */
