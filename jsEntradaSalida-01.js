/*
Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos*/
function mostrar() {
	let i;
	let nombre1;
	let nombrevieja;
	let nombrejoven;
	let respuesta;
	let edad;
	let edadmax = 0;
	let edadmin = 0;
	let altura;
	let sexo;
	let respuesta2
	let dinero;
	let promedio;
	let acumulador = 0;
	let contadormujeres = 0;

	for (i = 0; i < 2; i++) {

		do {
			nombre1 = prompt("Ingrese un nombre");
			respuesta = prompt("El nombre ingresado es " + nombre1 + " s/n");
		} while (!(respuesta == "s"))

		edad = parseInt(prompt("Ingrese una edad entre 0 y 115"));
		while (!(edad >= 0 && edad < 116)) {
			edad = parseInt(prompt("Ingrese una edad VALIDAD entre 0 y 115"));
		}
		altura = parseInt(prompt("Ingrese altura"));
		while (!(altura >= 30 && altura <= 230)) {
			altura = parseInt(prompt("Ingrese una altura valida"));
			acumulador = acumulador + altura;
		}

		sexo = prompt("Ingrese una sexo, f para femenino y m para masculino");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Ingrese un sexo VALIDO f para femenino y m para masculino");
			switch (sexo) {
				case "f":
					contadormujeres++;
					break;
			}

		}

		dinero = parseInt(prompt("Ingrese cuanto dinero tienen"));
		while (!(dinero <= 0 || dinero >= 0)) {
			dinero = parseInt(prompt("Ingrese un numero"));
		}



		//  1- nombre de la persona con edad más vieja
		if (edad > edadmax) {
			edadmax = edad;
			nombrevieja = nombre1;
		}
		//  2- promedio de altura de las mujeres
		if (sexo == "f") {
			promedio = (acumulador / contadormujeres);
		}
		//	3- nombre de la mujer más joven
		if (sexo == "f") {
			if (edad < edadmin) {
				edadmin = edad;
				nombrejoven = nombre1;
			}
		}
		//	NOTA:pedir datos por "prompt()" y mostrar por console.log(),
		//	verificar que los datos  exitan antes de mostrarlos

	}
	console.log("El nombre de la persona mas vieja es " + nombrevieja + " y su edad es " + edadmax);
	console.log("La altura promedio para las mujeres es de " + promedio);
	console.log("El nombre de la persona mas joven es " + nombrejoven + " y su edad es " + edadmin);
}

