headder = document.createElement("h1")
headder.textContent = "CHARMING PROGRESSION II"
headder.style.textAlign = "center"
headder.style.paddingTop = "20px"
document.body.appendChild(headder)

mdiv = document.createElement("div")
mdiv.setAttribute("Class", "MAINDIV")
mdiv.style.display = "flex"
mdiv.style.justifyContent = "center"

page = 1
content = ["Basic Syntax and Variables", "Expression", "Display","Display", "Variables Types", "Constant", "Functions", "Functions 2", "JS DOM", "Event Handling", "Form", "Arrays and Object", "Arrays and Object 2", "Asynchronous Programming", "This Project"]
left_div = document.createElement("div")
left_div.setAttribute("Class", "LEFT")
left_div.style.display = "inline-block"
left_div.style.flex = "1"
left_div.style.border = "3px black solid"
left_div.innerHTML = `<img style='max-width: 100%; max-height: 100%;' src='./IMAGE/Page${page}.png'>`
left_div.style.minHeight = "min-content"

right_div = document.createElement("div")
right_div.setAttribute("Class", "RIGHT")
right_div.style.display = "inline-block"
right_div.style.flex = "1"
right_div.style.border = "3px red solid"
right_div.style.margin = "auto"
right_div.style.textAlign = "center"
right_div.style.padding = "20px"
right_div.innerHTML = `<div style='margin: 'auto' text-align = 'center''><p1 style="color: blue;">Learn about</p1> <p1 style="color: Red;">${content[page-1]}</p1>`

function changePage(current_page, max_page){
    if (current_page == max_page-1){
        button.textContent = "Reset"
    } else {
        button.textContent = "Next"
    }
    return Math.max((current_page+1)%(max_page+1), 1)
}
button = document.createElement("button");
button.textContent = "Next";
button.style.display = "block";
button.style.margin = "auto";
button.onclick = function(){
    page = changePage(page, 15)
    right_div.innerHTML = `<p1 style="color: blue;">Learn about</p1> <p1 style="color: Red;">${content[page-1]}</p1>`
    left_div.innerHTML = `<img style='max-width: 100%; max-height: 100%;' src='./IMAGE/Page${page}.png'>`
}

document.body.appendChild(button)
document.body.appendChild(document.createElement("br"))
document.body.appendChild(mdiv)
mdiv.appendChild(left_div)
mdiv.appendChild(right_div)

