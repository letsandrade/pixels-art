// const black = document.getElementById("color-black")
// const blue = document.getElementById("color-blue")
// const purple = document.getElementById("color-purple")
// const pink = document.getElementById("color-pink")
const colorPalette = document.getElementById('color-palette').children
const elementBody = document.getElementById('body')
const pixelBoard = document.getElementById('pixel-board')
const clearBoard = document.getElementById('clear-board')

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
    /* let selected = document.querySelector('.selected');
    let currStyle = window.getComputedStyle(selected)//.backgroundColor;
    let currColor = currStyle.getPropertyValue('background-color') */
    //console.log(currStyle)
    //console.log(currColor)
}
//console.log(currColor)

//criar 'pixels' + tornar clicáveis?
for (let i = 0; i < 25; i += 1) {
    const elementDiv = document.createElement('div'); 
    elementDiv.className = "pixel" 
    pixelBoard.appendChild(elementDiv);
    //elementDiv.addEventListener('click', paintPixel);
}
//tornar clicaveis?
const boardPronto = document.querySelectorAll('.pixel');
console.log(boardPronto)
for (let bp = 0; bp < boardPronto.length; bp += 1) {
    boardPronto[bp].addEventListener('click', paintPixel)
} 


//pintar os quadrados clicados com a cor selecionada
function paintPixel(event) {
    let selected = document.querySelector('.selected');
    let currStyle = window.getComputedStyle(selected)//.backgroundColor;
    let currColor = currStyle.getPropertyValue('background-color')
    //console.log(currColor)
    const selColor = document.querySelector('.selected')//.style.backgroundColor
    console.log(selColor)
    const currPixel = event.target;
    //console.log(currPixel)
    currPixel.style.backgroundColor = currColor
    //const pixelGrid = document.getElementsByClassName('pixel');
    //event.target.classList.add('test')
    //currColor = 
    //let selColor = document.querySelector('.selected');
    //let paintedPixel = elementDiv[currPixel]
    //console.log(currPixel)
    //event.target.style.backgroundColor = selColor.style.backgroundColor
}

clearBoard.addEventListener('click', limpaQuadro);

function limpaQuadro(event) {
    let paintedPixels = document.querySelectorAll('.pixel')
    for (p = 0; p < paintedPixels.length; p +=1) {
        paintedPixels[p].style.backgroundColor = 'white'
    }

}

//OBS: ESTOU DEIXANDO MEU CODIGO "SUJO" COMENTADAS AS COISAS QUE TENTEI ANTES DE FAZER FUNCIONAR PARA FINS EDUCACIONAIS.

// kudos(as pessoas que me ajudaram com o requisito 4 e vão receber um cartão virtual e minha gratidão eterna): mislaine presidente, esdras, leo carvalho, fernando cabral


// ref: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
/* function selectedColor() {
    var elem = document.getElementById("test");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("demo").innerHTML = theCSSprop;
  }
 */
