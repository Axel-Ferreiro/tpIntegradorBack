
const url = "http://localhost:3000/api";
//  GET //  

// Estas dos funciones son para el index 
async function obtenerDatosProductos() {
  try {

    // esperamos la respuesta en json de la peticion fetch
    let respuesta = await fetch(`${url}/products`);

    // transformamos la respuesta a json
    let datos = await respuesta.json();
    console.table(datos.payload);

    mostrarProductos(datos);

  } catch (error) {

    console.error("Error:", error);
  };
};

function mostrarProductos(array){
    //aca guardamos el array de productos 
    let listaProductos = array.payload;

    let productos_lista = document.getElementById("productos-lista");
    let htmlProducto = "";

    listaProductos.forEach(producto => {
        htmlProducto += `
                        <li class="li-listados productos-listados">
                            <img src="${producto.image}" alt="" class="img-listados">
                            <p>Id:${producto.id} / Nombre:${producto.name} / <strong>Precio:${producto.price} </strong></p>
                        </li>
        `
    });
    productos_lista.innerHTML = htmlProducto;
}
obtenerDatosProductos();
