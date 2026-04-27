let empleados = ["Juan", "María", "Pedro", "Ana", "Luis"];
let salarios = [3000, 3500, 4000, 4500, 5000];
//Muestro con un ciclo for el nombre del empleado y su salario
for (let i = 0; i < empleados.length; i++) {
    console.log(`${empleados[i]} tiene un salario de $${salarios[i]}`);
}