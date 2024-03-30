import { getpositivenumber, write } from "./utils/io_utils.js";

/*7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.*/

function main() {
    const num = getpositivenumber('Digite um numero: ')
    let count = 1
    let soma = 0
    while(count<=num){
        soma += count
        count++
    }

    write(`A soma de todos os inteiros de 1 a ${num} equivale a ${soma}`)
}

main()