// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function botonPrecioFinal() {
    const inputPrecio = document.getElementById("InputPrecio");
    const valor = inputPrecio.value;

    const inputDescuento = document.getElementById("InputDescuento");
    const descuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valor, descuento);

    const resultado = document.getElementById("resultado")
    resultado.innerText = "El precio final es de: $" + precioConDescuento;
}





// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });