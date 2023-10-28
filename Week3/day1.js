function create_labels(for_element_id, innerText, path, isbreak=true){
    var label = document.createElement("label");
    label.setAttribute("for", for_element_id);
    label.innerText = innerText;
    path.appendChild(document.createElement("br"));
    path.appendChild(label);
    if (isbreak){
        path.appendChild(document.createElement("br"));
    }
}

function submittion(){
    alert("This form has been submitted");
}

var form = document.createElement("form");
form.setAttribute("onsubmit", "submittion()");

fname_input = document.createElement("input");
fname_input.setAttribute("type", "text");
fname_input.id = "fname";
fname_input.placeholder = "Input First Name ..."

lname_input = document.createElement("input");
lname_input.setAttribute("type", "Text");
lname_input.id = "lname";
lname_input.placeholder = "Input Last Name ..."

submit = document.createElement("input")
submit.setAttribute("type", "submit")
submit.setAttribute("Value", "Submit")

// appending form to body
document.body.appendChild(form);

// appending all element to form
create_labels("fname", "FirstName: ", form);
form.appendChild(fname_input);
create_labels("lname", "LastName: ", form);
form.appendChild(lname_input);
form.appendChild(document.createElement("br"));
form.appendChild(submit);