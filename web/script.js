document.addEventListener('DOMContentLoaded', function() {
    const desplegado = document.getElementById('desplegado');
    const plegable = document.getElementById('plegable');

    plegable.addEventListener('change', function() {
        window.location.href = this.value;
    });

    // Mostrar/ocultar el menú desplegado
    document.addEventListener('click', function(event) {
        if (event.target.matches('.inicio img')) {
            desplegado.classList.toggle('mostrar');
        } 
        
        else if (!event.target.closest('#desplegado')) {
            desplegado.classList.remove('mostrar');
        }
    });
});
