let btnModal = document.getElementById ("btnModal");

//let miModal = document.getElementById ("miModal"); 


// lo siguiente permite importar el java del bootstrap. por eso la parte de new bootstrap.modal
let miModal = new bootstrap.Modal (document.getElementById ("miModal"));  



btnModal.addEventListener ("click", function () {

miModal.show () 

})


setTimeout ( function () {
miModal.show ()
},2000);