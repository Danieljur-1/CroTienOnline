document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const quantityIncreaseButtons = document.querySelectorAll(".quantity-increase");
    const quantityDecreaseButtons = document.querySelectorAll(".quantity-decrease");
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productContainer = button.closest('.product');
            const nombreProducto = productContainer.querySelector('h3').textContent;
            const precioProducto = parseFloat(productContainer.querySelector('.price').textContent.replace("€", ""));
            const cantidadProducto = parseInt(productContainer.querySelector('input[type="number"]').value);
            const imgProducto = productContainer.querySelector('img').src;

            addToCart(nombreProducto, precioProducto, cantidadProducto, imgProducto);
        });
    });

    quantityIncreaseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const inputField = button.previousElementSibling;
            inputField.stepUp();
        });
    });

    quantityDecreaseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const inputField = button.nextElementSibling;
            inputField.stepDown();
        });
    });

    function addToCart(nombre, precio, cantidad, img) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        
        const index = carrito.findIndex(item => item.nombre === nombre);
        
        if (index !== -1) {
            carrito[index].cantidad += cantidad;
            carrito[index].precioTotal = carrito[index].precio * carrito[index].cantidad;
        } else {
            carrito.push({
                nombre: nombre,
                precio: precio,
                img: img,
                cantidad: cantidad,
                precioTotal: precio * cantidad
            });
        }
        
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Muestra un aviso temporal de 2 segundos
        const aviso = document.getElementById("aviso");
        aviso.textContent = `${cantidad} ${nombre} añadid@(s) al carrito!`;
        aviso.style.display = "block";

        setTimeout(function(){
            aviso.style.display = "none";
        }, 2000);
    }

});

document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('plegable');

    select.addEventListener('change', function () {
        var selectedOption = select.options[select.selectedIndex];
        var url = selectedOption.value;
        window.location.href = url;
    })
});

function toggleSelect() {
    var select = document.getElementById('plegable');
    select.classList.toggle('select-open');
}
