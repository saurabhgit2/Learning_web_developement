console.log("Creating a Weather App");
const button1=document.getElementById("btn");
const body1= document.getElementsByTagName("body");
function changeBtn(){
    if (button1.innerText=="Click me"){
        button1.innerText="You Clicked me.";
        button1.style.background="#f59a9a";
    }
    else if (button1.innerText=="You Clicked me."){
        button1.innerText="Click me";
        button1.style.background="blanchedalmond";
    }
    else
    {
                button1.innerText="You Clicked me.";
        button1.style.background="#f59a9a";
    }
    
    
}

button1.addEventListener("click",changeBtn);

