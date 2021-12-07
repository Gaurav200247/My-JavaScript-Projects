var tabInfo=document.querySelectorAll(".tab-info")
var tabBtns=document.querySelectorAll(".tab-btns")
var tabsContainer=document.querySelector(".tabs-container")
var tabImg = document.querySelectorAll(".image")



tabsContainer.addEventListener('click',function (e) {
    // dataset is used to access data-id from html code 
    // console.log(e.target.dataset.id)

    const id = e.target.dataset.id
    // console.log(id)  //winter summer monsoon
    

    if(id){
    
        tabBtns.forEach(function (btn) {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        tabInfo.forEach(function (info) {
            info.classList.remove("show") //this removes class = "show"  from each tab-info when tab-container got clicked and id exist
        })
        
        const element = document.getElementById(id)     //element stores the div whose id is same as the value stored in id
        element.classList.add("show")      //this will add class = "show" only to those tab-info which is selected as element
    
        
        tabImg.forEach(function (img) {
            // console.log(img.dataset.imgid)
            if (img.dataset.imgid==id) {                  //id data-imgid == data-id 
                img.classList.add("show")                   //then add show to the matching one
            }else{
                img.classList.remove("show")                //else remove show to others
            }
        })
    }
})