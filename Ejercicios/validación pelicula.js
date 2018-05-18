
const edadAdmitida= 13

let VerificarEdad=(nombre,edad,nameMovie) => {
if (edad >= edadAdmitida) {
alert (`Señor ${nombre} está autorizado para ver la película`)
} else{
alert (`Señor(a) ${nombre} no puede ver la película ${nameMovie}`)	
}
	
}