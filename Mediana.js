
const  lista1 = [
    1,200,4000,200000,375
];

lista1.sort(((a, b) => a - b));

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }


const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let mediana;

if (esPar(lista1.length)){
    // para pares
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    //para impares
    const elemento3 = lista1[mitadLista1];
    const elemento4 = lista1[mitadLista1 + 1];

    const promedioElemento1y2 = calcularMediaAritmetica( [
        elemento3,
        elemento4,
    ] );
    mediana =  Number(promedioElemento1y2)

} else {
    //para impares
    mediana = Number(lista1[mitadLista1]);
}