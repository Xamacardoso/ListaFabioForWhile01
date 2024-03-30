import { getpositivenumber, write } from "./utils/io_utils.js";

/*11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.*/

function main() {
    // Entrada
    const limite_superior = getpositivenumber('Limite superior: ')
    const limite_inferior = getpositivenumber('Limite inferior: ')
    // Processamento
    let count = limite_inferior
    while (count <= limite_superior){
        if (eh_primo(count)){
            // Saída
            write(count)
        }
        // Convergencia de Dados
        count++
    }
}

main()

function eh_primo(num){
    if (num==1){
        return false
    }else if (num == 2||num == 3 || num == 5 || num == 7){
        return true
    }else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
        return false
    }else{
        return true
    }

}