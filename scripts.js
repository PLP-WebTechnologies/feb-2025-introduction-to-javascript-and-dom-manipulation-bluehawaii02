var btn = document.getElementById("change-text-button");
var txt = document.getElementById("to-change");

btn.onclick =function(){
    if(txt.textContent == "this text is not changed"){
        txt.textContent = "this text has been changed";

    } else {
        txt.textContent = "this text is not changed";

    }
    btn.style.backgroundColor = "red";
    
    
}

var btn2 = document.getElementById("add-image-button");
var img = document.getElementById("image-container");

btn2.onclick = function(){
    var imgElement = document.createElement("img");
    imgElement.src = "wp2.jpg";
    img.Alt ="it's just an image"
    img.appendChild(imgElement);
    imgElement.style.width = "200px";
    imgElement.style.height = "200px";

    
}
