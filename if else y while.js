

// function CalcularEdad() {
//     if (edad >= 18) {
//         ("Felicidades eres mayor de edad");
//     }
//     if (edad < 18) {
//         ("Lastimosamente eres menor de edad");
      
//     }
// };

// function CalcularEdad(edad) {
// switch (edad) {
//   case (edad >= 18): "Felicidades eres mayor de edad"
//     break;
//   case (edad < 18): "Lastimosamente eres menor de edad"
//     break;
// }}
var edad 

function CalcularEdad(edad) {
    if (edad >= 18) {
        return ("Felicidades eres mayor de edad puedes ingresar a la pagina");
    }
    if (edad < 18) {
        return ("Lastimosamente eres menor de edad no tienes permitido ingresar a esta pagina");
      
    };
};

function EdadMensaje() {

    const input = document.getElementById("InputEdad");
    const value = input.value

    const resultado = document.getElementById("resultado");
    resultado.innerText = CalcularEdad (value);
    
};