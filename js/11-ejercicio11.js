/*Dificultad:  🟢🟡
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/

let num = prompt(" Ingrese un numero");

if (num % 2 === 0) {
  document.write("El numero si es divisible por 2");
} else if (num % 3 === 0) {
  document.write("es divisible por 3");
} else if (num % 5 === 0) {
  document.write("Es divisible por 5");
} else if (num % 7 === 0) {
  document.write("Es divisible por 7");
} else {
  document.write("El numero es primo");
}