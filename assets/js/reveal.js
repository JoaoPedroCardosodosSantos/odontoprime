/* ==========================================================
   ODONTOPRIME
   REVEAL JAVASCRIPT

   Responsibilities:
   - Reveal elements on scroll
   - Use IntersectionObserver
   - Improve visual experience
========================================================== */






/* ==========================================================
   SELECT ELEMENTS
========================================================== */


const revealElements =
document.querySelectorAll(
    ".reveal"
);







/* ==========================================================
   CHECK SUPPORT
========================================================== */


if(
    "IntersectionObserver" in window
){






/* ==========================================================
   CREATE OBSERVER
========================================================== */


const revealObserver =
new IntersectionObserver(


    entries => {



        entries.forEach(
            entry => {



                if(
                    entry.isIntersecting
                ){



                    entry.target.classList.add(
                        "active"
                    );



                    revealObserver.unobserve(
                        entry.target
                    );



                }



            }
        );



    },


    {


        threshold:0.15,


        rootMargin:
        "0px 0px -50px 0px"



    }


);








/* ==========================================================
   OBSERVE ELEMENTS
========================================================== */


revealElements.forEach(
    element => {


        revealObserver.observe(
            element
        );


    }
);





}else{



/* ==========================================================
   FALLBACK
========================================================== */


revealElements.forEach(
    element => {


        element.classList.add(
            "active"
        );


    }
);



}