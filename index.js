const productos = [
    {
        id: 1,
        nombre: "Vacio",
        precio: 3000,
        stock: 11,
    },
    {
        id: 2,
        nombre: "Costilla",
        precio: 5000,
        stock: 29,
    },
    {
        id: 3,
        nombre: "Chorizo",
        precio: 1500,
        stock: 53,
    },
];

const agregarProductos = ({ nombre, precio, stock }) => {
    productos.push({ id: 4, nombre, precio, stock });
};

const mostrarProductos = () => {
    let mensajeInformativo = "";
    for (let producto of productos) {
        mensajeInformativo += `
        ID : ${producto.id}
        Nombre : ${producto.nombre}
        Precio : ${producto.precio}
        Stock : ${producto.stock}\n
        `;
    }
    console.log(mensajeInformativo);
};

const solicitarDatosDelProducto = () => {
    let nombreProducto = prompt("Ingresa el nombre del producto");
    let precioDelProducto = parseFloat(
        prompt("Ingresa el precio")
    );
    let stock = parseInt(
        prompt("Ingresa la cantidad de unidades disponible")
    );
    if (nombreProducto && !isNaN(precioDelProducto) && !isNaN(stock)) {
        return { nombre: nombreProducto, precio: precioDelProducto, stock };
    } else {
        alert("Ingresa datos validos");
    }
};

const eliminarProducto = (nombre) => {
    const indice = productos.findIndex(
        (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (indice !== -1) {
        productos.splice(indice, 1);
        console.log(`Producto ${nombre} eliminado con exito`);
        mostrarProductos();
    } else {
        alert(`Producto ${nombre} no encontrado`);
    }
};
const encontrarProductosBaratos = (precioMaximo) => {
    const productosBaratos = productos.filter(
        (producto) => producto.precio < precioMaximo
    );

    if (productosBaratos.length > 0) {
        console.log("Productos mas baratos que " + precioMaximo + ":");
        productosBaratos.map((producto) => {
        console.log(producto.nombre);
        });
    } else {
        console.log("No hay productos mas baratos que :" + precioMaximo);
    }
};

const main = () => {
    let opcion = "";

    while (opcion !== "5") {
        opcion = prompt(
        "Selecciona una opcion: \n1. Agregar Productos \n2. Ver Productos \n3. Eliminar producto \n4. Productos Baratos \n5. Salir"
        );
        switch (opcion) {
        case "1":
            const nuevoProducto = solicitarDatosDelProducto();
            if (nuevoProducto) {
            agregarProductos(nuevoProducto);
            }
            break;
        case "2":
            mostrarProductos();
            break;
        case "3":
            const productoAEliminar = prompt(
            "ingresa el nombre del producto a eliminar"
            );
            eliminarProducto(productoAEliminar);
            break;
        case "4":
            const precioMaximo = parseFloat(
            prompt("Ingresa el precio maximo para encontrar productos")
            );
            encontrarProductosBaratos(precioMaximo);
            break;
        case "5":
            console.log("Saliendo...");
            break;
        default:
            alert("Opcion no valida . Por favor selecciona de nuevo");
        }
    }
};
main();