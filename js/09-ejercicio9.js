/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Dificultad:  🟢🟡
*/

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