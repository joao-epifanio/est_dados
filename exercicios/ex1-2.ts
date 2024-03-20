/*A)Uma estrutura seleção do Cpo selecione-caso contendo 3 opções, onde cada opção, ao ser
aCvada, é executada sem que as opções seguintes sejam acionadas. */
let opcao: number = 3; // Altere o valor para testar diferentes casos

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada.");
        break;
    case 2:
        console.log("Opção 2 selecionada.");
        break;
    case 3:
        console.log("Opção 3 selecionada.");
        break;
    default:
        console.log("Opção inválida.");
        break;
}


/*B) Uma estrutura de seleção do Cpo selecione-caso contendo 3 opções, onde cada opção, ao
ser aCvada, é executada e as demais op*/

let opcao: number = 2; // Altere o valor para testar diferentes casos

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada.");
    case 2:
        console.log("Opção 2 selecionada.");
    case 3:
        console.log("Opção 3 selecionada.");
        break;
    default:
        console.log("Opção inválida.");
        break;
}

/*C)Uma estrutura de seleção contendo 3 if-else aninhados*/
let opcao: number = 2; // Altere o valor para testar diferentes casos

if (opcao === 1) {
    console.log("Opção 1 selecionada.");
} else {
    if (opcao === 2) {
        console.log("Opção 2 selecionada.");
    } else {
        if (opcao === 3) {
            console.log("Opção 3 selecionada.");
        } else {
            console.log("Opção inválida.");
        }
    }
}

/*D) Uma estrutura de seleção contendo 3 ifs independentes, sequenciais.*/ 
let opcao: number = 2; // Altere o valor para testar diferentes casos

if (opcao === 1) {
    console.log("Opção 1 selecionada.");
}

if (opcao === 2) {
    console.log("Opção 2 selecionada.");
}

if (opcao === 3) {
    console.log("Opção 3 selecionada.");
}

/*E)e) Uma estrutura de repeCção do Cpo while. */
let contador: number = 0;

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

/*f)Uma estrutura de repeCção do Cpo do-while*/
let contador: number = 0;

do {
    console.log("Contador: " + contador);
    contador++;
} while (contador < 5);
