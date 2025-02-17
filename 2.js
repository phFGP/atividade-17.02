let saldo = 1000;
let opcao;

do {
    console.log("\n--- Menu Banco ---");
    console.log("1 - Ver saldo");
    console.log("2 - Sacar");
    console.log("3 - Depositar");
    console.log("4 - Sair");

    opcao = parseInt(prompt("Escolha uma opção:"));

    switch (opcao) {
        case 1:
            console.log(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
            break;
        case 2:
            let saque = parseFloat(prompt("Digite o valor para sacar:"));
            if (saque > saldo) {
                console.log("Saldo insuficiente!");
            } else if (saque > 0) {
                saldo -= saque;
                console.log(`Você sacou R$${saque.toFixed(2)}. Novo saldo: R$${saldo.toFixed(2)}`);
            } else {
                console.log("Valor inválido para saque!");
            }
            break;
        case 3:
            let deposito = parseFloat(prompt("Digite o valor para depositar:"));
            if (deposito > 0) {
                saldo += deposito;
                console.log(`Você depositou R$${deposito.toFixed(2)}. Novo saldo: R$${saldo.toFixed(2)}`);
            } else {
                console.log("Valor inválido para depósito!");
            }
            break;
        case 4:
            console.log("Obrigado por usar nosso banco!");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
} while (opcao !== 4);
