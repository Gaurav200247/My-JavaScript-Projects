var slides = document.querySelectorAll('.slide');
var nextBtn = document.querySelector('.nextBtn'); 
var preBtn = document.querySelector('.previousBtn');

var index=0;

nextBtn.addEventListener('click',function () {
    
    slides[index].classList.remove("active");
    slides[index+1].classList.add("active");
    index++;

    preBtn.classList.remove("hide");

    if(index===slides.length-1){

        slides[slides.length-1].classList.remove("active");
        index=0;
        slides[index].classList.add("active");

    }
});


preBtn.addEventListener('click',function () {

    slides[index].classList.remove("active");
    slides[index-1].classList.add("active");
    index--;

    if (index===0) {

        slides[index].classList.remove("active");
        index=slides.length-1;
        slides[index].classList.add("active");

    }else if (index<slides.length-1 && index>0){

        nextBtn.classList.remove("hide")

    }
});