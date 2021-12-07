var pics=document.getElementsByClassName("pics")
var leftbtn=document.getElementById("leftbtn")
var rightbtn=document.getElementById("rightbtn")
var index=1
var len=pics.length
var strawhatsname=document.getElementById("name")
var namesarray=["stop","The Going Merry","Straw Hats","Monkey D Luffy","Roronoa Zoro","Nami","God Ussop","Vinsmoke Sanji","Tony Tony Chopper","Nico Robin","Franky","Brook","Jinbe","The Thousand Sunny","stop"]
var info=document.getElementById("info")
right_active=true
left_active=true
var flag=document.getElementById("flag")


//right button
function right() 
{
    index++
    pics[index].style.display="inline-block"
    pics[index-1].style.display="none"
    strawhatsname.innerText=namesarray[index]
    console.log(index)

    let a=namesarray[index];
    fetch("info.json")                          //using JSON FILE HERE
    .then(response=>response.json())
    .then(data=>{
        if(a==data.strawhats[index].name)
           { 
            info.innerText=data.strawhats[index].info
        }
    })

    
    check(index);
}



//left button
function left() 
{
    index--
    pics[index].style.display="inline-block"
    pics[index+1].style.display="none"   
    strawhatsname.innerText=namesarray[index]
    console.log(index)    
    let a=namesarray[index];
    fetch("info.json")                          //using JSON FILE HERE
    .then(response=>response.json())
    .then(data=>{
        if(a==data.strawhats[index].name)
           { 
            info.innerText=data.strawhats[index].info
        }
    })   

    check(index);

}


function check(i) {
    if(i>=13)
    {    
        rightbtn.style.display="none";
        index=13;
    }
    if(i<=1)
    {
        leftbtn.style.display="none"
        index=1;
    }
    if(i<13 && i>1)
    { 
        leftbtn.style.display="inline-block"
        rightbtn.style.display="inline-block"
        flag.style.display="none"
        console.log("between 1 to 13")
    }
}