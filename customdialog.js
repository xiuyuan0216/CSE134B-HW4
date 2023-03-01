export {alertClose, okclick, closeclick, cancelClick, submitClick, alertClick, confirmClick, promptClick}

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

function cancelClick(){
    document.getElementById("output").innerHTML = "User didn't enter anything";
    document.body.removeChild(document.getElementById("promptwindow"));
}

function submitClick(){
    let cleanResult = DOMPurify.sanitize(document.getElementById("prompttext").value);
    if(cleanResult == null || cleanResult == ""){
        document.getElementById("output").innerHTML = "User didn't enter anything";
    }else{
        document.getElementById("output").innerHTML = cleanResult;
    }
    document.body.removeChild(document.getElementById("promptwindow"));
}

function alertClick(){
    if(!document.body.contains(document.getElementById("alertwindow"))){
        let elem = document.createElement('div');
        elem.setAttribute('id', "alertwindow")
        let alertmsg = document.getElementById("alertmsg");
        let clon = alertmsg.content.cloneNode(true);
        elem.appendChild(clon);
        document.body.appendChild(elem);
    }
}

function confirmClick(){
    if(!document.body.contains(document.getElementById("confirmwindow"))){
        let elem = document.createElement("div");
        elem.setAttribute('id', 'confirmwindow');
        let confirmmsg = document.getElementById("confirmmsg");
        let clon = confirmmsg.content.cloneNode(true);
        elem.appendChild(clon);
        document.body.appendChild(elem);
    }
}

function promptClick(){
    if(!document.body.contains(document.getElementById("promptwindow"))){
        let elem = document.createElement("div");
        elem.setAttribute("id", 'promptwindow');
        let promptmsg = document.getElementById("promptmsg");
        let clon = promptmsg.content.cloneNode(true);
        elem.appendChild(clon);
        document.body.appendChild(elem);
    }
}
