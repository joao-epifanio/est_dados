

function arraySum(array: number[]): number {
    // Caso base: se o array tiver apenas um elemento, retorna esse elemento
    if (array.length === 1) {
        return array[0];
    } else {
        // Divide o array ao meio
        const metade: number = Math.floor(array.length / 2);
        const primeiraMetade: number[] = array.slice(0, metade);
        const segundaMetade: number[] = array.slice(metade);

        // Retorna a soma da primeira metade, mais a soma da segunda metade
        return arraySum(primeiraMetade) + arraySum(segundaMetade);
    }
}

export {
    arraySum
}
