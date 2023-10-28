var header = document.createElement("h1")
header.textContent = "Click this text it event trigger!"
header.style.textAlign = "center"
document.body.appendChild(header)

var reset = document.createElement("button")
reset.textContent = "reset"
reset.style.scale = "150%"
reset.style.display = "block"
reset.style.margin = "20px auto"
reset.disabled = true
document.body.appendChild(reset)

var countnum = 0
var count = document.createElement("h2")
count.textContent = 0
count.style.textAlign = "center"
count.onmouseover = mouseOver
count.onmouseout = mouseOut
document.body.appendChild(count)

header.onclick = function(){
    this.textContent = "Ooops"
    reset.disabled = false
}

reset.onclick = function(){
    header.textContent = "Click this text it event trigger!"
    this.disabled = true
    countnum += 1
    count.textContent = countnum
}

function mouseOver(){
    count.textContent = `Reset counter : ${countnum}`
}

function mouseOut(){
    count.textContent = countnum
}