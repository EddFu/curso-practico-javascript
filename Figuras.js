//Codigo Cuadrado

console.group("Cuadrados");


// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) { return lado * 4;}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) { return lado * lado; }


// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");


console.groupEnd();

//Codigo Triangulo

console.group("Triangulos");


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// // const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
   return lado1 + lado2 + base;
} 

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

// console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo Circulo

console.group("Circulos");

//Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro

function diametroCirculo(radio) {
   return radio * 2;
}


// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;

// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area


// const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();


//Triangulo iscoseles funciones

function alturaTrianguloIsoceles(lado1, lado2, base){
    if (lado1 === lado2 && lado1 !=base){
        alert("Tu triangulo es isoceles");
        const altura = Math.sqrt(lado1**2 - (base**2/4))
        alert( Number (altura))
    }
else{
    alert("Tu triangulo no es isoceles")}
}

//Aqui interactuamos con html

//funciones cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("el perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//funciones triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = (input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = (input2.value);

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = (input3.value);

    const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(value3)); 
    // Number(value1) + Number(value2) + Number(value3)
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = (input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = (input2.value);

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = (input3.value);
    
    const area = areaTriangulo(Number(value1), Number(value2), Number(value3));
    alert(area);
}


//funciones circulo 

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = (input.value);

    const diametro = diametroCirculo(value);
    alert(diametro)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = (input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = (input.value);

    const area = areaCirculo(value);
    alert(area)
}

