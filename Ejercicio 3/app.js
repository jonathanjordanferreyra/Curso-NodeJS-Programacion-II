/*
Realizar un programa que muestre la nota del alumno como: A, B, C, D, F
DONDE:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60 */

let nota = 100;
if (nota >= 90) {
    console.log("La nota del alumno es: A");
} else if (nota >= 80) {
    console.log("La nota del alumno es: B");
} else if (nota >= 70) {
    console.log("La nota del alumno es: C");
} else if (nota >= 60) {
    console.log("La nota del alumno es: D");
} else {
    console.log("La nota del alumno es: F");
}