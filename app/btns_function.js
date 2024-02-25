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
//----------------------------------------------------------------------------------------------


//----------------------Read it? btn--------------------------------------------
