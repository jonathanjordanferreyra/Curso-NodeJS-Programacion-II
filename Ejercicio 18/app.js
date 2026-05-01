// 9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
// nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
// Ejemplo:
// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
// let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman

function heroesThatStartsWith(heroes, letter) {
    let filteredHeroes = [];
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].startsWith(letter)) {
            filteredHeroes.push(heroes[i]);
        }
    }
    return filteredHeroes;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(herosWithLetterS); // She Hulk, Spiderman