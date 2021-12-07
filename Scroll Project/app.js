// ALL MAIN VARIABLES
var togglebtn=document.querySelector(".togglebtn")
var toggledlinks=document.querySelector(".links-list-toggled")
var navCenter=document.querySelector(".nav-center")



// ADDING EVENTLISTENER

togglebtn.addEventListener('click',function () {                                                // for toggle btn
    toggledlinks.classList.toggle("hide")
})



window.addEventListener('scroll',function() {                                                   // for Nav positioning when Scrolling 
//  console.log(window.pageYOffset);   
// window.pageYOffset => returns value U go scroll Y-axis 
// getBoundingClientRect().height => tells u the height of certain element including its padding a border 
    
    const toplink = this.document.getElementById("toplink")
    const scrollheight=window.pageYOffset;
    const navheight=navCenter.getBoundingClientRect().height;
    
    if(navheight<scrollheight)
    {
        navCenter.classList.add("fixed-nav")
        toggledlinks.classList.add("fixed-toggled-nav")
        toggledlinks.style.top=navheight+"px";
    }else{
        navCenter.classList.remove("fixed-nav")
        toggledlinks.classList.remove("fixed-toggled-nav")
    }

    // to make toplink btn appear whem scrollheight is > 5000
    if(scrollheight>450){
        toplink.classList.add("show-toplink")
    }else{
        toplink.classList.remove("show-toplink")
    }
})




const scrollLinks =document.querySelectorAll(".scroll-links")                               // to get all links to which we need to scroll

scrollLinks.forEach(function (links) {                                                      // to make scroll perfectly at a specific spot 
    links.addEventListener("click",function (e) {
        // to prevent scrolling by default
        e.preventDefault();
        
        // getAttribute is used to get attributes of a tag or class
        // slice is used to remove a part of sring from a string like # from #home
        // to get href innertext in id variable
        const id=e.currentTarget.getAttribute("href").slice(1);
        // console.log(id)

        // to access the element by the help of id
        const element = document.getElementById(id)
        const navheight=navCenter.getBoundingClientRect().height;
        //offsetTop gives the top position of element in pixels
        let elementPosition = element.offsetTop;
        // console.log(elementPosition)

        // window.scrollTo({top : ,left : })  used to scroll window to the specific position
        window.scrollTo({
            left : 0,
            top : elementPosition - navheight,
        })

        // to make toggled-links disapper when clicked to make user interface friendly
        toggledlinks.classList.toggle("hide")
    })
})


// for to the top btn
const toplink = this.document.getElementById("toplink")
toplink.addEventListener('click',function () {
    window.scrollTo({
        top : 0,
        left : 0,
    })
})

// FUNCTIONS

var footeryear=document.querySelector(".footeryear")                                                //for FOOT YEAR
const a=new Date()
footeryear.innerHTML=a.getFullYear();
