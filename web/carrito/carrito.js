 
document.addEventListener("DOMContentLoaded", function () {
    const reservarBtn = document.getElementById("reservar");
    const formulario = document.getElementById("formulario");

    // Evento para el botón "Reservar Productos"
    reservarBtn.addEventListener("click", function() {
        const nombreCliente = formulario.nombre.value;
        const emailCliente = formulario.email.value;

        // Validar email
        if (!validarEmail(emailCliente)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return;
        }

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const datos = {
            nombreCliente: nombreCliente,
            emailCliente: emailCliente,
            carrito: carrito
        };

        // Enviar los datos al servidor utilizando AJAX
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "enviar.php");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("Los productos se han reservado correctamente.");
                // Limpiar el carrito después de reservar
                localStorage.removeItem("carrito");
                mostrarCarrito();
            } else {
                alert("Ha ocurrido un error al reservar los productos.");
            }
        };
        xhr.send(JSON.stringify(datos));
    });

    // Función para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
x