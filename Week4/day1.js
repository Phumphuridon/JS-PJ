const major_subject = ["PSCP", "ICS", "ITF", "MFIT"];

function map(item){
    text += "<li>" + item + "</li>";
}

let text = "<ul>"; // tab
major_subject.forEach(map);
text += "</ul>" // close tag

document.getElementById("ARRAY").innerHTML = text