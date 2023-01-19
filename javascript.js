const containerDiv = document.querySelector(".container")
let numInput = document.querySelector(".numInput")
let num = document.querySelector(".numInput").value
let divDimensions = 700 / num + "px"
let colorInput = document.querySelector(".color")
let color = document.querySelector(".color").value
let pixels = document.querySelectorAll(".blankPixel")
let clear = document.querySelector(".clear")

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
    createGrid()
})

function createDiv(id) {
    let div = document.createElement('div')
    div.setAttribute("style", "min-height: " + divDimensions)
    div.setAttribute("id", id)
    div.classList.add("blankPixel")
    containerDiv.appendChild(div)
    div.addEventListener("click", () => {
        div.style.backgroundColor = color
    })
}

function createGrid() {
    const grid = num * num
    for(i = 0; i < grid; i++ ) {
        createDiv(i)
    }
}

function clearGrid() {
    pixels = document.querySelectorAll(".blankPixel")
    pixels.forEach(blankPixel => {blankPixel.remove()})
}

createGrid()