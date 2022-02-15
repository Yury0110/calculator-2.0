

function disabledButton() {
    let expression = document.getElementById("exp").value;
    let button = document.getElementById("calc");
    
    if (expression) {
        button.removeAttribute("disabled"); 
    }
    else {
        button.setAttribute('disabled', 'disabled')
    }
};
