import { getnumber, getpositivenumber, write } from "./utils/io_utils.js";

/*13. Leia N e uma lista de N números e escreva o maior número da lista.*/

function main() {
    // Entrada
    const n = getpositivenumber('Digite uma quantidade de numeros: ')
    let count = 1
    let maior = 0
    
    // Processamento
    while (count<=n){
        if (count == 1){
            maior = getnumber(`N° ${count}: `)
            count ++
        }else{
            let num = getnumber(`N° ${count}: `)
            if (num>maior){
                maior = num
            }
            // Convergencia de Dados
            count++
        }
    }

    // Saída
    write(`Maior numero: ${maior}`)
}

main()
