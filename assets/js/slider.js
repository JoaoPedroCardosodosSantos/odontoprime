/* ==========================================================
   ODONTOPRIME
   SLIDER JAVASCRIPT

   Responsibilities:
   - Control testimonial slider
   - Autoplay
   - Navigation
   - Touch support
========================================================== */






/* ==========================================================
   SELECT ELEMENTS
========================================================== */


const slider =
document.querySelector(
    ".testimonial-slider"
);



const slides =
document.querySelectorAll(
    ".testimonial"
);








/* ==========================================================
   CHECK EXISTENCE
========================================================== */


if(
    !slider ||
    slides.length === 0
){

    console.log(
        "Slider not initialized."
    );

}else{






/* ==========================================================
   VARIABLES
========================================================== */


let currentSlide = 0;


let interval;







/* ==========================================================
   SHOW SLIDE
========================================================== */


function showSlide(index){



    slides.forEach(
        slide => {


            slide.classList.remove(
                "active"
            );


        }
    );



    slides[index].classList.add(
        "active"
    );



}








/* ==========================================================
   NEXT SLIDE
========================================================== */


function nextSlide(){



    currentSlide++;



    if(
        currentSlide >= slides.length
    ){


        currentSlide = 0;


    }



    showSlide(
        currentSlide
    );



}








/* ==========================================================
   AUTOPLAY
========================================================== */


function startAutoplay(){


    interval =
    setInterval(
        nextSlide,
        5000
    );


}





function stopAutoplay(){


    clearInterval(
        interval
    );


}








/* ==========================================================
   TOUCH SUPPORT
========================================================== */


let touchStart = 0;


let touchEnd = 0;





slider.addEventListener(
    "touchstart",
    event => {


        touchStart =
        event.changedTouches[0].screenX;


        stopAutoplay();


    },
    {
        passive:true
    }
);







slider.addEventListener(
    "touchend",
    event => {



        touchEnd =
        event.changedTouches[0].screenX;



        if(
            touchStart -
            touchEnd >
            50
        ){


            nextSlide();


        }





        startAutoplay();



    },
    {
        passive:true
    }
);








/* ==========================================================
   INITIALIZE
========================================================== */


showSlide(
    currentSlide
);


startAutoplay();




}