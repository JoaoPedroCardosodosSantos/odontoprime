/* ==========================================================
   ODONTOPRIME
   COUNTER JAVASCRIPT

   Responsibilities:
   - Animate statistics counters
   - Use IntersectionObserver
   - Improve performance
========================================================== */






/* ==========================================================
   SELECT COUNTERS
========================================================== */


const counters =
document.querySelectorAll(
    "[data-counter]"
);







/* ==========================================================
   ANIMATION FUNCTION
========================================================== */


function animateCounter(element){


    const target =
    Number(
        element.dataset.counter
    );


    const suffix =
    element.dataset.suffix || "";


    let current = 0;


    const duration = 2000;


    const increment =
    target / (duration / 16);





    function update(){


        current += increment;



        if(current < target){


            element.textContent =
            Math.floor(current)
            .toLocaleString("pt-BR")
            +
            suffix;



            requestAnimationFrame(
                update
            );


        }else{


            element.textContent =
            target
            .toLocaleString("pt-BR")
            +
            suffix;


        }


    }



    update();


}









/* ==========================================================
   INTERSECTION OBSERVER
========================================================== */


const counterObserver =
new IntersectionObserver(


    entries => {



        entries.forEach(
            entry => {



                if(
                    entry.isIntersecting
                ){



                    const counter =
                    entry.target;



                    animateCounter(
                        counter
                    );



                    counterObserver.unobserve(
                        counter
                    );



                }



            }
        );



    },

    {

        threshold:.5

    }



);








/* ==========================================================
   INITIALIZE
========================================================== */


counters.forEach(
    counter => {


        counterObserver.observe(
            counter
        );


    }
);