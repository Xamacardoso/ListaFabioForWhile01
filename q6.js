import { getpositivenumber, write } from "./utils/io_utils.js";

/*,6. Escreva a tabuada dos números de 1 a 10.*/

function main() {
    let x = 1
    while(x <= 10) {
        let y = 1
        while(y<=10){
            write(`${x} x ${y} = ${x*y}`)
            y++
        }
        
        x++
    }
}

main()