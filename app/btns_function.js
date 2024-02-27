//-------------------------------Form apear/disapear----------------------------------------------
document.getElementById('hideFormBtn').addEventListener('click', function () {
    var modalContent = document.querySelector('.modal-content');

    modalContent.classList.remove('show');

    // Usar 'transitionend' para esperar a que termine la transición antes de ocultar el modal
    modalContent.addEventListener('transitionend', function () {
        var modal = document.getElementById('modal');
        modal.style.display = 'none';
    }, { once: true }); // La opción { once: true } asegura que el evento se maneje solo una vez
});

document.getElementById('showFormBtn').addEventListener('click', function () {
    var modal = document.getElementById('modal');
    var modalContent = document.querySelector('.modal-content');
    modal.style.display = 'block';

    // Agregar la clase 'show' después de un breve retraso para permitir la transición
    setTimeout(function () {
        modalContent.classList.add('show');
    }, 50);
});

document.getElementById("isRead").addEventListener('click', () =>{
    var btnValue = document.getElementById("isRead")

    if (btnValue.className == 'yes'){
        btnValue.classList.replace('yes', "no")
        btnValue.value = "NO"
    } 
    else if (btnValue.className == 'no'){
        btnValue.classList.replace("no", 'yes' )
        btnValue.value = "YES"
    }
})
//----------------------------------------------------------------------------------------------


//----------------------Read it? btn--------------------------------------------
function toggleRead(event) {
    var btnValue = document.getElementById("bRead")
    if (event.target.id === "bRead"){
        var btnValue = event.target
        if (btnValue.className == 'yes'){
            btnValue.classList.replace('yes', "no")
            btnValue.textContent= "Not Read"
        } 
        else if (btnValue.className == 'no'){
            btnValue.classList.replace("no", 'yes' )
            btnValue.textContent = "Read"
        }
    }
}
document.getElementById('library').addEventListener("click", toggleRead);