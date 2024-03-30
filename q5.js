import { getpositivenumber, write } from "./utils/io_utils.js";

/*5. Leia um número, calcule e escreva seu fatorial. */

function main() {
    // Entrada
    const num = getpositivenumber('Digite um numero: ')
    // Processamento
    let fatorial = 1
    let count = 1
    while(count <= num) {
        fatorial *= count
        // Convergencia de dados
        count++
    }
    //Saída
    write(`O fatorial ${num}! é ${fatorial}`)
}

main()