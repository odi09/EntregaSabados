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
	let contador;
	let nombre1;
	let nombrevieja;
	let nombrejoven;
	let respuesta;
	let edad;
	let edadmax;
	let edadmin;
	let altura;
	let sexo;
	let respuesta2
	let dinero;
	let promedio;
	let acumulador = 0;
	let contadormujeres = 0;

	for (contador = 0; contador < 2; contador++) {

		do {
			nombre1 = prompt("Ingrese un nombre");
			respuesta = prompt("El nombre ingresado es " + nombre1 + " s/n");
		} while (!(respuesta == "s"))

		edad = parseInt(prompt("Ingrese una edad entre 0 y 115"));
		while (!(edad >= 0 && edad < 116)) {
			edad = parseInt(prompt("Ingrese una edad VALIDAD entre 0 y 115"));
			contadormujeres++;
			acumulador = acumulador + edad;
		}

		altura = parseInt(prompt("Ingrese altura"));
		while (!(altura >= 30 && altura <= 230)) {
			altura = parseInt(prompt("Ingrese una altura valida"));

		}

		sexo = prompt("Ingrese una sexo, f para femenino y m para masculino");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Ingrese un sexo VALIDO f para femenino y m para masculino");

		}

		dinero = parseInt(prompt("Ingrese cuanto dinero tienen"));
		while (!(dinero <= 0 || dinero >= 0)) {
			dinero = parseInt(prompt("Ingrese un numero"));
		}
		acumulador = acumulador + dinero;

		//  1- nombre de la persona con edad más vieja

		if (contador == 0 || edadmax < edad) {
			edadmax = edad;
			nombrevieja = nombre1;
		}
		//promedio de altura de las mujeres


		//	3- nombre de la mujer más joven
		switch (sexo) {
			case "f":
				if (contador == 0 || edadmin > edad) {
					edadmin = edad;
					nombrejoven = nombre1;
				}
				break;
		}
	}

	//	NOTA:pedir datos por "prompt()" y mostrar por console.log(),
	//	verificar que los datos  exitan antes de mostrarlos


	console.log("El nombre de la persona mas vieja es " + nombrevieja + " y su edad es " + edadmax);
	console.log("La altura promedio para las mujeres es de " + acumulador);
	console.log("El nombre de la persona mas joven es " + nombrejoven + " y su edad es " + edadmin);
}

