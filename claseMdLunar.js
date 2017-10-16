//ancho = 9,45 m   / 31,00  pies    segun instructor dejarlo de 15

El módulo de descenso

caja octagonal con patas 
altura:	3,23 m / 	11, pies
ancho: 4,52 m  /  14,82 pies

soporte o patas
largo : 2.45 m patas / 8,038
"discos"  

diametro = 94 cm 

módulo de ascenso  medida total 

 altura: 3,76 m   / 12,33 pies
 diámetro : 4,52 m  / 14,82 pies  / 7,41 mitad

https://www.youtube.com/watch?v=vqmmXe21TbU  tutorial de importacion  json

/******************************************************************
 			
 				Modulo de Lunar   


 ******************************************************************/


// funcion Madre 
var ModuloLunar = function() {

	this.mesh = new THREE.Object3D();

	mAscenso= new ModuloAscenso();
//	cohete.mesh.scale.set(1,1,1);
	this.mesh.add(mAscenso.mesh);


	 mDescenso = new ModuloDescenso();
//	 cohete.mesh.scale.set(2,2,2);

	this.mesh.add(mDescenso.mesh);
	this.mesh.scale.set(.2,.2,.2);
	
}

/******************************************************************
 			
 				Modulo de Ascenso


 ******************************************************************/

var ModuloAscenso = function(){

	this.mesh = new THREE.Object3D();

// antena frontal superior
	antenaFrontal = new Base(5,0,4,20,"");	
	antenaFrontal.mesh.position.set(0,56,26);
	antenaFrontal.mesh.rotation.x = 3.1416/1.8;
	//antenaFrontal.mesh.rotation.y = -3.1416/2;
	this.mesh.add(antenaFrontal.mesh);

	soporteAntena = new Soporte(0.6,0.3,8,20,"");
	soporteAntena.mesh.position.set(0,52.5,24.5);
	soporteAntena.mesh.rotation.z = 3.1416/1;
	this.mesh.add(soporteAntena.mesh);

	soporteAntena2 = new Soporte(0.4,0.4,8,20,"");
	soporteAntena2.mesh.position.set(0,50,24.5);
	soporteAntena2.mesh.rotation.z = 3.1416/2;
	this.mesh.add(soporteAntena2.mesh);

	soporteAntena3 = new Soporte(1,1,4,4,"");
	soporteAntena3.mesh.position.set(3,49,23.5);
	soporteAntena3.mesh.rotation.z = 3.1416/1;
	soporteAntena3.mesh.rotation.y = 3.1416/4;
	soporteAntena3.mesh.rotation.x = 3.1416/3.5;
	this.mesh.add(soporteAntena3.mesh);

	soporteAntena4 = new Soporte(1,1,4,4,"");
	soporteAntena4.mesh.position.set(-3,49,23.5);
	soporteAntena4.mesh.rotation.z = 3.1416/1;
	soporteAntena4.mesh.rotation.y = 3.1416/4;
	soporteAntena4.mesh.rotation.x = 3.1416/3.5;
	this.mesh.add(soporteAntena4.mesh);

	soporteAntena5 = new Soporte(.3,.3,5,20,"");
	soporteAntena5.mesh.position.set(0,56.5,28);
	//soporteAntena5.mesh.rotation.x = -3.1416;
	soporteAntena5.mesh.rotation.x = 3.1416/1.8;
	this.mesh.add(soporteAntena5.mesh);

	soporteAntena6 = new Soporte(.1,.6,1,20,"");
	soporteAntena6.mesh.position.set(0,56,31);
	//soporteAntena5.mesh.rotation.x = -3.1416;
	soporteAntena6.mesh.rotation.x = 3.1416/1.8;
	this.mesh.add(soporteAntena6.mesh);

	

// Antena  de cono  superior izquierda
	tuboAntenaIz = new Soporte(.2,.2,5,20,"");
	tuboAntenaIz.mesh.position.set(-17,44,0);
	tuboAntenaIz.mesh.rotation.z = 3.1416/-1.5;
	this.mesh.add(tuboAntenaIz.mesh);

	conoAntenaIzq = new Soporte(0,5,4,20,"");
	conoAntenaIzq.mesh.position.set(-19,45,0);
	conoAntenaIzq.mesh.rotation.z = 3.1416/-1.5;
	this.mesh.add(conoAntenaIzq.mesh);

	tuboAntenaIz2 = new Soporte(.2,.2,5,20,"");
	tuboAntenaIz2.mesh.position.set(-20,46,0);
	tuboAntenaIz2.mesh.rotation.z = 3.1416/-1.5;
	this.mesh.add(tuboAntenaIz2.mesh);


	centroAntenaIzq = new Soporte(.5,.5,1,20,"");
	centroAntenaIzq.mesh.position.set(-22.5,47.5,0);
	centroAntenaIzq.mesh.rotation.z = 3.1416/-1.5;
	this.mesh.add(centroAntenaIzq.mesh);

// Antena con punta
	tuboPunta = new Soporte(.3,.3,6,20,"");
	tuboPunta.mesh.position.set(8,50,-7);
	tuboPunta.mesh.rotation.z = 3.1416/1;
	this.mesh.add(tuboPunta.mesh);

	tuboPunta2 = new Soporte(.8,0,3,20,"");
	tuboPunta2.mesh.position.set(8,53,-7);
	tuboPunta2.mesh.rotation.z = 3.1416/1;
	this.mesh.add(tuboPunta2.mesh);

	// Antena derecha superior con esferas pequeñas

	tuboAntena = new Soporte(.2,.2,5,20,"");
	tuboAntena.mesh.position.set(10.8,47.6,0);
	tuboAntena.mesh.rotation.z = 3.1416/1.5;
	this.mesh.add(tuboAntena.mesh);


	tuboAntena2 = new Soporte(.1,.1,6,20,"");
	tuboAntena2.mesh.position.set(13,48,0);
	tuboAntena2.mesh.rotation.z = 3.1416/1;
	this.mesh.add(tuboAntena2.mesh);



	tuboAntena3 = new Soporte(.1,.1,6,20,"");
	tuboAntena3.mesh.position.set(13,49,0);
	tuboAntena3.mesh.rotation.x = 3.1416/2;
	this.mesh.add(tuboAntena3.mesh);

	tuboAntena4 = new Soporte(.1,.1,6,20,"");
	tuboAntena4.mesh.position.set(13,49,0);
	tuboAntena4.mesh.rotation.x = 3.1416/4;
	this.mesh.add(tuboAntena4.mesh);

	tuboAntena5 = new Soporte(.1,.1,6,20,"");
	tuboAntena5.mesh.position.set(13,49,0);
	tuboAntena5.mesh.rotation.x = -3.1416/4;
	this.mesh.add(tuboAntena5.mesh);

	esf2 = new Esfera(.4, 0x9D9D9D, "")
	esf2.mesh.position.set(13, 51.5, 0);
	this.mesh.add(esf2.mesh);

	esf3 = new Esfera(.4, 0x9D9D9D, "")
	esf3.mesh.position.set(13, 51, -2);
	this.mesh.add(esf3.mesh);


	esf4 = new Esfera(.4, 0x9D9D9D, "")
	esf4.mesh.position.set(13, 49, -2.5);
	this.mesh.add(esf4.mesh);


	esf5 = new Esfera(.4, 0x9D9D9D, "")
	esf5.mesh.position.set(13, 47, -2);
	this.mesh.add(esf5.mesh);

	esf6 = new Esfera(.4, 0x9D9D9D, "")
	esf6.mesh.position.set(13, 45.5, 0);
	this.mesh.add(esf6.mesh);

	esf7 = new Esfera(.4, 0x9D9D9D, "")
	esf7.mesh.position.set(13, 47, 2);
	this.mesh.add(esf7.mesh);

	esf8 = new Esfera(.4, 0x9D9D9D, "")
	esf8.mesh.position.set(13, 49, 2.5);
	this.mesh.add(esf8.mesh);

	esf9 = new Esfera(.4, 0x9D9D9D, "")
	esf9.mesh.position.set(13, 51, 2);
	this.mesh.add(esf9.mesh);

// Antena superior Trasera con esferas pequeñas

	esf2 = new Esfera(.4, 0x9D9D9D, "")
	esf2.mesh.position.set(-2,49,-12);
	this.mesh.add(esf2.mesh);

	esf3 = new Esfera(.4, 0x9D9D9D, "")
	esf3.mesh.position.set(-8,49,-12);
	this.mesh.add(esf3.mesh);

	esf4 = new Esfera(.4, 0x9D9D9D, "")
	esf4.mesh.position.set(-5,52,-12);
	this.mesh.add(esf4.mesh);

	esf5 = new Esfera(.4, 0x9D9D9D, "")
	esf5.mesh.position.set(-5,46,-12);
	this.mesh.add(esf5.mesh);

	esf6 = new Esfera(.4, 0x9D9D9D, "")
	esf6.mesh.position.set(-7,47,-12);
	this.mesh.add(esf6.mesh);

	esf7 = new Esfera(.4, 0x9D9D9D, "")
	esf7.mesh.position.set(-3,47,-12);
	this.mesh.add(esf7.mesh);

	esf8 = new Esfera(.4, 0x9D9D9D, "")
	esf8.mesh.position.set(-3,51,-12);
	this.mesh.add(esf8.mesh);

	esf9 = new Esfera(.4, 0x9D9D9D, "")
	esf9.mesh.position.set(-7,51,-12);
	this.mesh.add(esf9.mesh);

	tuboAntena = new Soporte(.2,.2,5,20,"");
	tuboAntena.mesh.position.set(-5,48,-10);
	tuboAntena.mesh.rotation.x = -3.1416/-1.5;
	this.mesh.add(tuboAntena.mesh);

	tuboAntena2 = new Soporte(.1,.1,6,20,"");
	tuboAntena2.mesh.position.set(-5,49,-12);
	tuboAntena2.mesh.rotation.z = 3.1416/1;
	this.mesh.add(tuboAntena2.mesh);

	tuboAntena3 = new Soporte(.1,.1,6,20,"");
	tuboAntena3.mesh.position.set(-5,49,-12);
	tuboAntena3.mesh.rotation.z = 3.1416/-2;
	this.mesh.add(tuboAntena3.mesh);

	tuboAntena4 = new Soporte(.1,.1,6,20,"");
	tuboAntena4.mesh.position.set(-5,49,-12);
	tuboAntena4.mesh.rotation.z = 3.1416/4;
	this.mesh.add(tuboAntena4.mesh);

	tuboAntena5 = new Soporte(.1,.1,6,20,"");
	tuboAntena5.mesh.position.set(-5,49,-12);
	tuboAntena5.mesh.rotation.z = -3.1416/4;
	this.mesh.add(tuboAntena5.mesh);

	//cabezote que forman cruz
	cabezote = new Base(17,17,19,8,"");	
	cabezote.mesh.position.set(0,33,0);
	cabezote.mesh.rotation.x = 3.1416/2;
	cabezote.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(cabezote.mesh);

//	cabezote atravezado  que forma cruz 
	cabezote2 = new Base(17,17,22,8,"");	
	cabezote2.mesh.position.set(0,33,0);
	cabezote2.mesh.rotation.x = 3.1416/1;
	cabezote2.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(cabezote2.mesh);

//tambor que atravieza de lado a lado
	tambor = new Base(14.5,12,33,6,"");	
	tambor.mesh.position.set(0,32,-.7);
	tambor.mesh.rotation.x = 3.1416/2;
	tambor.mesh.rotation.y = -3.1416/2;
	this.mesh.add(tambor.mesh);

// rampa superior
	rampa = new Base(5,5,12,3,"");	
	rampa.mesh.position.set(.2,44,10);
	rampa.mesh.rotation.x = 3.1416/.3;
	rampa.mesh.rotation.z = -3.1416/2;
	this.mesh.add(rampa.mesh);

// cuadro superior que esta en la rampa
	cuadroRampa = new Base(2,2,8,4,"");	
	cuadroRampa.mesh.position.set(.2,47.5,8.5);
	cuadroRampa.mesh.rotation.x = 3.1416/.8;
  	cuadroRampa.mesh.rotation.z = -3.1416/2;
	this.mesh.add(cuadroRampa.mesh);

 //rectangulo lateral derecho
	rectLateral1 = new Base(5,5,12,4,"");	
	rectLateral1.mesh.position.set(10,34,11);
	rectLateral1.mesh.rotation.x = 3.1416/.1;
	rectLateral1.mesh.rotation.y = -3.1416/1;
	rectLateral1.mesh.rotation.z = -3.1416/.5;
	this.mesh.add(rectLateral1.mesh);

//rectangulo lateral izquierdo
	rectLateral2 = new Base(5,5,12,4,"");	
	rectLateral2.mesh.position.set(-10,34,11);
	rectLateral2.mesh.rotation.x = 3.1416/.1;
	rectLateral2.mesh.rotation.y = -3.1416/1;
	rectLateral2.mesh.rotation.z = -3.1416/.5;
	this.mesh.add(rectLateral2.mesh);



/**********************************************
	esta seccion forma la cara del frente
**********************************************/


//tambor que atraveiza de lado a lado
	modAscen7 = new Base(10,14.7,12.5,10,"");	
	modAscen7.mesh.position.set(0,34,10.9);
	modAscen7.mesh.rotation.x = 3.1416/1.8;
	modAscen7.mesh.rotation.y = -3.1416/2;
	this.mesh.add(modAscen7.mesh);

// figura superior atravezada
	cuadroRampa4 = new Base(1,1,7,3,"");	
	cuadroRampa4.mesh.position.set(0,28,17);
	cuadroRampa4.mesh.rotation.x = 3.1416/.9;
  	cuadroRampa4.mesh.rotation.z = -3.1416/2;
	this.mesh.add(cuadroRampa4.mesh);
//cuadro superior de cabezote frontal
	cuadroRampa3 = new Base(8,8,8,4,"");	
	cuadroRampa3.mesh.position.set(0,42,16.5);
	cuadroRampa3.mesh.rotation.x = 3.1416/.8;
  	cuadroRampa3.mesh.rotation.z = -3.1416/2;
	this.mesh.add(cuadroRampa3.mesh);

//lamina izquierda que forma la compuerta del frente
	cabezoteFrontal = new Base(10,10,1,10,"");	
	cabezoteFrontal.mesh.position.set(-3,36,12);
	cabezoteFrontal.mesh.rotation.z = 3.1416/2;
	this.mesh.add(cabezoteFrontal.mesh);

//lamina derecha que forma la compuerta del frente
	cabezoteFrontal2 = new Base(10,10,1,10,"");	
	cabezoteFrontal2.mesh.position.set(3,36,12);
	cabezoteFrontal2.mesh.rotation.z = 3.1416/2;
	this.mesh.add(cabezoteFrontal2.mesh);

/**********************************************
  formacion de parte de los conos propulsores
**********************************************/

//	base lateral derecha de los conos
	baseCono = new Base(1,5,10,4,"");
	baseCono.mesh.position.set(14,35,11);
	baseCono.mesh.rotation.z = -3.1416/2;
	baseCono.mesh.rotation.x = -3.1416/3.9;
	this.mesh.add(baseCono.mesh);

	//base lateral izquierda de los conos
	baseCono2 = new Base(5,1,10,4,"");
	baseCono2.mesh.position.set(-14,35,11);
	baseCono2.mesh.rotation.z = -3.1416/2;
	baseCono2.mesh.rotation.x = -3.1416/3.9;
	this.mesh.add(baseCono2.mesh);

	//conos derechos
	cono = new Base(1,.3,2,20,"");
	cono.mesh.position.set(20,35,11);
	cono.mesh.rotation.z = -3.1416/2;
	cono.mesh.rotation.x = -3.1416/4;
	this.mesh.add(cono.mesh);

	cono2 = new Base(1,.3,2,20,"");
	cono2.mesh.position.set(18.5,35,13);
	cono2.mesh.rotation.z = -3.1416/1;
	cono2.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cono2.mesh);

	cono3 = new Base(1,.3,2,20,"");
	cono3.mesh.position.set(18.5,37,11);
	cono3.mesh.rotation.z = -3.1416/1;
	cono3.mesh.rotation.x = -3.1416/1;
	this.mesh.add(cono3.mesh);

	cono4 = new Base(.3,1,2,20,"");
	cono4.mesh.position.set(18.5,33,11);
	cono4.mesh.rotation.z = -3.1416/1;
	cono4.mesh.rotation.x = 3.1416/1;
	this.mesh.add(cono4.mesh);

	//conos izquierdos
	cono5 = new Base(.3,1,2,20,"");
	cono5.mesh.position.set(-20,35,11);
	cono5.mesh.rotation.z = -3.1416/2;
	cono5.mesh.rotation.x = -3.1416/4;
	this.mesh.add(cono5.mesh);

	cono6 = new Base(1,.3,2,20,"");
	cono6.mesh.position.set(-18.5,35,13);
	cono6.mesh.rotation.z = -3.1416/1;
	cono6.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cono6.mesh);

	cono7 = new Base(1,.3,2,20,"");
	cono7.mesh.position.set(-18.5,37,11);
	cono7.mesh.rotation.z = -3.1416/1;
	cono7.mesh.rotation.x = -3.1416/1;
	this.mesh.add(cono7.mesh);


	cono8 = new Base(.3,1,2,20,"");
	cono8.mesh.position.set(-18.5,33,11);
	cono8.mesh.rotation.z = -3.1416/1;
	cono8.mesh.rotation.x = 3.1416/1;
	this.mesh.add(cono8.mesh);


/******************************************************************
 			 PARTE TAPA TRASERA
 ******************************************************************/

//	Base lateral izquierda de los conos
	baseCono = new Base(2,2,6,5,"");
	baseCono.mesh.position.set(14,35,-11);
	baseCono.mesh.rotation.z = -3.1416/1;
	baseCono.mesh.rotation.x = -3.1416;
	this.mesh.add(baseCono.mesh);

	//base lateral derecha de los conos
	baseCono2 = new Base(2,2,6,5,"");
	baseCono2.mesh.position.set(-14,35,-11);
	baseCono2.mesh.rotation.z = -3.1416/1;
	baseCono2.mesh.rotation.x = -3.1416;
	this.mesh.add(baseCono2.mesh);

	//conos izquierdos
	cono = new Base(1,.3,2,20,"");  // cono lateral
	cono.mesh.position.set(17,35,-11);
	cono.mesh.rotation.z = -3.1416/2;
	cono.mesh.rotation.x = -3.1416/4;
	this.mesh.add(cono.mesh);

	cono2 = new Base(.3,1,2,20,""); // cono frontral
	cono2.mesh.position.set(14,35,-14);
	cono2.mesh.rotation.z = -3.1416/1;
	cono2.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cono2.mesh);

	cono3 = new Base(1,.3,2,20,"");  //cono superior
	cono3.mesh.position.set(14,39,-11);
	cono3.mesh.rotation.z = -3.1416/1;
	cono3.mesh.rotation.x = -3.1416/1;
	this.mesh.add(cono3.mesh);


	cono4 = new Base(.3,1,2,20,""); // cono inferior
	cono4.mesh.position.set(14,31,-11);
	cono4.mesh.rotation.z = -3.1416/1;
	cono4.mesh.rotation.x = 3.1416/1;
	this.mesh.add(cono4.mesh);




	//conos derechos
	cono5 = new Base(.3,1,2,20,"");
	cono5.mesh.position.set(-17,35,-11);
	cono5.mesh.rotation.z = -3.1416/2;
	cono5.mesh.rotation.x = -3.1416/4;
	this.mesh.add(cono5.mesh);

	cono6 = new Base(.3,1,2,20,"");
	cono6.mesh.position.set(-14,35,-14);
	cono6.mesh.rotation.z = -3.1416/1;
	cono6.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cono6.mesh);

	cono7 = new Base(1,.3,2,20,"");
	cono7.mesh.position.set(-14,39,-11);
	cono7.mesh.rotation.z = -3.1416/1;
	cono7.mesh.rotation.x = -3.1416/1;
	this.mesh.add(cono7.mesh);


	cono8 = new Base(.3,1,2,20,"");
	cono8.mesh.position.set(-14,31,-11);
	cono8.mesh.rotation.z = -3.1416/1;
	cono8.mesh.rotation.x = 3.1416/1;
	this.mesh.add(cono8.mesh);

//  cuadro lateral derecho
	cuadroLat = new Base(5,5,6,10,"");
	cuadroLat.mesh.position.set(16,30,0);
	cuadroLat.mesh.rotation.z = -3.1416/1;
	cuadroLat.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cuadroLat.mesh);

	tapaCuadroLat = new Base(1,5,4,10,"");
	tapaCuadroLat.mesh.position.set(16,30,5);
	tapaCuadroLat.mesh.rotation.z = -3.1416/1;
	tapaCuadroLat.mesh.rotation.x = -3.1416/2;
	this.mesh.add(tapaCuadroLat.mesh);

	tapaCuadroLat2 = new Base(5,1,4,10,"");
	tapaCuadroLat2.mesh.position.set(16,30,-5);
	tapaCuadroLat2.mesh.rotation.z = -3.1416/1;
	tapaCuadroLat2.mesh.rotation.x = -3.1416/2;
	this.mesh.add(tapaCuadroLat2.mesh);

	cuadroFrontal = new Base(4,4,4,4,"");
	cuadroFrontal.mesh.position.set(16,28,6.5);
	cuadroFrontal.mesh.rotation.z = -3.1416/2;
	cuadroFrontal.mesh.rotation.x = -3.1416/4;
	this.mesh.add(cuadroFrontal.mesh);

//  cuadro lateral izquierdo
	cuadroLat = new Base(7,4,2,4,"");
	cuadroLat.mesh.position.set(-16,30,0);
	cuadroLat.mesh.rotation.z = -3.1416/2;
	cuadroLat.mesh.rotation.x = -3.1416/4;
	this.mesh.add(cuadroLat.mesh);

//	tambor que atraveiza de lado a lado
	modAscen7 = new Base(14.5,10,12.5,10,"");	
	modAscen7.mesh.position.set(0,34,-10.9);
	modAscen7.mesh.rotation.x = 3.1416/1.8;
	modAscen7.mesh.rotation.y = -3.1416/2;
	this.mesh.add(modAscen7.mesh);


// Conos laterales de compuerta  



//Escalera Superior

	escaleraSuperior = new Base(5,5,.5,4,"");
	escaleraSuperior.mesh.position.set(0,25.3,18);
	escaleraSuperior.mesh.rotation.z = -3.1416/1;
	escaleraSuperior.mesh.rotation.x = 3.1416/1;
	escaleraSuperior.mesh.rotation.y = -3.1416/4;
	this.mesh.add(escaleraSuperior.mesh);

	escaleraDeclive = new Base(5,5,.5,4,"");
	escaleraDeclive.mesh.position.set(0,23.5,24.5);
	escaleraDeclive.mesh.rotation.z = -3.1416/1;
	escaleraDeclive.mesh.rotation.x = 3.1416/6;
	escaleraDeclive.mesh.rotation.y = -3.1416/4;
	this.mesh.add(escaleraDeclive.mesh);


	//soportes laterales 

	soporteEscaleraSup=new Base(.3,.3,6,20,"");
	soporteEscaleraSup.mesh.position.set(3,26,20.5);
	soporteEscaleraSup.mesh.rotation.y= -3.1416/2;
	soporteEscaleraSup.mesh.rotation.x = -3.1416/4.7; 
  	soporteEscaleraSup.mesh.rotation.z = -3.1416/2;
	this.mesh.add(soporteEscaleraSup.mesh);

	soporteEscaleraSup2=new Base(.3,.3,6,20,"");
	soporteEscaleraSup2.mesh.position.set(-3,26,20.5);
	soporteEscaleraSup2.mesh.rotation.y= -3.1416/2;
	soporteEscaleraSup2.mesh.rotation.x =- 3.1416/4.7; 
  	soporteEscaleraSup2.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscaleraSup2.mesh);

	soporteEscaleraSup3=new Base(.3,.3,4.4,20,"");
	soporteEscaleraSup3.mesh.position.set(3,26.9,24.5);
	soporteEscaleraSup3.mesh.rotation.y= -3.1416/2;
	soporteEscaleraSup3.mesh.rotation.x = 3.1416/6; 
  	soporteEscaleraSup3.mesh.rotation.z = -3.1416/2;
	this.mesh.add(soporteEscaleraSup3.mesh);

	soporteEscaleraSup4=new Base(.3,.3,4.4,20,"");
	soporteEscaleraSup4.mesh.position.set(-3,26.9,24.5);
	soporteEscaleraSup4.mesh.rotation.y= -3.1416/2;
	soporteEscaleraSup4.mesh.rotation.x = 3.1416/6; 
  	soporteEscaleraSup4.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscaleraSup4.mesh);


	soporteEscaleraSup5=new Base(.3,.3,4,20,"");
	soporteEscaleraSup5.mesh.position.set(3,24,26.9);
	soporteEscaleraSup5.mesh.rotation.y= -3.1416/2;
	soporteEscaleraSup5.mesh.rotation.x = -3.1416/1.7; 
  	soporteEscaleraSup5.mesh.rotation.z = -3.1416/2;
	this.mesh.add(soporteEscaleraSup5.mesh);

	soporteEscaleraSup6=new Base(.3,.3,4,20,"");
	soporteEscaleraSup6.mesh.position.set(-3,24,26.9);
	soporteEscaleraSup6.mesh.rotation.y= -3.1416/2;
	soporteEscaleraSup6.mesh.rotation.x =- 3.1416/1.7; 
  	soporteEscaleraSup6.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscaleraSup6.mesh);


// travezaños de escalera
	travezañosEscalera1=new Base(0.2,0.2,7,4,"");
	travezañosEscalera1.mesh.position.set(0,21.9,27.5);
  	travezañosEscalera1.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera1.mesh);

	travezañosEscalera2=new Base(0.2,0.2,7,4,"");
	travezañosEscalera2.mesh.position.set(0,22.4,26.6);
  	travezañosEscalera2.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera2.mesh);


	travezañosEscalera3=new Base(0.1,0.1,7,3,"");
	travezañosEscalera3.mesh.position.set(0,23,25.9);
  	travezañosEscalera3.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera3.mesh);


	travezañosEscalera4=new Base(0.1,0.1,7,3,"");
	travezañosEscalera4.mesh.position.set(0,23.8,24.7);
  	travezañosEscalera4.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera4.mesh);


	travezañosEscalera5=new Base(0.1,0.1,7,3,"");
	travezañosEscalera5.mesh.position.set(0,24.7,23);
  	travezañosEscalera5.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera5.mesh);

	travezañosEscalera6=new Base(0.1,0.1,7,3,"");
	travezañosEscalera5.mesh.position.set(0,24.7,23);
  	travezañosEscalera5.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera5.mesh);


	travezañosEscalera7=new Base(0.1,0.1,7,3,"");
	travezañosEscalera7.mesh.position.set(0,25.5,20.5);
  	travezañosEscalera7.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera7.mesh);

	travezañosEscalera8=new Base(0.1,0.1,7,3,"");
	travezañosEscalera8.mesh.position.set(0,25.5,20);
  	travezañosEscalera8.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera8.mesh);

	travezañosEscalera9=new Base(0.1,0.1,7,3,"");
	travezañosEscalera9.mesh.position.set(0,25.5,19.5);
  	travezañosEscalera9.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera9.mesh);


	travezañosEscalera10=new Base(0.1,0.1,7,3,"");
	travezañosEscalera10.mesh.position.set(0,25.5,19);
  	travezañosEscalera10.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera10.mesh);

	travezañosEscalera11=new Base(0.1,0.1,7,3,"");
	travezañosEscalera11.mesh.position.set(0,25.5,18.5);
  	travezañosEscalera11.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera11.mesh);

	travezañosEscalera12=new Base(0.1,0.1,7,3,"");
	travezañosEscalera12.mesh.position.set(0,25.5,18);
  	travezañosEscalera12.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera12.mesh);

	travezañosEscalera12=new Base(0.1,0.1,7,3,"");
	travezañosEscalera12.mesh.position.set(0,25.5,17.5);
  	travezañosEscalera12.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera12.mesh);


	travezañosEscalera13=new Base(0.1,0.1,7,3,"");
	travezañosEscalera13.mesh.position.set(0,25.5,17);
  	travezañosEscalera13.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera13.mesh);

	travezañosEscalera14=new Base(0.1,0.1,7,3,"");
	travezañosEscalera14.mesh.position.set(0,25.5,16.5);
  	travezañosEscalera14.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera14.mesh);

	travezañosEscalera15=new Base(0.1,0.1,7,3,"");
	travezañosEscalera15.mesh.position.set(0,25.5,20);
  	travezañosEscalera15.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera15.mesh);


	travezañosEscalera16=new Base(0.1,0.1,7,3,"");
	travezañosEscalera16.mesh.position.set(0,25.5,18);
  	travezañosEscalera16.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera16.mesh);

	travezañosEscalera17=new Base(0.1,0.1,7,3,"");
	travezañosEscalera17.mesh.position.set(0,25.5,17.5);
  	travezañosEscalera17.mesh.rotation.z =  3.1416/2;
	this.mesh.add(travezañosEscalera17.mesh);

	// propulsor Superior de la cabina
	propulsorSup = new Base(4,4,1,20,"");	
	propulsorSup.mesh.position.set(0,48.5,0);
	propulsorSup.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(propulsorSup.mesh);

	// propulsor inferior de la cabina
	propulsorInf = new Base(5,7,8,20,"img/TexturesManchada.jpg");	
	propulsorInf.mesh.position.set(0,20,0);
	propulsorInf.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(propulsorInf.mesh);
}



/******************************************************************
 			
 				Modulo de Descenso

 ******************************************************************/


var ModuloDescenso = function() {
this.mesh = new THREE.Object3D();
//Modulo de Descenso 

//Base
	base = new Base(22.1,22.1,15,8,"img/TexturaAmarilla2.jpg");	
	base.mesh.position.set(0,17.5,0);
	base.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(base.mesh);

// cuadro inferior de la base
	base2 = new Base(15,15,13,5,"img/TexturesPatas.jpg");	
	base2.mesh.position.set(0,14,0);
	base2.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(base2.mesh);

	//Turbina inferior
	base3 = new Base(8,10,8,20,"img/TexturesManchada.jpg");	
	base3.mesh.position.set(0,7,0);
	base3.mesh.rotation.y = -3.1416/2.7;
	this.mesh.add(base3.mesh);




//patas 
	pata1 =new Pata();
	pata1.mesh.position.x = 7;
	this.mesh.add(pata1.mesh); 

	pata2=new Pata();
	pata2.mesh.rotation.y= 3.1416;
	pata2.mesh.position.x = -7;
	this.mesh.add(pata2.mesh);
	
	pata3=new Pata();
	pata3.mesh.rotation.y= -3.1416/2;
	pata3.mesh.position.z = 7;
	this.mesh.add(pata3.mesh);


	pata4=new Pata();
	pata4.mesh.rotation.y= 3.1416/2;
	pata4.mesh.position.z = -7;
	this.mesh.add(pata4.mesh);


/******************************************************************			
 				 Escalera inferior
 ******************************************************************/

	//soportes verticales 

	//izquierdo
	soporteEscalera=new Base(.5,.5,19,20,"");
	soporteEscalera.mesh.position.set(3,10,33);
	soporteEscalera.mesh.rotation.y= -3.1416/2;
	soporteEscalera.mesh.rotation.x = 3.1416/3; 
  	soporteEscalera.mesh.rotation.z = -3.1416/2;
	this.mesh.add(soporteEscalera.mesh);

	//derecho
	soporteEscalera2=new Base(0.5,0.5,19,20,"");
	soporteEscalera2.mesh.position.set(-3,10,33);
	soporteEscalera2.mesh.rotation.y= -3.1416/2;
	soporteEscalera2.mesh.rotation.x = 3.1416/3; 
  	soporteEscalera2.mesh.rotation.z =  3.1416/2;
		this.mesh.add(soporteEscalera2.mesh);

	//soportes horizontales 

//  escalon 1
	soporteEscalera3=new Base(0.4,0.4,6.5,20,"");
	soporteEscalera3.mesh.position.set(0,16,29.5);
  	soporteEscalera3.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscalera3.mesh);

//  escalon 2
	soporteEscalera4=new Base(0.4,0.4,6.5,20,"");
	soporteEscalera4.mesh.position.set(0,13,31.2);
  	soporteEscalera4.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscalera4.mesh);

//  escalon 3
	soporteEscalera5=new Base(0.4,0.4,6.5,20,"");
	soporteEscalera5.mesh.position.set(0,10,33);
  	soporteEscalera5.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscalera5.mesh);

// 	escalon 4
	soporteEscalera6=new Base(0.4,0.4,6.5,20,"");
	soporteEscalera6.mesh.position.set(0,7,34.7);
  	soporteEscalera6.mesh.rotation.z =  3.1416/2;
	this.mesh.add(soporteEscalera6.mesh);

// 	escalon 5
	soporteEscalera7=new Base(0.4,0.4,6.5,20,"");
	soporteEscalera7.mesh.position.set(0,4,36.5);
  	soporteEscalera7.mesh.rotation.z =  3.1416/2; 
	this.mesh.add(soporteEscalera7.mesh);

	

 }

 // formacion de pata

var Pata = function(){
	this.mesh = new THREE.Object3D();

	// conos de soportes superiores  las geometrias estan en orden ascendente  "de arriba abajo"

	// cono izquierdo
	cono1 = new Soporte(1,0.5,2,20,"img/TexturesPatas.jpg");
	cono1.mesh.position.set(15,22,3);
	cono1.mesh.rotation.z = -3.1416/1.4;
	cono1.mesh.rotation.y = -3.1416/1.2;
	cono1.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cono1.mesh);

	//cono derecho
	cono2 = new Soporte(1,0.5,2,20,"img/TexturesPatas.jpg");
	cono2.mesh.position.set(15,22,-3);
	cono2.mesh.rotation.z = -3.1416/3.4;
	cono2.mesh.rotation.y = -3.1416/1.2;
	cono2.mesh.rotation.x = -3.1416/2;
	this.mesh.add(cono2.mesh);

		//soportes o patas  x.y.z

	//tubo izquierdo	
	soporte1 = new Soporte(0.3,0.6,10.8,20,"img/TexturesPatas.jpg");
	soporte1.mesh.position.set(15,22,3);
	soporte1.mesh.rotation.z = 3.1416/1.4;
	soporte1.mesh.rotation.y = 3.1416/1.2;
	soporte1.mesh.rotation.x = 3.1416/2;
	this.mesh.add(soporte1.mesh);

	//tubo derecho
	soporte2 = new Soporte(0.3,0.6,10.8,20,"img/TexturesPatas.jpg");
	soporte2.mesh.position.set(15,22,-3);
	soporte2.mesh.rotation.z = 3.1416/1.4;
	soporte2.mesh.rotation.y = -3.1416/1.2;
	soporte2.mesh.rotation.x = -3.1416/2;
	this.mesh.add(soporte2.mesh);

	//cono superior
	soporte3 = new Soporte(0.5,1,4.3,40,"img/TexturaAmarilla2.jpg");
	soporte3.mesh.position.set(19,19,0);
	soporte3.mesh.rotation.z = 3.1416/6;
	this.mesh.add(soporte3.mesh);
 	
 	//tubo medio
	soporte4 = new Soporte(1,1,11,20,"img/TexturaAmarilla3.jpg");
	soporte4.mesh.position.set(22.8,12.5,0);
	soporte4.mesh.rotation.z = 3.1416/6;
	this.mesh.add(soporte4.mesh);

	//cono inferior
	soporte5 = new Soporte(1,0.5,2,20,"img/TexturaAmarilla2.jpg");
	soporte5.mesh.position.set(26,6.9,0);
	soporte5.mesh.rotation.z = 3.1416/6;
	this.mesh.add(soporte5.mesh);

	// tubo que conecta los platos soportes
	soporte6 = new Soporte(1,0.2,14,20,"img/TexturaAmarilla2.jpg");
	soporte6.mesh.position.set(26,6.9,0);
	soporte6.mesh.rotation.z = 3.1416/6;
	this.mesh.add(soporte6.mesh);


	// cuadros de pared donde soportan los tubos
	basePared = new Soporte(1.5,1.5,1,5,"img/TexturesPatas.jpg");
	basePared.mesh.position.set(14,12,6);
	basePared.mesh.rotation.z = 3.1416/2;
	basePared.mesh.rotation.y = 3.1416/1;
	basePared.mesh.rotation.x = 3.1416/1.3;
	this.mesh.add(basePared.mesh);

	basePared = new Soporte(1.5,1.5,1,5,"img/TexturesPatas.jpg");
	basePared.mesh.position.set(13.5,12,-6.3);
	basePared.mesh.rotation.z = 3.1416/2;
	basePared.mesh.rotation.y = 3.1416/1;
	basePared.mesh.rotation.x = 3.1416/1.3;
	this.mesh.add(basePared.mesh);


	//tubos inferiores
 	  
	//tubo izquierdo que forma el angulo interno
	soporte7 = new Soporte(0.3,0.6,18,20,"img/TexturesPatas.jpg");
	soporte7.mesh.position.set(16,12,5);
	soporte7.mesh.rotation.z = 3.1416/1.8;
	soporte7.mesh.rotation.y = 3.1416/1.2;
	soporte7.mesh.rotation.x = 3.1416/1.3;
	this.mesh.add(soporte7.mesh);

	//tubo derecho que forma el angulo interno
	soporte8 = new Soporte(0.3,0.6,18,20,"img/TexturesPatas.jpg");
	soporte8.mesh.position.set(16,12,-5);
	soporte8.mesh.rotation.z = 3.1416/1.8;
	soporte8.mesh.rotation.y = -3.1416/1.2;
	soporte8.mesh.rotation.x = -3.1416/1.3;
	this.mesh.add(soporte8.mesh);


	//tubo izquierdo  externo
	soporte9 = new Soporte(0.3,0.6,19,20,"img/TexturesPatas.jpg");
	soporte9.mesh.position.set(15,12,6.5);
	soporte9.mesh.rotation.z = 3.1416/2.8;
	soporte9.mesh.rotation.y = 3.1416/.2;
	soporte9.mesh.rotation.x = 3.1416/1.6;
	this.mesh.add(soporte9.mesh);

	//tubo derecho  externo
	soporte10 = new Soporte(0.3,0.6,19,20,"img/TexturesPatas.jpg");
	soporte10.mesh.position.set(15,12,-6.5);
	soporte10.mesh.rotation.z = 3.1416/2.8;
	soporte10.mesh.rotation.y = -3.1416/.2;
	soporte10.mesh.rotation.x = -3.1416/1.6;
	this.mesh.add(soporte10.mesh);


	// tubo frontal horizontal 
	soporte11 = new Soporte(0.3,0.3,20,20,"img/TexturesPatas.jpg");
	soporte11.mesh.position.set(23.5,10.5,0);
	soporte11.mesh.rotation.x = 3.1416/2;
	this.mesh.add(soporte11.mesh);



	//esferas uniones izquierda
	esfBaseInf = new Esfera(.8, 0x9D9D9D, "")
	esfBaseInf.mesh.position.set(23.5,10.5,10);
	this.mesh.add(esfBaseInf.mesh);

	//esferas uniones derechas
	esfBaseInf = new Esfera(.8, 0x9D9D9D, "")
	esfBaseInf.mesh.position.set(23.5,10.5,-10);
	this.mesh.add(esfBaseInf.mesh);

	//platos de soportes
	soporte7 = new Soporte(5,.5,2,20,"img/TexturaAmarilla2.jpg");
	soporte7.mesh.position.set(29.2,0,0);
	this.mesh.add(soporte7.mesh);



   }

/******************************************************************
   Modelos Constructores 
 ******************************************************************/

var Base = function(radioSup,radioInf,altura,vertices,textura) {
	this.mesh = new THREE.Object3D();
	var geometria = new THREE.CylinderGeometry(radioSup, radioInf, altura,vertices);
	if (textura != ""){
		var map = THREE.ImageUtils.loadTexture(textura);
		map.wrapS=map.wrapT=THREE.RepeatWrapping;
		map.repeat.set(2,1);
		material = new THREE.MeshPhongMaterial({ map: map });

	}
	else{
		material = new THREE.MeshPhongMaterial({color: 0x979494});
	}
	
	base = new THREE.Mesh(geometria, material);

	base.castShadow = true;	

	this.mesh.add(base);
}
/******************************************************************
 Construccion de un cylindro de soporte o patas
 ******************************************************************/

var Soporte = function(radSup, radInf, h, ver,textura) {

	this.mesh = new THREE.Object3D();
	var geometria = new THREE.CylinderGeometry(radSup, radInf, h, ver);
	if (textura != ""){
		var map = THREE.ImageUtils.loadTexture(textura);
		map.wrapS=map.wrapT=THREE.RepeatWrapping;
		map.repeat.set(1,1);
		material = new THREE.MeshPhongMaterial({ map: map });

	}
	else{
		material = new THREE.MeshPhongMaterial({color: 0x979494});
	}
	var	soporte = new THREE.Mesh(geometria, material);
	soporte.castShadow = true;	
	this.mesh.add(soporte);
}

/******************************************************************
 Construccion de una esfera 
 ******************************************************************/
var Esfera = function(radio, color, textura){
	this.mesh = new THREE.Object3D();
	var geometria = new THREE.SphereGeometry(radio,20,20);

	if (textura != ""){
		var map = THREE.TextureLoader(textura);
		var material = new THREE.MeshLambertMaterial({color: color, map: map});
	}
	else
		var material = new THREE.MeshLambertMaterial({color: color});

	esf = new THREE.Mesh(geometria, material);	
	esf.castShadow = true;	
	this.mesh.add(esf);
}		


