const lista1 = [
    1,
    2,
    3,
    1,
    2,
    1,
    8,
    1,
    2,
    1,
    2,
    8,
];

const lista1count = {};

lista1.map(
    function(elemento){
        if(lista1count[elemento]) {
            lista1count[elemento] += 1;

            // lista1count[elemento] = lista1count[elemento] +1;
        
        } else {
            lista1count[elemento] = 1;
        }

        
    }
);

// const lista1Array = Object.entries(lista1count).sort(
//     function (valorAcumulado, nuevoValor) {
//         valorAcumulado - nuevoValor
//     }
// );

const lista1Array = Object.entries(lista1count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }    
    )

    const   moda = lista1Array[lista1Array.length - 1];