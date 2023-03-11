/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Dificultad:  🟢🟡
*/

/*
let frase = prompt('Escribe una frase');
frase = frase.toLowerCase();
console.log(frase);
for (let i = 0; i < frase.length; i++) {
	if (
		frase.substr(i, 1) == 'a' ||
		frase.substr(i, 1) == 'e' ||
		frase.substr(i, 1) == 'i' ||
		frase.substr(i, 1) == 'o' ||
		frase.substr(i, 1) == 'u'
	) {
		document.write(frase.substr(i, 1));
	}
}
*/

// REALIZACION CON CONDICIONALEZ<<

// String.length; devuelve la cantidad de caracteres
// charAt(indice); ontiene un caracter
// substring (desde,hasta); obtiene un caracter

const frase = prompt("Ingrese una frase");
// hola mundo (4)
console.log(frase.length)

if(frase.charAt(0) === 'a' || frase.charAt(0) === 'e'|| frase.charAt(0) === 'i' || frase.charAt(0) === 'o'|| frase.charAt(0) === 'u'){
	document.write(frase.charAt(0))
}

if(frase.charAt(1) === 'a' || frase.charAt(1) === 'e'|| frase.charAt(1) === 'i' || frase.charAt(1) === 'o'|| frase.charAt(1) === 'u'){
	document.write(frase.charAt(1))
}

if(frase.charAt(2) === 'a' || frase.charAt(2) === 'e'|| frase.charAt(2) === 'i' || frase.charAt(2) === 'o'|| frase.charAt(2) === 'u'){
	document.write(frase.charAt(2))
}

if(frase.charAt(3) === 'a' || frase.charAt(3) === 'e'|| frase.charAt(3) === 'i' || frase.charAt(3) === 'o'|| frase.charAt(3) === 'u'){
	document.write(frase.charAt(3))
}





