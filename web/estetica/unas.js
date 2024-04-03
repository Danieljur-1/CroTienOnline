function cargarContenido(seccion) {
    var contenido = document.getElementById('contenido');
    contenido.innerHTML = ''; // Limpiamos el contenido actual

    // Simulamos datos de productos para las uñas
    var productosUnas = [
        { nombre: 'Esmalte de Uñas Duradero', imagen: 'https://cromozona.com/wp-content/uploads/2021/02/jvone-milano-nails-430x600.jpg', descripcion: 'Descripción del Esmalte de Uñas Duradero...' },
        { nombre: 'Kit de Manicura Profesional', imagen: 'https://cromozona.com/wp-content/uploads/2021/02/jvone-milano-nails-430x600.jpg', descripcion: 'Descripción del Kit de Manicura Profesional...' },
        // Agrega más productos para las uñas según sea necesario
    ];

    // Creamos elementos para cada producto y los añadimos al contenido
    productosUnas.forEach(function(producto) {
        var nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('producto');

        var nuevaImagen = document.createElement('img');
        nuevaImagen.src = producto.imagen;

        var nombreProducto = document.createElement('h3');
        nombreProducto.textContent = producto.nombre;

        var descripcionProducto = document.createElement('p');
        descripcionProducto.textContent = producto.descripcion;

        nuevoProducto.appendChild(nuevaImagen);
        nuevoProducto.appendChild(nombreProducto);
        nuevoProducto.appendChild(descripcionProducto);

        contenido.appendChild(nuevoProducto);
    });

}

document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('plegable');

    select.addEventListener('change', function () {
        var selectedOption = select.options[select.selectedIndex];
        var url = selectedOption.value;
        window.location.href = url;
    })

});