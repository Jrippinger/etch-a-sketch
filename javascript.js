function changeColor(t){
    t.style.background = 'black';
    console.log(t)
}

const body = document.body

const container = document.createElement('div')
container.classList.add('container')

const tops = document.createElement('div')
tops.classList.add('subContainer')

const div1 = document.createElement('div')
div1.classList.add('box')
div1.addEventListener('mouseover', function(){
    changeColor(this)
})
tops.appendChild(div1)

const div2 = document.createElement('div')
div2.classList.add('box')
div2.addEventListener('mouseover', function(){
    changeColor(this)
})
tops.appendChild(div2)

const div3 = document.createElement('div')
div3.classList.add('box')
div3.addEventListener('mouseover', function(){
    changeColor(this)
})
tops.appendChild(div3)

const div4 = document.createElement('div')
div4.classList.add('box')
div4.addEventListener('mouseover', function(){
    changeColor(this)
})
tops.appendChild(div4)

container.appendChild(tops) 

const topMid = document.createElement('div')
topMid.classList.add('subContainer')

const div5 = document.createElement('div')
div5.classList.add('box')
div5.addEventListener('mouseover', function(){
    changeColor(this)
})
topMid.appendChild(div5)

const div6 = document.createElement('div')
div6.classList.add('box')
div6.addEventListener('mouseover', function(){
    changeColor(this)
})
topMid.appendChild(div6)

const div7 = document.createElement('div')
div7.classList.add('box')
div7.addEventListener('mouseover', function(){
    changeColor(this)
})
topMid.appendChild(div7)

const div8 = document.createElement('div')
div8.classList.add('box')
div8.addEventListener('mouseover', function(){
    changeColor(this)
})
topMid.appendChild(div8)

container.appendChild(topMid) 

const botMid = document.createElement('div')
botMid.classList.add('subContainer')

const div9 = document.createElement('div')
div9.classList.add('box')
div9.addEventListener('mouseover', function(){
    changeColor(this)
})
botMid.appendChild(div9)

const div10 = document.createElement('div')
div10.classList.add('box')
div10.addEventListener('mouseover', function(){
    changeColor(this)
})
botMid.appendChild(div10)

const div11 = document.createElement('div')
div11.classList.add('box')
div11.addEventListener('mouseover', function(){
    changeColor(this)
})
botMid.appendChild(div11)

const div12 = document.createElement('div')
div12.classList.add('box')
div12.addEventListener('mouseover', function(){
    changeColor(this)
})
botMid.appendChild(div12)

container.appendChild(botMid) 

const bot = document.createElement('div')
bot.classList.add('subContainer')

const div13 = document.createElement('div')
div13.classList.add('box')
div13.addEventListener('mouseover', function(){
    changeColor(this)
})
bot.appendChild(div13)

const div14 = document.createElement('div')
div14.classList.add('box')
div14.addEventListener('mouseover', function(){
    changeColor(this)
})
bot.appendChild(div14)

const div15 = document.createElement('div')
div15.classList.add('box')
div15.addEventListener('mouseover', function(){
    changeColor(this)
})
bot.appendChild(div15)

const div16 = document.createElement('div')
div16.classList.add('box')
div16.addEventListener('mouseover', function(){
    changeColor(this)
})
bot.appendChild(div16)

container.appendChild(bot)

body.append(container)