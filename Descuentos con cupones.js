const cupones = [
    "cupon1",
    "cupon2",
    "cupon3",
];


function calcularPrecioConDescuento (precio, cupones) {
    const porcentajePrecioConDescuento = 100 - cupones;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function botonPrecioFinal() {
    const inputPrecio = document.getElementById("InputPrecio");
    const precio = inputPrecio.value;

    const inputCupon = document.getElementById("InputCupon");
    const cupones = inputCupon.value;
  
    let descuento;
  
    switch(cupones) {
      case "cupon1":
        descuento = 15;
      break;
      case "cupon2":
        descuento = 20;
      break;
      case "cupon3":
        descuento = 25;
      break;
    }
  
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const resultado = document.getElementById("resultado")
    resultado.innerText = "El precio final es de: $" + precioConDescuento;
  }