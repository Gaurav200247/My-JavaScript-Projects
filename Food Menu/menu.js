var menulist=document.getElementsByClassName("menu-list")[0]
const filterbtns=document.querySelectorAll(".filter-btn")

window.addEventListener('DOMContentLoaded',function () {
    console.log("dom content loaded")
    
    // to acces JSON file
    fetch("./menu.json")
    .then(response => {                         //just leave this line of code as it is as it is required to access json file
        return response.json();                           
     })
    //  jsonfiledata is the variable used to store json file
     .then(jsonfiledata=>{
        //  jsonfiledata.menu is used to access menu in json file whose child is the LIST of Food items
        displaymenuitems(jsonfiledata.menu)        //function calls
     });
})

filterbtns.forEach(function (btn) {
    btn.addEventListener('click',function (e) {
        const category= e.currentTarget.dataset.category;

        // to acces JSON file
        fetch("./menu.json")
        .then(response => {                         //just leave this line of code as it is as it is required to access json file
            return response.json();                           
        })
        //  jsonfiledata is the variable used to store json file
        .then(jsonfiledata=>{
            //  jsonfiledata.menu is used to access menu in json file whose child is the LIST of Food items
            const menucategory=jsonfiledata.menu.filter(function (menuitem) {
                if (menuitem.category===category) {
                    return menuitem                                    
                }
            });
            if (category==='all') {
                displaymenuitems(jsonfiledata.menu)
                
            }else{
                displaymenuitems(menucategory)
            }
            console.log(menucategory)
        });
    });
});

function displaymenuitems(menuitems)
{
        // map is used to store updated array list in the variable displaymenu
        // important thing is return value as item acesses each element of array list of food items 
        let displaymenu = menuitems.map(function (item) {
            // console.log(item)

            //use `${item.value}` to acces elements of fooditem in menu in json file  
            return `<div class="food-item">                  
            <img src=${item.img} alt="food image is here">
            <div class="info">
                <div class="info-header">
                    <h3 class="food-name">${item.title}</h3>
                    <h3 class="price">$ ${item.price}</h3>
                </div>
                <div class="rectangle long"></div> 
                <p>${item.desc}</p>
            </div>
        </div>`;                 
        })
        // the thing RETURNS is stored in displpaymenu
        // console.log(displaymenu)
        
        //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
        displaymenu = displaymenu.join('');                  
        
        // now we put all the displaymenu array in our parent element => ("menu-list")
        menulist.innerHTML=displaymenu;
}
