const containerDiv = document.querySelector(".container")
let numInput = document.querySelector(".numInput")
let num = document.querySelector(".numInput").value
let divDimensions = 700 / num + "px"
let colorInput = document.querySelector(".color")
let color = document.querySelector(".color").value
let pixels = document.querySelectorAll(".blankPixel")
let clear = document.querySelector(".clear")
let currentInput = document.querySelector(".currentInput")
currentInput.textContent = numInput.value

clear.addEventListener("click", ()=> {
    clearGrid()
    createGrid()
})

colorInput.addEventListener("change", ()=> {
    color = document.querySelector(".color").value;
})

numInput.addEventListener("change", ()=> {
    clearGrid()
    num = document.querySelector(".numInput").value;
    divDimensions = 700 / num + "px"
    currentInput.textContent = numInput.value
    createGrid()
})

function createDiv(id) {
    let div = document.createElement('div')
    div.setAttribute("style", "min-height: " + divDimensions)
    div.setAttribute("id", id)
    div.classList.add("blankPixel")
    containerDiv.appendChild(div)
    div.addEventListener("mousedown", () => {
        let random = document.querySelector(".random").checked
        if (random == false) {
            div.style.backgroundColor = color
        }else {
            div.style.backgroundColor = getRandomColor()
        }
    })
}

function createGrid() {
    if (num >= 2 && num <= 50){
        const grid = num * num
        for(i = 0; i < grid; i++ ) {
            createDiv(i)
        }
    }else {alert("Invalid Size")}
}

function clearGrid() {
    pixels = document.querySelectorAll(".blankPixel")
    pixels.forEach(blankPixel => {blankPixel.remove()})
}

function getRandomColor() {
    let result = "rgb("
    for(i=0; i<3; i++) {
        let randomNumber = Math.floor(Math.random() * 256)
        result += randomNumber + " ";
    }
    result += ")"
    return result
}

createGrid()