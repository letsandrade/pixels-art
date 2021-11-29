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
    let selected = '';
}


function selectedColor() {
    var elem = document.getElementById("test");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("demo").innerHTML = theCSSprop;
  }


//console.log(document.getElementsByTagName(div))
const elementBody = document.getElementById('body')
elementBody.appendChild(document.createElement('section'));
const pixelBoard = document.getElementById('pixel-board')

for (let i = 0; i < 25; i += 1) {
    const elementDiv = document.createElement('div'); 
    elementDiv.className = "pixel"
    elementDiv.addEventListener('click', paintPixel);    
    pixelBoard.appendChild(elementDiv);
}

function paintPixel(event) {
    
}
// kudos: mislaine presidente, esdras, leo carvalho, fernando cabral

//function criaGrid() {
   // document.getElementById("#pixel-board").appendChild(div)
//}

