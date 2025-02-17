function isPar(numero) {
    return numero % 2 === 0;
}

function filtrarPares(array) {
    const numerosPares = [];
    
    for (let i = 0; i < array.length; i++) {
        if (isPar(array[i])) {
            numerosPares.push(array[i]);
        }
    }
    
    return numerosPares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = filtrarPares(numeros);

console.log(pares);
