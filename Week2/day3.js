// Create a element for the header
var header = document.createElement("h1");
header.textContent = "Showing Progression";
header.style.textAlign = "center";
header.style.fontSize = "24px";
header.style.padding = "10px";
document.body.appendChild(header);

// Create a element for the content
var content = document.createElement("h2");
content.textContent = "Week1.";
content.style.textAlign = "center";
content.style.fontSize = "18px";
content.style.padding = "10px";
document.body.appendChild(content);

// Create a button
var button = document.createElement("button");
button.textContent = "SHOW";
button.style.scale = "150%"
button.style.display = "block"
button.style.margin = "20px auto"
document.body.appendChild(button)

// Show Image
current_image = 0
var image = document.createElement("img");
image.style.scale = "100%"
document.body.appendChild(image)

album = []
for(let i = 1; i <= 6; i++){
    album.push(`C:/Users/phump/Desktop/JS PJ/Week1/IMAGE/Day${i}.png`)
}

// Event Handler
button.onclick = function(){
    image.src = album[current_image]
    current_image = (current_image + 1)%album.length
}