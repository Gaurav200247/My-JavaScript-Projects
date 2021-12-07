// All months
const months=[
"January",
"Febuary",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
]

// All Weekdays
const weekdays=[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
]

// All VARIABLES
var gaDate=document.querySelector(".ga-date")
var gaTimer = document.querySelectorAll(".ga-timer h1")   //all h1 in .ga-timer
var gaDateDisplay = document.querySelector(".ga-ending-reminder")
var gaTimerWhole=document.querySelector(".ga-timer")

var futureDate = new Date(2022,3,7,12,30,0);  //we added a future date by new Date() method 

const day=futureDate.getDay()
const date=futureDate.getDate()
const month=futureDate.getMonth()
const year=futureDate.getFullYear()
const hours=futureDate.getHours()
const minutes=futureDate.getMinutes()

// giveway date edit
gaDate.innerText=`${weekdays[day]}, ${date} ${months[month]} ${year}, at ${hours}:${minutes}`

const futureTime = futureDate.getTime()
// console.log(futureTime)



// FUNCTIONS

function giveawayReminder() {
    const today = new Date().getTime();
    // console.log(today)    
    const timeRemaining = futureTime-today;
    
    //1s=1000ms
    //1min=60s
    //1hr=60min
    //1day=24hrs

    // In Milli Seconds
    const oneDay=24*60*60*1000;     //total milli seconds in one day
    const oneHour=60*60*1000;       //total milli seconds in one hour
    const oneMin= 60*1000;          //total milli seconds in one min

    let daysRemianing = Math.floor((timeRemaining) / oneDay);
    let hoursRemianing = Math.floor((timeRemaining % oneDay) / oneHour);
    let minutesRemaining = Math.floor((timeRemaining % oneHour) / oneMin);
    let secondsRemaining = Math.floor((timeRemaining % oneMin) / 1000);



    let timerValues=[daysRemianing,hoursRemianing,minutesRemaining,secondsRemaining] ;
    
    // just to make span work
    let timerValuesinfo=["days","hours","minutes","seconds"]


    // if value goes less than zero add 0 to value
    function formatLessthanZero(item) {
        if(item<10){
         return item = `0` + item;
        }else{
            return item;
        }
    }


    // updating values in html page
    gaTimer.forEach(function (item,index) {
        console.log(item)
        console.log(index)
        item.innerHTML=formatLessthanZero(timerValues[index]) +`<span class="timer-info">${timerValuesinfo[index]}</span>`;
    })


    // if giveaway is over
    if(timeRemaining<0){
        clearInterval(countdown)
        gaDateDisplay.innerText="This Giveaway has Ended...."
        gaDateDisplay.classList.add("ended")
        gaTimerWhole.classList.add("hided")
    }else{
        gaDateDisplay.classList.remove("ended")
        gaTimerWhole.classList.remove("hided")
    }
}

// countdown updates function giveawayReminder(){} each second
let countdown=setInterval(giveawayReminder,1000);

// function call
giveawayReminder();