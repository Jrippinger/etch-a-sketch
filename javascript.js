let num = 16
let color = 'black'
let side = 500/num + "px"
let ranToggle = 0 
let shaderToggle = 0

//Function allows pixels to be colored 
function changeColor(t){
    
    if(ranToggle == 1){
        color = "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    /*if(shaderToggle == 1)
    {
        
    }
    */

    t.style.background = color
}

//Function for Size button
function changeSize(){

    num = prompt("Please enter a Canvas size:")

    if((num % 1) != 0){
        console.log("Invalid input: Not a number or integer")
        return
    }
    if(num <= 0){
        console.log("Invalid input: Less than or equal to zero")
        return
    }
    if(num > 100){
        num = 100
    }

    while(container.firstChild){
        container.removeChild(container.firstChild)
    }

    size.textContent = ("Size: " + num + "x" + num)
    
    side = 500/num + "px"

    for(i=0; i<(num * num); i++){
        const i = document.createElement('div')
        i.addEventListener('mouseover', function(){
            changeColor(this)
        })
        i.style.width = side
        i.style.height = side
        container.appendChild(i)
    }

    body.append(container)
    console.log("Canvas size set to " + num + "x" + num)
}

//Function for Randomize Color button
function rainbow(){
    if(ranToggle == 0){
        ranToggle = 1
        console.log("Random Colors: On")
        return
    }
    if(ranToggle == 1){
        ranToggle = 0
        color = 'black'
        console.log("Random Colors: Off")
        return
    }
}

/*function shader(){
    if(shaderToggle == 0){
        shaderToggle = 1
        console.log("Shader: On")
        return
    }
    if(shaderToggle == 1){
        shaderToggle = 0
        console.log("Shader: Off")
        return
    }
}*/

//Function for Reset button
function resetCanvas(){

    while(container.firstChild){
        container.removeChild(container.firstChild)
    }

    for(i=0; i<(num * num); i++){
        const i = document.createElement('div')
        i.addEventListener('mouseover', function(){
            changeColor(this)
        })
        i.style.width = side
        i.style.height = side
        container.appendChild(i)
    }

    body.append(container)
    console.log("Canvas Reset")
}

const body = document.body

const buttonList = document.createElement('div')
buttonList.classList.add('list')
body.append(buttonList)

//Button that prompts user to select a new size for the grid
const size = document.createElement('button')
size.textContent = ("Size: " + num + "x" + num)
size.addEventListener('click', function(){
    changeSize()
})
buttonList.appendChild(size)

//Button that allows user to select if they want random colors to generate
const random = document.createElement('button')
random.textContent = ("Randomize Color")
random.addEventListener('click', function(){
    rainbow()
})
buttonList.appendChild(random)

const darken = document.createElement('button')
/*darken.textContent = ("Shader")
darken.addEventListener('click', function(){
    shader()
})
buttonList.appendChild(darken)*/

//Button that resets the canvas to blank
const reset = document.createElement('button')
reset.textContent = "Reset"
reset.addEventListener('click', function(){
    resetCanvas()
})
buttonList.appendChild(reset)

const container = document.createElement('div')
container.classList.add('container')

//Initial Call
for(i=0; i<(num * num); i++){
    const i = document.createElement('div')
    i.addEventListener('mouseover', function(){
        changeColor(this)
    })
    i.style.width = side
    i.style.height = side
    container.appendChild(i)
}

body.append(container)