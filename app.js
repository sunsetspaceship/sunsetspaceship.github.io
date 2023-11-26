const input = document.getElementById("input");
const list = document.getElementById("list");

function addItem() {
    if(input.value){
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#x1F5D1;";
        li.appendChild(span);
    }
    input.value = "";
}

list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);