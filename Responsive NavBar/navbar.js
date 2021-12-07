var toggledlist=document.getElementById("toggled-links-list")
var togglebtn=document.getElementById("togglebtn")
var active=false


function show() 
{   if (active==true)
    {        
        toggledlist.style.height="83vh" 
        toggledlist.style.overflow="visible"
        active=false
    }else if(active==false){
        toggledlist.style.height="0" 
        toggledlist.style.overflow="hidden"
        active=true
    }

}
