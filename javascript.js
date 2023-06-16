let num = 16
let color = 'black'
let side = 500/num + "px"

function changeColor(t){
    t.style.background = color;   
}

function changeSize(){

    num = prompt("Please enter a grid size:")

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
}

const body = document.body

const buttonList = document.createElement('div')
buttonList.classList.add('list')
body.append(buttonList)

const size = document.createElement('button')
size.textContent = ("Size: " + num + "x" + num)
size.addEventListener('click', function(){
    changeSize()
})
buttonList.appendChild(size)

const random = document.createElement('button')
random.textContent = ("Randomize Color")
buttonList.appendChild(random)

const darken = document.createElement('button')
darken.textContent = ("Shader")
buttonList.appendChild(darken)

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