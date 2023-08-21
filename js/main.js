// PRODUCTOS
// Array de productos
const productos = [
    {
        id:"film-negro",
        titulo:"Film negro",
        imagen:"../img/png_20230625_150911_0000.png",
        descripcion:"Bolsas de residuo y consorcio empaquetadas de a 10 unidades",
        categoria: {
            nombre:"Film negro",
            id:"film-negro",
        },
        precio: "$1000"
    },
    {
        id:"bolsa-camiseta-verde",
        titulo:"Bolsa camiseta 01",
        imagen:"../img/png_20230625_151506_0000.png",
        descripcion:"Bolsas para comercio ciudad. Medida:45x55 Bulto por mil unidades",
        categoria: {
            nombre:"Bolsa camiseta",
            id:"bolsa-camiseta-verde",
        },
        precio: "$1000"  
    },
    {
        id:"bolsa-camiseta-negra",
        titulo:"Bolsa camiseta 02",
        imagen:"../img/png_20230625_151553_0000.png",
        descripcion:"Bolsas para comercio ciudad. Medida:45x55 Bulto por mil unidades",
        categoria: {
            nombre:"Bolsa camiseta",
            id:"bolsa-camiseta-negra",
        },
        precio: "$1000"
    },
    {
        id:"bolsa-camiseta",
        titulo:"Bolsa camiseta 03",
        imagen:"../img/png_20230625_151711_0000.png",
        descripcion:"Bolsa camiseta, distintas medidas y colores",
        categoria: {
            nombre:"Bolsa camiseta",
            id:"bolsa-camiseta-",
        },
        precio: "$1000"
    },
    {
        id:"bolsa-plantines",
        titulo:"Bolsa plantines",
        imagen:"../img/20230625_151650_0000.png",
        descripcion:"Bolsa 100 micrones de todas las medidas con material UV super reforzada",
        categoria: {
            nombre:"bolsa plantines",
            id:"bolsa-plantines",
        },
        precio: "$1000"
    },
    {
        id:"bolsa-riñon",
        titulo:"Bolsa riñon",
        imagen:"../img/20230625_145146_0000.png",
        descripcion:"Bolsa Riñón de distintas medidas y colores",
        categoria: {
            nombre:"bolsa riñon",
            id:"bolsa-riñon",
        },
        precio: "$1000"
    },
    {
        id:"bolsa-camiseta-personalizada",
        titulo:"Bolsa camiseta personalizada",
        imagen:"../img/20230625_145722_0000.png",
        descripcion:"Bolsa camiseta, distintas medidas y colores",
        categoria: {
            nombre:"Bolsa camiseta personalizada",
            id:"bolsa-camiseta-pesonalizada",
        },
        precio: "$1000"
    },
    {
        id:"bolsa-riñon-personalizada",
        titulo:"Bolsa riñon personalizada",
        imagen:"../img/20230625_150044_0000.png",
        descripcion:"Bolsa Riñón de distintas medidas y colores",
        categoria: {
            nombre:"Bolsa riñon personalizada",
            id:"bolsa-riñon-personalizada",
        },
        precio: "$1000"
    }
];

const contenedorProductos = document.querySelector(".container-productos")






function cargarProductos () {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="card" style="width: 12rem; background-color: rgb(226, 221, 221);">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">Bolsas de residuo y consorcio empaquetadas de a 10 unidades.</p>
            <button style="background-color:#28b628; border-radius: 1.3rem; padding: 2px;" class="button-productos">Agregar</button>
            <p class="precio-producto" style="margin-top: 6px;">${producto.precio}</p>
        </div>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos();
