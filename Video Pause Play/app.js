var btn=document.getElementById("controlbtn")
var video = document.getElementById("video")
var active=false

btn.addEventListener('click',videocontroller);

function videocontroller(){
    if(active==true){
        btn.innerText="Play"
        video.play();
        active=false
        console.log("play")
    }else{
        btn.innerText="pause"
        video.pause();
        console.log("pause")
        active=true
    }

}