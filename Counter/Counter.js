var digit=document.getElementById("digit")
var a=0;
function increase() {
    a++;
    digit.innerText=a;
    if (a>0) {
        digit.style.color="green"
    }else if (a<0) {
        digit.style.color="red"
    }else{
        digit.style.color="black"
    }
}
function decrease() {
    a--;
    digit.innerText=a;
    if (a>0) {
        digit.style.color="green"
    }else if (a<0) {
        digit.style.color="red"
    }else{
        digit.style.color="black"
    }
}
function reset() {
    a=0;
    digit.innerText=0;
    if (a>0) {
        digit.style.color="green"
    }else if (a<0) {
        digit.style.color="red"
    }else{
        digit.style.color="black"
    }
}

