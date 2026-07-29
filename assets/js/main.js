/* ==========================================================
   ODONTOPRIME
   MAIN JAVASCRIPT

   Responsibilities:
   - Mobile menu
   - Header scroll effect
   - Smooth navigation
   - Global initialization
========================================================== */



/* ==========================================================
   DOM ELEMENTS
========================================================== */


const header = document.querySelector(".header");

const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".navigation");

const navigationLinks = document.querySelectorAll(
    ".navigation a"
);






/* ==========================================================
   MOBILE MENU
========================================================== */


function toggleMenu(){


    if(!menuToggle || !navigation){
        return;
    }


    const isActive =
    navigation.classList.toggle("active");


    menuToggle.setAttribute(
        "aria-expanded",
        isActive
    );


    menuToggle.classList.toggle(
        "active"
    );


}






if(menuToggle){


    menuToggle.addEventListener(
        "click",
        toggleMenu
    );


}







/* ==========================================================
   CLOSE MOBILE MENU
========================================================== */


navigationLinks.forEach(link => {


    link.addEventListener(
        "click",
        () => {


            if(!navigation){
                return;
            }


            navigation.classList.remove(
                "active"
            );


            menuToggle?.classList.remove(
                "active"
            );


            menuToggle?.setAttribute(
                "aria-expanded",
                "false"
            );


        }
    );


});








/* ==========================================================
   HEADER SCROLL EFFECT
========================================================== */


function handleHeaderScroll(){


    if(!header){
        return;
    }


    if(window.scrollY > 50){


        header.classList.add(
            "scrolled"
        );


    }else{


        header.classList.remove(
            "scrolled"
        );


    }


}






window.addEventListener(
    "scroll",
    handleHeaderScroll
);







/* ==========================================================
   SMOOTH SCROLL
========================================================== */


document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach(anchor => {


    anchor.addEventListener(
        "click",
        function(event){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );


            if(target){


                event.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        }
    );


});







/* ==========================================================
   ACTIVE MENU LINK
========================================================== */


const sections =
document.querySelectorAll(
    "section[id]"
);



function highlightMenu(){


    const scrollPosition =
    window.scrollY + 150;



    sections.forEach(section => {


        const sectionTop =
        section.offsetTop;


        const sectionHeight =
        section.offsetHeight;


        const sectionId =
        section.getAttribute(
            "id"
        );



        const menuLink =
        document.querySelector(
            `.navigation a[href="#${sectionId}"]`
        );



        if(
            scrollPosition >= sectionTop &&
            scrollPosition <= sectionTop + sectionHeight
        ){


            menuLink?.classList.add(
                "active"
            );


        }else{


            menuLink?.classList.remove(
                "active"
            );


        }



    });


}





window.addEventListener(
    "scroll",
    highlightMenu
);







/* ==========================================================
   CURRENT YEAR FOOTER
========================================================== */


const yearElement =
document.querySelector(
    "[data-year]"
);



if(yearElement){


    yearElement.textContent =
    new Date().getFullYear();


}







/* ==========================================================
   INITIALIZATION
========================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        handleHeaderScroll();


        highlightMenu();


        console.log(
            "OdontoPrime initialized successfully."
        );


    }
);

lucide.createIcons();