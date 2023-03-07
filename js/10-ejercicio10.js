/*Dificultad:  🟢🟡
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/

let num = prompt(" Ingrese un numero");
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
  document.write("El numero es divisible por 2,3,5 o 7");
} else {
  document.write("El numero no es divisible por 2,3,5 o 7");
}
