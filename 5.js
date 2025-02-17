const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã", "uva"];

const contagem = {};

for (const palavra of palavras) {
    if (contagem[palavra]) {
        contagem[palavra]++; 
    } else {
        contagem[palavra] = 1; 
    }
}

console.log("Frequência das palavras:");
for (const palavra in contagem) {
    console.log(`${palavra}: ${contagem[palavra]}`);
}
