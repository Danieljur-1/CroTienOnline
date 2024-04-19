function cargarContenido(seccion) {
    var contenido = document.getElementById('contenido');
    contenido.innerHTML = ''; // Limpiamos el contenido actual

    // Simulamos datos de productos para el cuerpo
    var productosCuerpo = [
        { nombre: 'Crema Hidratante Corporal', imagen: 'https://cromozona.com/wp-content/uploads/2021/02/jvone-milano-nails-430x600.jpg', descripcion: 'Descripción de la Crema Hidratante Corporal...' },
        { nombre: 'Exfoliante Revitalizante', imagen: 'https://cromozona.com/wp-content/uploads/2021/02/jvone-milano-nails-430x600.jpg', descripcion: 'Descripción del Exfoliante Revitalizante...' },
        // Agrega más productos para el cuerpo según sea necesario
    ];

    // Creamos elementos para cada producto y los añadimos al contenido
    productosCuerpo.forEach(function(producto) {
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