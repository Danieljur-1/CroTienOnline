document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('plegable');
    var menu = document.getElementById('menu');
    var optgroup = document.querySelector('optgroup');

    // Función para redirigir cuando se selecciona una opción
    select.addEventListener('change', function () {
        var selectedOption = select.options[select.selectedIndex];
        var url = selectedOption.value;

        // Si la opción seleccionada es "./peluqueria/peluqueria.html", redireccionar
        if (url === "./peluqueria/peluqueria.html") {
            window.location.href = url;
        }
    });

    // Función para mostrar u ocultar los elementos del optgroup
    optgroup.addEventListener('click', function () {
        // Si el optgroup está oculto, mostrarlo; de lo contrario, ocultarlo
        if (optgroup.style.display === 'none') {
            optgroup.style.display = 'block';
        } else {
            optgroup.style.display = 'none';
        }
    });

    // Función para manejar el cambio de vista del viewport
    function handleViewportChange() {
        // Obtener el select y el menú
        var select = document.getElementById('plegable');
        var menu = document.getElementById('menu');

        // Si es mayor o igual a 768px, mostrar el menú y ocultar el select
        if (window.innerWidth >= 768) {
            select.style.display = 'none';
            menu.style.display = 'block';
        } else {
            // Si es menor que 768px, mostrar el select y ocultar el menú
            select.style.display = 'block';
            menu.style.display = 'none';
        }
    }

    // Llamar a la función handleViewportChange al cargar la página
    handleViewportChange();

    // Escuchar el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleViewportChange);
});
