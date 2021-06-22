let numero = parseInt(prompt("Ingrese un número"));
let validar = confirm("Desea continuar")


while (numero <= 10 && validar) {
    console.log(`El número es ${numero}`);
    validar = confirm("Desea continuar");
    numero++
}