let btnModal = document.getElementById("btnModal");

let miModal = new bootstrap.Modal (document.getElementById ("miModal"));

btnModal.addEventListener ("click", function () {

miModal.show ()

})

setTimeout (function() {
    miModal.show()
},2000); 
