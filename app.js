const container = document.querySelector(".container")
const btn = document.querySelector(".btn1")
const NewBtn = document.querySelector(".red")
const resetBtn = document.querySelector(".green")
const h1 = document.querySelector("h1")
let random;
const randomColor = ["red", "blue", "orange", "green", "yellow", "purple", "grey", "black"]


let height
let length
btn.addEventListener("click", () => {
    height = prompt("What size do you want the height", 0)
    length = prompt("what size do you want the length", 0)
    containerSize()
    createDivs()
    btn.style.display = "none"
    NewBtn.style.display = "flex"
    resetBtn.style.display = "flex"

})
NewBtn.addEventListener("click", () => {
    location.reload();
})
function containerSize() {
    let ContainerHeight = height * 100
    let containerWidth = length * 100
    container.style.maxWidth = `${containerWidth}px`
    container.style.maxHeight = `${ContainerHeight}px`
}
function loopdiv(H, L) {
    if (H <= 100 && L <= 100){

        for (let i = 0; i < L; i++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('sketch')
            newDiv.style.minWidth = "90px"
            newDiv.style.minHeight = "90px"
            newDiv.style.display = "inline-block"
            container.appendChild(newDiv)
            newDiv.style.border = "black 5px solid"
            newDiv.style.boxSizing = "borderbox"
            newDiv.style.margin = "0"
            newDiv.style.padding = "0"
            
            newDiv.addEventListener("mouseover", () => {
                random = Math.floor(Math.random() * 8)
                newDiv.style.background = randomColor[random]
            })
        }
    }else{
        h1.textContent = "TOO BIG CHOSE A SMALLER SET OF NUMBERS"
    }
}
function createDivs() {
    for (let i = 0; i < height; i++) {
        loopdiv(height, length)
        
    }
}

