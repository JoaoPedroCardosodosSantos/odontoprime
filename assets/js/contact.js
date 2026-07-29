/* ==========================================================
   ODONTOPRIME
   CONTACT JAVASCRIPT

   Responsibilities:
   - Handle appointment form
   - Generate WhatsApp message
========================================================== */



const form =
document.querySelector(
    "#appointmentForm"
);



if(form){



form.addEventListener(
"submit",
(event)=>{


event.preventDefault();




const name =
document.querySelector(
"#name"
).value;




const phone =
document.querySelector(
"#phone"
).value;




const service =
document.querySelector(
"#service"
).value;





const message =

`Olá, meu nome é ${name}.
Gostaria de agendar uma consulta.

Tratamento de interesse:
${service}

Meu WhatsApp:
${phone}`;





const whatsappNumber =
"5511999999999";





const url =

"https://wa.me/" +
whatsappNumber +
"?text=" +
encodeURIComponent(message);





window.open(
url,
"_blank"
);



}

);


}