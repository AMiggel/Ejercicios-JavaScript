function platzom(str) {
	let translation = str
	// Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) { //endWith nos dice en que termina el string tolowercase para convertirlo en minuscula
		translation = str.slice(0, -2) //slice nos permite cortar caracteres
	}

	//Si la palbra inicia en z, se le añade pe al final
	if (str.toLowerCase().startsWith('z')) {
		translation = translation+"pe"
	}
	// SI la palabra traducida tiene más de 10 o más letras se debe partir a la mitad y guion en el medio
	length= translation.length
	if (length >= 10) {
		const firstHalf=translation.slice(0, Math.round(length / 2))
		const secondHalf= translation.slice(Math.round(length / 2))
		translation=`${firstHalf}-${secondHalf}`
	}
	//si la palbra es un palindromo, ninguna regla cuenta y devuelve la misma palabra intercaladno mayusculas y minusculas

	const reverse = (str) =>str.split('').reverse().join('') //lo que hace esta linea es que separa la palabra por caracters y luegos les da vuelta y los une
	
	function minMay(str){
		const length = str.length //longitud del string
		let translation ='' //se agrega carcater desde el for
		let capitalize= true //significa poner en mayusculas
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}
	if (str == reverse(str)) {
		return minMay(str) //solo se ejecuta un return por funcion
	}

	return translation
}

console.log(platzom("programar"))
console.log(platzom("Zorro"))
console.log(platzom("Zarpar"))
console.log(platzom("abecedario"))
console.log(platzom("sometemos"))