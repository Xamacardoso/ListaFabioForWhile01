import { getpositivenumber, write } from "./utils/io_utils.js";

/*8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.*/

function main() {
    // Entrada
    const num = getpositivenumber('Digite um numero: ')
    const limite_superior = getpositivenumber('Limite superior: ')
    const limite_inferior = getpositivenumber('Limite inferior: ')
    // Processamento
    let count = limite_inferior
    while (count <= limite_superior){
        if (count%num == 0){
            // Saída
            write(count)
        }
        // Convergencia de Dados
        count++
    }
}

main()