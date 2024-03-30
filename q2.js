import { getpositivenumber, write } from "./utils/io_utils.js";

/*1. Leia N e escreva todos os números inteiros de 1 a N. */

function main() {
    // Entrada
    const n = getpositivenumber('Digite um numero: ')
    let count = 1
    // Processamento
    while(count <= n) {
        //Saída
        write(count)
        // Convergencia de dados
        count++
    }
}

main()