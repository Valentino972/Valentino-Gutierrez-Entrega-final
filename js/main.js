// PRODUCTOS
// Array de productos
const productos = [
    {
        titulo:"Film negro",
        id:"film-negro",
        imagen:"../img/png_20230625_150911_0000.png",
        descripcion:"Bolsas de residuo y consorcio empaquetadas de a 10 unidades",
        categoria: {
            nombre:"Film negro",
            id:"film-negro",
        },
        precio: 5000
    },
    {
        titulo:"Bolsa camiseta 1",
        id:"bolsa-camiseta-verde",
        imagen:"../img/png_20230625_151506_0000.png",
        descripcion:"Bolsas para comercio ciudad. Medida:45x55 Bulto por mil unidades",
        categoria: {
            nombre:"Bolsa camiseta verde",
            id:"bolsa-camiseta-verde",
        },
        precio: 1000
    },
    {
        titulo:"Bolsa camiseta 2",
        id:"bolsa-camiseta-negra",
        imagen:"../img/png_20230625_151553_0000.png",
        descripcion:"Bolsas para comercio ciudad. Medida:45x55 Bulto por mil unidades",
        categoria: {
            nombre:"Bolsa camiseta negra",
            id:"bolsa-camiseta-negra",
        },
        precio: 1000
    },
    {
        titulo:"Bolsa camiseta 3",
        id:"bolsa-camiseta",
        imagen:"../img/png_20230625_151711_0000.png",
        descripcion:"Bolsa camiseta, distintas medidas y colores",
        categoria: {
            nombre:"Bolsa camiseta ",
            id:"bolsa-camiseta-",
        },
        precio: 1000
    },
    {
        titulo:"Bolsa plantines",
        id:"bolsa-plantines",
        imagen:"../img/20230625_151650_0000.png",
        descripcion:"Bolsa 100 micrones de todas las medidas con material UV super reforzada",
        categoria: {
            nombre:"bolsa plantines",
            id:"bolsa-plantines",
        },
        precio: 800
    },
    {
        titulo:"Bolsa riñon",
        id:"bolsa-riñon",
        imagen:"../img/20230625_145146_0000.png",
        descripcion:"Bolsa Riñón de distintas medidas y colores",
        categoria: {
            nombre:"bolsa riñon",
            id:"bolsa-riñon",
        },
        precio: 1500
    },
    {
        titulo:"Bolsa camiseta personalizada",
        id:"bolsa-camiseta-personalizada",
        imagen:"../img/20230625_145722_0000.png",
        descripcion:"Bolsa camiseta, distintas medidas y colores",
        categoria: {
            nombre:"Bolsa camiseta personalizada",
            id:"bolsa-camiseta-pesonalizada",
        },
        precio: 1200
    },
    {
        titulo:"Bolsa riñon personalizada",
        id:"bolsa-riñon-personalizada",
        imagen:"../img/20230625_150044_0000.png",
        descripcion:"Bolsa Riñón de distintas medidas y colores",
        categoria: {
            nombre:"Bolsa riñon personalizada",
            id:"bolsa-riñon-personalizada",
        },
        precio: 1800
    }
];
let carrito = []; 
const contenedorProductos = document.querySelector(".container-productos")



productos.forEach((producto) => {
    const div = document.createElement("div");
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
        carrito.push({
            nombre: producto.categoria.nombre,
            id: producto.id,
            imagen: producto.imagen,
            precio: producto.precio
        });
        localStorage.setItem("productoAgregado",JSON.stringify(carrito));
    });
    
});
    
verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalHeader.append(modalButton);  


    carrito.forEach((productos) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${productos.imagen}">
        <h3>${productos.nombre}</h3>
        <p>$${productos.precio}</p>
        `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className= 'total-content';
    totalCompra.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalCompra);
});












////////////////////////////////////////////////////////////////////////

// producto guardado en el LS
localStorage.setItem("productos", JSON.stringify(productos));











