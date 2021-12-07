var modal=document.getElementById("modal-background")
var openbtnback=document.getElementById("modal-show-back")
var openbtn=document.getElementById("modal-show")

function openmodal() {
    modal.style.display="flex"   
    openbtnback.style.backgroundColor="rgb(0,0,0,0.5)"
    openbtn.style.backgroundColor="rgb(255, 127, 80,0.5)"
    openbtn.style.border="1px solid rgb(255, 127, 80,0.5)"
}
function modalclose() {
    modal.style.display="none"
    openbtnback.style.backgroundColor="transparent"
    openbtn.style.backgroundColor="coral"
    openbtn.style.border="1px solid coral"
}