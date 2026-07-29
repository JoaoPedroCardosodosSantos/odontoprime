/* ==========================================================
   ODONTOPRIME
   FAQ JAVASCRIPT

   Responsibilities:
   - Control FAQ accordion
   - Keep only one item open
   - Improve accessibility
========================================================== */






/* ==========================================================
   SELECT FAQ ITEMS
========================================================== */


const faqItems =
document.querySelectorAll(
    ".faq-item"
);








/* ==========================================================
   FAQ CONTROL
========================================================== */


faqItems.forEach(item => {



    const summary =
    item.querySelector(
        "summary"
    );



    if(!summary){
        return;
    }





    summary.addEventListener(
        "click",
        () => {



            faqItems.forEach(
                otherItem => {



                    if(
                        otherItem !== item &&
                        otherItem.open
                    ){


                        otherItem.open =
                        false;


                    }



                }
            );



        }
    );



});








/* ==========================================================
   ACCESSIBILITY SUPPORT
========================================================== */


faqItems.forEach(item => {



    const summary =
    item.querySelector(
        "summary"
    );



    if(!summary){
        return;
    }





    item.addEventListener(
        "toggle",
        () => {



            summary.setAttribute(

                "aria-expanded",

                item.open

            );



        }
    );



});