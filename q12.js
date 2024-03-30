import { getpositivenumber, write } from "./utils/io_utils.js";

/*12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.*/

function main() {
    // Entrada
    const n = getpositivenumber('Digite uma quantidade de numeros: ')
    let count = 1
    let soma = 0
    
    // Processamento
    while (count<=n){
        let num = getpositivenumber(`N° ${count}: `)
        soma += num
        // Convergencia de Dados
        count++
    }
    const media = soma/n

    // Saída
    write(`Soma dos numeros: ${soma}  ||  Media dos numeros: ${media}`)
}

main()
