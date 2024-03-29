document.addEventListener("DOMContentLoaded", function () {
    const carritoLista = document.getElementById("carrito-lista");
    const totalPrecio = document.getElementById("total-precio");
    const reservarBtn = document.getElementById("reservar");
    const formulario = document.getElementById("formulario");
    const eliminarTodosBtn = document.createElement("button"); // Nuevo botón

    eliminarTodosBtn.textContent = "Eliminar Todos los Productos"; // Texto del botón
    eliminarTodosBtn.id = "eliminar-todos"; // ID del botón
    eliminarTodosBtn.addEventListener("click", eliminarTodosProductos); // Evento clic del botón
    document.getElementById("contenido").appendChild(eliminarTodosBtn); // Añadir botón al DOM

    mostrarCarrito();

    // Función para mostrar el carrito
    function mostrarCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoLista.innerHTML = "";

        let total = 0;

        carrito.forEach((producto) => {
            const item = document.createElement("div");
            item.classList.add("item", "col-3", "col-s-12");
            item.innerHTML = `
                <div class="info">
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio.toFixed(2)}€</p>
                    <p>Unidades: 
                        <button class="remove-item" data-nombre="${producto.nombre}">-</button>
                        <input type="number" class="ancho" value="${producto.cantidad}" min="1">
                        <button class="add-item" data-nombre="${producto.nombre}">+</button>
                    </p>
                    <p>Precio Total: ${(producto.precioTotal).toFixed(2)}€</p>
                </div>
            `;
            carritoLista.appendChild(item);

            total += producto.precioTotal;
        });

        totalPrecio.textContent = total.toFixed(2) + "€";

        const addButtons = document.querySelectorAll(".add-item");
        const removeButtons = document.querySelectorAll(".remove-item");

        addButtons.forEach(button => {
            button.addEventListener("click", () => {
                const nombre = button.dataset.nombre;
                modificarUnidades(nombre, 1);
            });
        });

        removeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const nombre = button.dataset.nombre;
                modificarUnidades(nombre, -1);
            });
        });
    }

    // Función para modificar las unidades de un producto en el carrito
    function modificarUnidades(nombre, cambio) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const index = carrito.findIndex(item => item.nombre === nombre);

        if (index !== -1) {
            carrito[index].cantidad += cambio;

            if (carrito[index].cantidad < 1) {
                carrito.splice(index, 1); // Si el número de unidades es menor a 1, eliminar el producto del carrito
            } else {
                carrito[index].precioTotal = carrito[index].precio * carrito[index].cantidad;
            }
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito(); // Actualizar la vista del carrito
    }

    // Evento para el botón "Eliminar Todos los Productos"
    function eliminarTodosProductos() {
        localStorage.removeItem("carrito");
        mostrarCarrito();
    }

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
        const datos = [["Nombre Cliente", "Email Cliente", "Nombre Producto", "Precio Unitario", "Cantidad", "Precio Total"]];

        carrito.forEach(producto => {
            datos.push([nombreCliente, emailCliente, producto.nombre, producto.precio.toFixed(2), producto.cantidad, producto.precioTotal.toFixed(2)]);
        });

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(datos);
        XLSX.utils.book_append_sheet(wb, ws, "Reserva");
        XLSX.writeFile(wb, "reserva.xlsx");
    });

    // Función para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Validar que el campo de teléfono solo contenga números
    formulario.telefono.addEventListener("input", function(event) {
        this.value = this.value.replace(/\D/g, '');
    });


});

document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('plegable');

    select.addEventListener('change', function () {
        var selectedOption = select.options[select.selectedIndex];
        var url = selectedOption.value;
        window.location.href = url;
    })
});
