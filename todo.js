const inputbox = document.getElementById("addtask"); //input
const listcontainer = document.getElementById("list-cont"); //task list

function taskadd()
{
    if(inputbox.value === '')
    {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value  = "";
    saveData();
}

//code for check uncheck functionality

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    
       else if(e.target.tagName === "SPAN") 
       {
        e.target.parentElement.remove();
       }
}, false);
 
//use to save data when reloads

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();
