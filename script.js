const black = document.getElementById("color-black")
const blue = document.getElementById("color-blue")
const purple = document.getElementById("color-purple")
const pink = document.getElementById("color-pink")

let selectedColor = black;

//console.log(document.getElementsByTagName(div))
const elementBody = document.getElementById('body')
elementBody.appendChild(document.createElement('section'));
const pixelBoard = document.getElementById('pixel-board')

for (let i = 0; i < 25; i += 1) {
    const elementDiv = document.createElement('div'); 
    elementDiv.className = "pixel"    
    pixelBoard.appendChild(elementDiv)
    

}
// kudos: mislaine presidente, esdras, leo carvalho, fernando cabral

//function criaGrid() {
   // document.getElementById("#pixel-board").appendChild(div)
//}
