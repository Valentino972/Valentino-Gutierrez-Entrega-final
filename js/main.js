const contenedorProductos = document.querySelector(".container-productos")
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
};

getProducts();

productos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="card" style="width: 12rem; background-color: rgb(226, 221, 221);">
    <img src="${producto.imagen}" alt="${producto.titulo}">
    <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <p class="card-text">Bolsas de residuo y consorcio empaquetadas de a 10 unidades.</p>
        <p class="precio-producto" style="margin-top: 6px;">$${producto.precio}</p>
    </div>
    `;

    contenedorProductos.append(div);

    let botonComprar = document.createElement("button");
    botonComprar.innerText ="Comprar";
    botonComprar.className = "comprar";

    div.append(botonComprar);
    
    botonComprar.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                borderRadius: "2rem",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);

        if (repeat){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                nombre: producto.categoria.nombre,
                id: producto.id,
                imagen: producto.imagen,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        };
        carritoCounter();
    });
});













