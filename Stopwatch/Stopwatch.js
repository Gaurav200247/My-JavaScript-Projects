var count1=document.getElementById("counting1");
var count2=document.getElementById("counting2");
var startbtn=document.getElementById("start")
var resetbtn=document.getElementById("reset")

var a=0,m=0,x=0;
var active=false;
function start()
{
    resetbtn.style.display="inline-block";
    if(!active)
    {
        m=setInterval(() => {
            a++;
            if (a<=10 || a>=0) {
                count2.innerText="0"+a;
            }
            if (a>=10) {
            count2.innerText=a;   
            }

            if(a==60){
                x++;
                count1.innerText= "0" + x;
                
                if (x>=10) {
                    count1.innerText=x;
                }
                a=0;
            }
        },1000);

        
        active=true;   
        startbtn.innerText="PAUSE";
    }
    else{
        clearInterval(m);
        active=false;
        startbtn.innerText="RESUME";
    }
}
function reset()
{      
    active=false;
    clearInterval(m);
    count1.innerText="00"
    count2.innerText="00"
    startbtn.innerText="START"
    resetbtn.style.display="none";
}
