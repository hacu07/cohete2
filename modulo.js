/*******************************************************************
*  SENA CENTRO DE INDUSTRIA Y DE LA CONSTRUCCION                   *
*  Codigo JavaScript para uso de clases de cohetes con metodos     *
*  Autor: Paula Sánchez Arias 		                          	   *
*  Version: 1.0                                                    *
*  Fecha: Sept/2017                                                *
*                                                                  *
*******************************************************************/

var Modulo = function(masaN, fuerzaE, vel, masaC, consumo, pos){
	//Constantes
	const 	MASATIERRA = 5.972 * Math.pow(10, 22), 	//kg
	  		KGRAVEDAD = 6.674 * Math.pow(10, -11), 	// (N . m^2)/ kg^2
	  	//	GRAVEDADTIERRA = 315.41338582677 		// pies / s^2
	  		RTIERRA = 6371000, 						// (metros) 20902230.97 pies 
	  		DELTAT = 1; 							//tiempo en segundos entre cada ciclo de simulación.

	//Atributos
	this.rTierra = RTIERRA;
	this.masaNeta = masaN;
	this.fuerzaEmpuje = fuerzaE;		//vector3
	this.velocidad = vel;				//vector3
	this.masaCombustible = masaC;
	this.consumoCombustible = consumo;
	this.posicionModulo = pos ;			//vector3
	this.cuerpo = new THREE.Object3D();
	var Fg;
	this.magnitudFe = fuerzaE.length(); //calcular Magnitud de FuerzaE

	//this.masa = masaN + masaC;


	//Metodos

	//Devuelve el valor de la masa total 
	//Actualiza la masa del combustible 
	this.calcularMasa = function() {
		this.masaCombustible -= this.consumoCombustible;
		if (this.masaCombustible<0) {				//cuando se acaba el combustible se apaga el motor
			this.masaCombustible = 0;
			this.fuerzaEmpuje.multiplyScalar(0);
		}
		return (this.masaNeta + this.masaCombustible);
	}

	//Devuelve la distancia al cuadrado desde el centro a la posición 
	this.calcularDistancia = function(){
		var distancia2 = Math.pow(this.posicionModulo.length() + RTIERRA,2);
		//console.log("******************************");
		//console.log(this.posicionModulo.length());
		return distancia2;
	}

	//Para calcular la fuerza es F = Fempuje (vector) + Fgravedad (vector)
	//Se debe calcular la Fgravedad Fg = (M1(MasaTierra) * M2 (MasaModulo) * g (gravedad) / r^2 (distancia del modulo a la tierra)
	//hay que sumar los vectores
	
	this.calcularFuerza = function() {
		var fuerza  =  new THREE.Vector3();

		//var vectorUnitario = new THREE.Vector3();

		 var vectorUnitario = this.posicionModulo.clone();
		 vectorUnitario.normalize();
		//calcula la Fuerza Gravedad

		Fg = -( MASATIERRA * this.calcularMasa() * KGRAVEDAD ) /(this.calcularDistancia());

		//Falta pasar el Fg a vector 
		fuerza = vectorUnitario.multiplyScalar(-Fg);
		return (fuerza.add(this.fuerzaEmpuje));
	}

	this.calcularAceleracion = function(){
		var aceleracion = new THREE.Vector3();
		var masa = this.masaCombustible + this.masaNeta;
		var Fuerza = this.calcularFuerza().clone();
		aceleracion = Fuerza.divideScalar(masa);
		/*aceleracion = this.calcularFuerza().divideScalar(masa);*/
		//console.log("aceleracion: x:" + aceleracion.x + " y:" + aceleracion.y + " z:" + aceleracion.z );
		return aceleracion;
	}

	this.calcularDesplazamiento = function() {
		/*var desplazamiento = new THREE.Vector3();
		var desplazAcc = new THREE.Vector3();*/
		var desplazamiento = this.velocidad.clone();
		var desplazAcc = this.calcularAceleracion().clone();

		desplazamiento = desplazamiento.multiplyScalar(DELTAT);
		desplazAcc = desplazAcc.multiplyScalar(DELTAT*DELTAT/2);
		/*desplazamiento = this.velocidad.multiplyScalar(DELTAT);
		desplazAcc = this.calcularAceleracion().multiplyScalar(DELTAT*DELTAT/2);*/
		desplazamiento.add(desplazAcc);
		return desplazamiento;
	}

	//calcula el desplazamiento, la nueva posición y la velocidad final.
	//Este método es llamado desde el objeto. 
	this.nuevaDir = new THREE.Vector3(0,0,0);
	this.calcularPosicion = function() {
		var desplazamiento = new THREE.Vector3();
		desplazamiento = this.calcularDesplazamiento();

		this.posicionModulo.add(desplazamiento);
		this.velocidad = desplazamiento.divideScalar(DELTAT);
		//console.log("salio CalPos: " + this.posicionModulo.x  + " | " + this.posicionModulo.y + " | " + this.posicionModulo.z);
		
		//Modificar Direccion De La Fuerza de empuje
		var vDirDesplaz = desplazamiento.clone().normalize();
		this.fuerzaEmpuje = vDirDesplaz.multiplyScalar(this.magnitudFe);


		return this.posicionModulo.ceil();//ceil utilizado para redondear los valores de los componentes del vector 
	}

	this.calcularNuevaDireccion = function(){
	var nuevaDireccion = new THREE.Vector3(0,0,0); 
	var vRTierra = new THREE.Vector3(0,0,0); //Radio Tierra
	var vFg = new THREE.Vector3(0,0,0); //Fuerza de gravedad
	var vFr = new THREE.Vector3(0,0,0);	//Fuerza Resultante

	//PASO1 
	//Calcular nueva direccion
	nuevaDireccion.addVectors(this.calcularPosicion(),vRTierra.setY(RTIERRA));
	nuevaDireccion.normalize();	
	vFg = nuevaDireccion.clone().multiplyScalar(Fg);
	vFr.addVectors(this.fuerzaEmpuje,vFg);
	return vFr;
	}

}