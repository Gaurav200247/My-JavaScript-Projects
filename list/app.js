//*********************************** IMP Variables **************************************

var alert=document.querySelector('.alert');

var form=document.querySelector('.list-form');
var input=document.querySelector('.list-input');
var addBtn=document.querySelector('.add-btn');

var listContainer=document.querySelector('.list-container')
var itemContainer=document.querySelector('.list-item-container');


var clearAllBtn=document.querySelector('.clear-all-btn');


//*********************************** Edit Option ******************************************
var editElement;
var editId="";
var editFlag=false;

//*********************************** Adding EVENT listeners *******************************
form.addEventListener('submit',addItem);
clearAllBtn.addEventListener('click',clearAllitems);
window.addEventListener('DOMContentLoaded',setUpItems);

//*********************************** Functions *********************************************


function clearAllitems() {              //Clear all items Button

    const item = document.querySelectorAll('.list-item')

    if (item.length>0) {

        item.forEach(function (item) {
            itemContainer.removeChild(item);
        });

        // Clearing Full LocalStorage
        clearLocalStorage();

        clearAllBtn.classList.add("invisible");
        displayAlert('All items are Cleared','blue')

    }
    setBacktoDefault();
}


function deleteItem(e){                  //delete Button

    const parent = e.target.parentElement.parentElement;
    parent.remove();

    // remove from localstorage
    removefromLocalstorage(parent.dataset.id);

    // makes ClearAllBtn invisible if listContainer dont have any element
    if (listContainer.hasChildNodes()) {
        clearAllBtn.classList.add("invisible");
    }
}



function editItem(e){                    //edit Button
    addBtn.innerText="edit";
    addBtn.classList.add("editing") 

    listContainer.classList.add("no-click")

    editFlag=true;
    const item=e.target.parentElement.parentElement;
    editElement = item;

    var name = item.firstChild;
    input.value=name.innerText;

}
     


function addItem(e) {                   // Add Button

    e.preventDefault();
    const id = new Date().getTime().toString();
    const value = input.value;

    //CONDTIONS 
    if(value && editFlag===false){
        
        //Creating element
        var element = document.createElement('div');
        element.classList.add('list-item');

        //Creating attribute
        var attrib = document.createAttribute('data-id');
        attrib.value=id;
        element.setAttributeNode(attrib);

        //Creating name
        var name = document.createElement('p')
        name.classList.add("item-name")
        name.innerText=value;

        //Creating icon container
        var iconContainer = document.createElement('div')
        iconContainer.classList.add("icon-container")

        //Creating edit btn
        var editBtn = document.createElement('button')
        editBtn.classList.add("edit-btn")
        editBtn.classList.add('icon')
        editBtn.innerHTML=`<i class="far fa-edit fa-2x"></i>`;

        //Creating delete btn
        var deleteBtn = document.createElement('button')
        deleteBtn.classList.add("delete-btn")
        deleteBtn.classList.add('icon')
        deleteBtn.innerHTML=`<i class="fas fa-trash fa-2x"></i>`;

    

        // appending
        element.appendChild(name)
        element.appendChild(iconContainer)

        iconContainer.appendChild(editBtn)
        iconContainer.appendChild(deleteBtn)

        itemContainer.appendChild(element);



        // Adding event listeners on edit and delete btn
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);

        // makes clear all btn visible
        clearAllBtn.classList.remove("invisible");
        

        displayAlert('item added successfully','green');


        setBacktoDefault();


        // Adding to local storage
        addedtoLocalstorage(id,value);

    }else if(editFlag===true){
        
        if (!value) {

            displayAlert('Please Enter an Item','red');

        }else{

            var name = editElement.firstChild;
            name.innerText = value;

            editId = editElement.dataset.id;

            addBtn.innerText = "submit";
            addBtn.classList.remove("editing")

            listContainer.classList.remove("no-click")

            
            // editing LocalStorage
            editingLocalstorage(editId,value);

            displayAlert('Item Edited','yellow')

            setBacktoDefault();
        }
        
    }else{

        displayAlert('no item added','red')
        setBacktoDefault();
    }

}



function displayAlert(sentence,action) {        //Displaying Alert
    
    // for add btn
    if (action==='green') {
        alert.innerText=sentence;
        alert.classList.add(`alert-${action}`)
        alert.classList.remove('invisible')
    
        setTimeout(function () {
            alert.classList.add('invisible');
            alert.classList.remove(`alert-${action}`)
        },1000)
    }    

    // for delete btn
    if (action==='red') {
        alert.innerText=sentence;
        alert.classList.add(`alert-${action}`)
        alert.classList.remove('invisible')
    
        setTimeout(function () {
            alert.classList.add('invisible');
            alert.classList.remove(`alert-${action}`)    
        },1000)
    }  

    // for edit btn
    if (action==='yellow') {
        alert.innerText=sentence;
        alert.classList.add(`alert-${action}`)
        alert.classList.remove('invisible')
    
        setTimeout(function () {
            alert.classList.add('invisible');
            alert.classList.remove(`alert-${action}`)    
        },1000)
    }  

    // for clear all btn
    if (action==='blue') {
        alert.innerText=sentence;
        alert.classList.add(`alert-${action}`)
        alert.classList.remove('invisible')
    
        setTimeout(function () {
            alert.classList.add('invisible');
            alert.classList.remove(`alert-${action}`)    
        },1000)
    }
}



function setBacktoDefault() {           //Setting Back to Default
    editId="";
    editFlag=false;
    input.value="";
}




//************************************Local Storage *****************************************


// Getting the local atorage
function getLocalStorage() {                                                    

    //  Its nothing just we are getting th local storage as If localStorage exits returns that localStorage else make an empty one;

    if (localStorage.getItem("listArray")) {

       return(JSON.parse(localStorage.getItem("listArray"))); 

    }else{

        return([]);

    }
}

// adding to local storage
function addedtoLocalstorage(id,value) {

    const list={id,value};

    var item = getLocalStorage();

    item.push(list);

    localStorage.setItem('listArray',JSON.stringify(item));
}

// removing from local storage
function removefromLocalstorage(DeleteId) {

    var items = getLocalStorage();

    let UpdatedList = items.filter(function (item) {
        if (item.id != DeleteId) {
            return item;
        }
    });  

    localStorage.setItem('listArray',JSON.stringify(UpdatedList));
}

// Clearing the local storage
function clearLocalStorage() {
    var item = [];
    localStorage.setItem('listArray',JSON.stringify(item));
}

// editing local storage
function editingLocalstorage(id,value) {  

    var items = getLocalStorage();

    let UpdatedList = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;      
    });

    localStorage.setItem('listArray',JSON.stringify(UpdatedList));
}


//************************************ Set Up Items On Page Load ****************************

function setUpItems() {
    var items = getLocalStorage();

    if (items.length>0) {
        items.forEach(function (item) {
            createListfromLocalStorage(item.id,item.value);
        })
    }
}



function createListfromLocalStorage(id,value) {

    //Creating element
    var element = document.createElement('div');
    element.classList.add('list-item');

    //Creating attribute
    var attrib = document.createAttribute('data-id');
    attrib.value=id;
    element.setAttributeNode(attrib);

    //Creating name
    var name = document.createElement('p')
    name.classList.add("item-name")
    name.innerText=value;

    //Creating icon container
    var iconContainer = document.createElement('div')
    iconContainer.classList.add("icon-container")

    //Creating edit btn
    var editBtn = document.createElement('button')
    editBtn.classList.add("edit-btn")
    editBtn.classList.add('icon')
    editBtn.innerHTML=`<i class="far fa-edit fa-2x"></i>`;

    //Creating delete btn
    var deleteBtn = document.createElement('button')
    deleteBtn.classList.add("delete-btn")
    deleteBtn.classList.add('icon')
    deleteBtn.innerHTML=`<i class="fas fa-trash fa-2x"></i>`;



    // appending
    element.appendChild(name)
    element.appendChild(iconContainer)

    iconContainer.appendChild(editBtn)
    iconContainer.appendChild(deleteBtn)

    itemContainer.appendChild(element);



    // Adding event listeners on edit and delete btn
    deleteBtn.addEventListener('click',deleteItem);
    editBtn.addEventListener('click',editItem);

    // makes clear all btn visible
    clearAllBtn.classList.remove("invisible");
}