import { getpositivenumber, write } from "./utils/io_utils.js";

/*10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.*/

function main() {
    // Entrada
    const limite_superior = getpositivenumber('Limite superior: ')
    const limite_inferior = getpositivenumber('Limite inferior: ')
    // Processamento
    let count = limite_inferior
    while (count <= limite_superior){
        if (count%2 != 0){
            // Saída
            write(count)
        }
        // Convergencia de Dados
        count++
    }
}

main()