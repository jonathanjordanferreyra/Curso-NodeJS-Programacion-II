export function Multiplicar(base = 1, limite = 10) {
    console.log(`Tabla de multiplicar del ${base} hasta el ${limite}`);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}