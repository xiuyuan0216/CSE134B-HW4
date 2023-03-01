export {createPost, display, deleteNode, cancelClick, saveClick, editCancelClick, addClick}

function createPost(title, date, summary){
    let elem = document.createElement("div");
    let post = document.getElementById("posttemplate");
    let clon = post.content.cloneNode(true);
    let postlist = clon.querySelectorAll("p");
    postlist[0].textContent = "Post Title: "+title;
    postlist[1].textContent = "Post Date: "+date;
    postlist[2].textContent = "Post Summaray: "+summary;
    elem.appendChild(clon);
    document.body.appendChild(elem);
}

function display(posts){
    for(let i = 0;i<posts.length;i++){
        createPost(posts[i][0], posts[i][1], posts[i][2]);
    }
}

function deleteNode(){
    let postlist = document.querySelectorAll("div");
    for(let i =0; i<postlist.length;i++){
        document.body.removeChild(postlist[i]);
    }
}

function cancelClick(){
    document.body.removeChild(document.getElementById("dialogwindow"));
}

function saveClick(){
    if(document.getElementById("titleinput").value!="" && document.getElementById("dateinput").value!="" && document.getElementById("summaryinput").value!=""){
        posts.push([document.getElementById("titleinput").value, document.getElementById("dateinput").value, document.getElementById("summaryinput").value]);
        document.body.removeChild(document.getElementById("dialogwindow"));
        localStorage.setItem("posts", JSON.stringify(posts));
        deleteNode();
        display(JSON.parse(localStorage.getItem("posts")));
    }else{
        alert("Please do not leave it blank!");
    }
}

function editCancelClick(){
    document.body.removeChild(document.getElementById("editdialogwindow"));
}

function addClick(){
    if(!document.body.contains(document.getElementById("dialogwindow"))){
        let elem = document.createElement("div");
        elem.setAttribute("id", 'dialogwindow');
        let dialog = document.getElementById("dialog");
        let clon = dialog.content.cloneNode(true);
        elem.appendChild(clon);
        document.body.appendChild(elem);
    }
}