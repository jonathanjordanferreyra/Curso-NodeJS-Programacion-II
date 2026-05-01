// 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
// nombre que tenga más letras del arreglo, y debe de trabajar así:
// let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier
// Tip:
// let hero = 'Strider';
// hero.length; // 7

function largestNameOfArray(array) {
    let largestName = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > largestName.length) {
            largestName = array[i];
        }
    }
    return largestName;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); 