// Ejercicio 4: Encontrar el número mayor en el arreglo
// Utilizando un ciclo FOR
// Arreglo: [1, 6, 8, 4, 2, 7, 10, 3, 5]

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

let numeroMayor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numeroMayor) {
    numeroMayor = numbers[i];
  }
}

console.log(`El número mayor es: ${numeroMayor}`);
