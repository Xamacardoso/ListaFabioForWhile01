import { getpositivenumber, write } from "./utils/io_utils.js";

/*4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R.*/

function main() {
    // Entrada
    const termo_inicial = getpositivenumber('Termo inicial: ')
    const r = getpositivenumber('Razão da Progressão Geometrica: ')
    const limite = getpositivenumber('Limite superior: ')
    // Processamento
    let count = termo_inicial

    while(count <= limite) {
        //Saída
        write(count)
        // Convergencia de dados
        count *= r
    }
}

main()