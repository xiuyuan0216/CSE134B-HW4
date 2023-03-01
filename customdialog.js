export {alertClose, okclick, closeclick}

function alertClose(){
    document.body.removeChild(document.getElementById("alertwindow"));
}

function okclick(){
    document.getElementById("output").innerHTML = "The value returned by the confirm method is : true"
    document.body.removeChild(document.getElementById("confirmwindow"));
}

function closeclick(){
    document.getElementById("output").innerHTML = "The value returned by the confirm method is : false"
    document.body.removeChild(document.getElementById("confirmwindow"));
}