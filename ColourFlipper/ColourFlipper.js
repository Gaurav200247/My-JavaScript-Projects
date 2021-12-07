var ColourName=document.getElementById("colour")
var flipperbtn=document.getElementById("flipper")
var bodycolour=document.body    //use only body to use <body> tag of html in js variable
var allColours=["rebeccapurple","orangered","skyblue","greenyellow","plum","darkslategray","teal","crimson","darkolivegreen","gold"];

flipperbtn.addEventListener("click",function () {
    let a=generateRandom();                                    //a contains the random number of range(0-9)
    bodycolour.style.backgroundColor=allColours[a];
    ColourName.innerText=allColours[a];
})

function generateRandom() {                           //generates random number and returns it
    let rand = Math.random()*(allColours.length-1)   //math.random()*maxlimit generates random no. but in decimal value
    rand = Math.floor(rand);                        //math.floor uses the no. left to decimal it DO NOT rounds of any no.
    console.log(rand);                              //ex:- 5.99999999 = 5
    return rand;                                   //returns random no.
}