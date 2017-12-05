/*******************************************************************
*  SENA CENTRO DE INDUSTRIA Y DE LA CONSTRUCCION                   *
*  Codigo JavaScript para pruebas de elaboracion de un cohete      *
*  Autor: Marco Leon Mora                                          *
*  Version: 1.0                                                    *
*  Fecha: Sept/2017                                                *
*                                                                  *
*******************************************************************/
window.addEventListener('load', iniciar, false);
window.document.addEventListener("keydown", detectarTecla, false);

/********** PROPIEDADES GLOBALES **********************************/
var escena, camara, renderer, ALTURA, ANCHO, interiorCabina, exteriorCabina;
var particleSystem =  null;
var particulas = null;
var cohete = null;
var deltaEstado = 1;
var puntoVista = new THREE.Vector3( 0, 0, 0 );
var valorTecla = 0;
var deltaRueda = 0;
var distanciaCamara = new THREE.Vector3(0,500,1000);
var posicionCamara = new THREE.Vector3(0,500,1000);
var posicionCabina = new THREE.Vector3(0,500,1000);

//var	mensaje;		//provisional para visualizar valores

/******************************************************************
 Funcion inicial, despues de haber cargado los recursos (archivos)
 ******************************************************************/
function iniciar() {
	crearEscena();
	crearCohete();
	crearCabina();
	crearCamara();
	crearLuces();
	crearMundo();	
	ciclo();
}


/******************************************************************
 Ciclo principal de la animacion, repite para calcular y dibujar 
 ******************************************************************/
function ciclo(){
	leerTecla();
	leerMouse();
	calcularEstado(deltaEstado);	
	particulas.updateParticles();
	renderer.render(escena, camara);
	requestAnimationFrame(ciclo);
}

/******************************************************************
 construye todos los objetos en el mundo 
 ******************************************************************/
function crearEscena(){
	ALTURA = window.innerHeight;
	ANCHO = window.innerWidth;

	// Create the scene
	escena = new THREE.Scene();
	// Create the renderer
	renderer = new THREE.WebGLRenderer({ 
		alpha: true,  // Allow transparency to show the gradient background we defined in the CSS
		antialias: true 
	});

	renderer.setSize(ANCHO, ALTURA);
	renderer.shadowMap.enabled = true;
	
	// Add the DOM element of the renderer to the container we created in the HTML
	container = document.getElementById('world');
	container.appendChild(renderer.domElement);
	
	// f the user resizes the screen we have to update the camera and the renderer size
	window.addEventListener('resize', reajustarPantalla, false);

}


/******************************************************************
 define los parametros de la camara y la agrega a la escena 
 ******************************************************************/
function crearCamara(){
	//Create the camera
	aspectRatio = ANCHO / ALTURA;
	fieldOfView = 55;	//60
	nearPlane = 0.1;
	farPlane = 10000000000;
	camara = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
	/*camara.position.x = 500;
	camara.position.z = 1000; 
	camara.position.y = 500;*/ 
	camara.position.copy(distanciaCamara);
	//interiorCabina.mesh.rotation.x = -Math.PI / 3
//	camara.lookAt(escena.position);
	camara.lookAt(cohete.cuerpo.mesh.position);
	escena.add(camara);
}


/******************************************************************
 Desplaza la camara, segun teclas 38:up; 37:left, 40:down; 39:right
 ******************************************************************/
function moverCamara(val){
//	var deltaAlfa = 0.0872666666666667; //5 grados, en radianes	
	var deltaAlfa = 0.0174533333333333; //1 grado, en radianes	

	if(val == 40 || val == 39) deltaAlfa *= -1;
	switch (val) {
		case 38: // up  		//Plano Y-Z
		case 40: // down
			var dist = Math.sqrt(camara.position.z*camara.position.z + camara.position.y*camara.position.y);
			var alfa = Math.atan(camara.position.y/camara.position.z) + deltaAlfa;
			var y1 = dist * Math.sin(alfa);
			var z1 = dist * Math.cos(alfa);
			camara.position.y = y1;
			camara.position.z = z1;
			break;
		case 39: // right		//Plano X-Z
		case 37: // left
			var dist = Math.sqrt(camara.position.z*camara.position.z + camara.position.x*camara.position.x);
			var alfa = Math.atan(camara.position.z/camara.position.x) + deltaAlfa;
			var z1 = dist * Math.sin(alfa);
			var x1 = dist * Math.cos(alfa);
			//if(alfa < -1.5708) z1 *=-1;
			camara.position.x = x1;
			camara.position.z = z1;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++			
//			mensaje.innerHTML = " a: " + (alfa * 57.29564553093965) + "<br>"+" X: "+ x1 + "<br> Z: "+z1;
//			mensaje.innerHTML = " a: " + alfa;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++			

			break;
	}
//	camara.lookAt(escena.position);
	camara.lookAt(puntoVista);
}

/******************************************************************
 Define las luces y las agrega a la escena
 ******************************************************************/
var hemisphereLight, shadowLight;
function crearLuces(){
	// A hemisphere light is a gradient colored light; 
	// the first parameter is the sky color, the second parameter is the ground color, 
	// the third parameter is the intensity of the light
	hemisphereLight = new THREE.HemisphereLight(0xAAAAAA,0x000000, .9)
	
	// A directional light shines from a specific direction. 
	// It acts like the sun, that means that all the rays produced are parallel. 
	shadowLight = new THREE.DirectionalLight(0xffffff, .9);

	// Set the direction of the light  
	shadowLight.position.set(300, 300, 300);   //150, 350, 350
	
	// Allow shadow casting 
	shadowLight.castShadow = true;

	// define the visible area of the projected shadow
	shadowLight.shadow.camera.left = -800;		//-400
	shadowLight.shadow.camera.right = 800;
	shadowLight.shadow.camera.top = 800;
	shadowLight.shadow.camera.bottom = -800;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 10000;

	// define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performant
	shadowLight.shadow.mapSize.width = 2048; //2048
	
	// to activate the lights, just add them to the scene
	escena.add(hemisphereLight);  
	escena.add(shadowLight);

	// an ambient light modifies the global color of a scene and makes the shadows softer
	ambientLight = new THREE.AmbientLight(0xdc8874, .5);	//.5
	escena.add(ambientLight);

	var helper = new THREE.DirectionalLightHelper( shadowLight, 20 );
	escena.add( helper );
}

/******************************************************************
 Cea el plano de referencia y los ejes
 ******************************************************************/
function crearMundo(){
	var geometria = new THREE.PlaneGeometry(10000,10000);
	var map = new THREE.TextureLoader().load("img/terreno.jpg");
	var material = new THREE.MeshLambertMaterial({color: 0x088A08, map: map, side:THREE.DoubleSide});
//	var material = new THREE.MeshLambertMaterial({color: 0x088A08});

	plano = new THREE.Mesh(geometria, material);
	plano.receiveShadow = true;
	plano.rotation.z = -.5 * Math.PI;
	plano.rotation.x = -.5 * Math.PI;
	var axisHelper = new THREE.AxisHelper(1000);
  	escena.add(axisHelper);
	escena.add(plano);

	var geometria1 = new THREE.SphereGeometry(10100,50,50);
	var map1 = new THREE.TextureLoader().load("img/tierra.jpg");
	var material1 = new THREE.MeshBasicMaterial({map: map1, side: THREE.FrontSide});
	esfera = new THREE.Mesh(geometria1, material1);	
	esfera.rotation.x = -.35 * Math.PI;
	esfera.rotation.z = .1 * Math.PI;
	esfera.receiveShadow = true;
	escena.add(esfera);

	var geometria2 = new THREE.SphereGeometry(200000,50,50);
	var map2 = new THREE.TextureLoader().load("img/universo.jpg");
	var material2 = new THREE.MeshBasicMaterial({map: map2, side: THREE.BackSide});
	esfera2 = new THREE.Mesh(geometria2, material2);
	esfera2.rotation.z = 3.1416/2.2;	
	escena.add(esfera2);

	var geometria3 = new THREE.SphereGeometry(9900,50,50);
	var map3 = new THREE.TextureLoader().load("img/cielito.jpg");
	var material3 = new THREE.MeshBasicMaterial({map: map3, side: THREE.BackSide});
	esfera3 = new THREE.Mesh(geometria3, material3);
	esfera3.rotation.z = 3.1416/2.2;	
	escena.add(esfera3);

	var geometria4 = new THREE.SphereGeometry(6000,50,50);
	var map4 = new THREE.TextureLoader().load("img/luna.jpg");
	var material4 = new THREE.MeshBasicMaterial({map: map4, side: THREE.DoubleSide});
	esfera4 = new THREE.Mesh(geometria4, material4);
	esfera4.rotation.x = Math.PI;
	esfera4.position.y = 99000;
	esfera4.rotation.z = 3.1416/2.2;	
	escena.add(esfera4);
}

/******************************************************************
 construye la cabina de visualizacion 
 ******************************************************************/
 var rotInicial;
function crearCabina(){
	interiorCabina = new Cabina("img/cabinaMod.png", 20, 1, 32, 32);
	rotInicial = -Math.PI/3.85;
	interiorCabina.mesh.rotation.x = rotInicial;
	escena.add(interiorCabina.mesh);

	/*exteriorCabina = new Cabina("img/cabina2.png", 20, 3, 4, 4);
	exteriorCabina.mesh.position.copy(posicionCamara);*/
	//escena.add(exteriorCabina.mesh);
}

/******************************************************************
 construye todos los objetos en el mundo 
 ******************************************************************/
 var cylinder = null;
function crearCohete(){
	fuerzaE = new THREE.Vector3(10000,3456441,0);
	vel = new THREE.Vector3(0,0,0);
	pos = new THREE.Vector3(0,24,0);	
	cohete = new Modulo(821336,fuerzaE,vel,2282033,500000,pos); 
	cohete.cuerpo = new SaturnoV();
	cohete.cuerpo.mesh.rotateX(Math.PI / 2);
	cohete.cuerpo.mesh.up.set(0, 1, 0);
	escena.add(cohete.cuerpo.mesh);
	torre = new Plataforma();
	torre.mesh.rotation.y = -3.1416/2;
	escena.add(torre.mesh);
	
	/*moduloLunar = new ModuloLunar();
	moduloLunar.mesh.position.set(0,295,0);
	cohete.cuerpo.mesh.add(moduloLunar.mesh);
	*/
	particulas = new Particles();
	particulas.mesh.position.set(0,-500,0);
	cohete.cuerpo.mesh.add(particulas.mesh);

	     var material = new THREE.MeshPhongMaterial({
            color: 0xfb3550,
            shading: THREE.FlatShading
        });
        // Dome
        geometry = new THREE.IcosahedronGeometry(700, 1);
        var domeMaterial = new THREE.MeshPhongMaterial({
            color: 0xfb3550,
            shading: THREE.FlatShading,
            side: THREE.BackSide
        });
        

        //cone
        var geometry = new THREE.CylinderGeometry(0, 50, 160, 8);
        geometry.rotateX(Math.PI / 2);
        cylinder = new THREE.Mesh(geometry, material.clone());
        cylinder.position.set(0, 70,50);
        cylinder.up.set(0, 0, 1);
        escena.add(cylinder);

        


}


/******************************************************************
  
 ******************************************************************/
 //Angulo 
var B,a,b,c;
/*var quaternion = new THREE.Quaternion();*/

function calcularEstado(deltaEstado){
	posicionCohete = new THREE.Vector3(0,0,0);
	posicionCohete.copy(cohete.calcularPosicion());

	cohete.cuerpo.mesh.position.copy(posicionCohete);
	posicionCamara.addVectors(posicionCohete,distanciaCamara);


	cohete.cuerpo.mesh.lookAt(cohete.fuerzaEmpuje);
	//dibujarLinea(cohete.calcularNuevaDireccion());
	cylinder.lookAt(cohete.calcularNuevaDireccion());
	cylinder.position.copy(posicionCohete);

	if (deltaEstado == 1 || deltaEstado == 5 ) {
		if (posicionCohete.y >= 5000) {			
			//camara.position.y += ((cohete.cuerpo.mesh.position.y - camara.position.y ) * 0.04 )+ cohete.velocidad.y;
			distanciaCamara.x = 0;
			distanciaCamara.y =	0;
			distanciaCamara.z = 800;

			posicionCabina.copy(posicionCamara);

			posicionCabina.z = 800;
			camara.position.copy(posicionCamara);
			/*interiorCabina.mesh.position.copy(posicionCabina);
			interiorCabina.mesh.rotation.x = -Math.PI/9;
			interiorCabina.mesh.rotation.y = Math.PI/30;*/
			//exteriorCabina.mesh.position.copy(posicionCamara);
			camara.lookAt(posicionCohete);
			deltaEstado = 2;
			//console.log("sale = " + deltaEstado);
			camara.lookAt(posicionCohete);
		}
		else
		{
			/*posicionCabina.copy(distanciaCamara);
			a = posicionCabina.distanceTo(posicionCohete);+
			b = posicionCohete.distanceTo(new THREE.Vector3(0,0,0));
			c = posicionCabina.distanceTo(new THREE.Vector3(0,0,0));
			B = ( Math.pow(b,2) - Math.pow(a,2) - Math.pow(c,2)) /( -2 * a * c  );
			//console.log("valor B : "+ B);
			B = Math.acos(B);*/
			//console.log(B);
			/*interiorCabina.mesh.rotation.x = rotInicial + B;
			interiorCabina.mesh.position.copy(posicionCabina);
			interiorCabina.mesh.rotation.y = Math.PI/30;*/

			camara.lookAt(posicionCohete);
			deltaEstado = 2;
		}
	}
	else if(deltaEstado == 2) {
		//console.log("entra 2 = " +  deltaEstado);
		distanciaCamara.x = 100;
		distanciaCamara.y = 2500; 
		
		camara.position.copy(posicionCamara);
		/*interiorCabina.mesh.position.copy(posicionCamara);
		interiorCabina.mesh.rotation.y = Math.PI/30;
		interiorCabina.mesh.rotation.x = -Math.PI/1.94;
		interiorCabina.mesh.rotation.z = Math.PI/25;*/
		//exteriorCabina.mesh.position.copy(posicionCamara);
		//camara.lookAt(posicionCohete);
		deltaEstado = 3;
		//console.log("sale =" + deltaEstado);
	}
	else if(deltaEstado == 3) {
		//console.log("entra 3 = " + deltaEstado);

		distanciaCamara.z = 8000;
		camara.position.copy(posicionCamara);
	/*	interiorCabina.mesh.position.copy(posicionCamara);
		interiorCabina.mesh.position.z = 7998;
		interiorCabina.mesh.rotation.y = Math.PI/30;
		interiorCabina.mesh.rotation.x = -Math.PI/4.5;
		interiorCabina.mesh.rotation.z = 0;*/
		//exteriorCabina.mesh.position.copy(posicionCamara);
		camara.lookAt(posicionCohete);
		deltaEstado = 4;	
		//console.log("sale " + deltaEstado);	
	}
	else if(deltaEstado == 4) {
		//console.log("entra 4 = " + deltaEstado);

		camara.position.x = posicionCohete.x;
		camara.position.y = posicionCohete.y + 320;
		camara.position.z = posicionCohete.z + 10;
		var vistaCamara = new THREE.Vector3();
		vistaCamara.y = posicionCohete.y + 500;

		camara.lookAt(vistaCamara);
		//interiorCabina.mesh.position.copy(camara.position);
/*		interiorCabina.mesh.position.x = camara.position.x;
		interiorCabina.mesh.position.y = camara.position.y ;
		interiorCabina.mesh.position.z = camara.position.z;
		interiorCabina.mesh.rotation.x = Math.PI/2.7;*/
		deltaEstado = 1;	
		//console.log("sale " + deltaEstado);	
	}
	//cohete.cuerpo.mesh.lookAt(nuevaDireccion);
}	



function dibujarLinea(nuevaDireccion){
	Geometria=new THREE.Geometry();
	// vector a dibujar
	var vertices=[[0,0,0],[nuevaDireccion.x,nuevaDireccion.y,nuevaDireccion.z]];
	var long_vertices=vertices.length;
	for(i=0;i<long_vertices;i++){
	    x=vertices[i][0];
	    y=vertices[i][1];
	    z=vertices[i][2];
	    //Agregamos vértices al vector
	    Vector=new THREE.Vector3(x,y,z);
	    //Agregamos el vector a la geometría
	    Geometria.vertices.push(Vector);   
	    }
	// agregamos un material para que el punto tenga color
	Material=new THREE.PointsMaterial({color:0XFF0000});
	// creamos una partícula con la geometría y el material
	Figura=new THREE.Line(Geometria,Material);
	// agregamos la partícula al escenario
	escena.add(Figura);
}
/******************************************************************
  
 ******************************************************************/
function reajustarPantalla(){
	// update height and width of the renderer and the camera
	ALTURA = window.innerHeight;
	ANCHO = window.innerWidth;
	renderer.setSize(ANCHO, ALTURA);
	camara.aspect = ANCHO / ALTURA;
	camara.updateProjectionMatrix();
}

//++++++++++++ FUNCIONES AUXILIARES +++++++++++++++++++++++++++++++

/******************************************************************
 Manejador del evento "keydown". Toma el valor ascii de la tecla pulsada 
 ******************************************************************/
function detectarTecla(e){
	var ev = (e)? e: event;
	valorTecla = (ev.which)? ev.which: event.keyCode;
}

/******************************************************************
 Manejador del evento "wheel". al mover la rueda del mouse, cambia distancia de la camara 
 ******************************************************************/
document.addEventListener('wheel', function(event){
	var evt = window.event || e //equalize event object
	deltaRueda = evt.detail? evt.detail*(-120) : evt.wheelDelta 
})


/******************************************************************
 para programar acciones con las teclas
 ******************************************************************/
 var actPart = null;
function leerTecla(){
	switch (valorTecla) {
		case 32: // Space
			activarParticulas();
			break;
		case 38: // up
		case 37: // left
		case 40: // down
		case 39: // right
			moverCamara(valorTecla);
			break;

		case 65: // a
			moverCohete(+5);
			break;
		case 67:
			//deltaEstado = 67;
			break;
		case 83: // s
			moverCohete(-5);
			break;
		case 90:
			/*deltaEstado = deltaEstado + 1 ;*/
			if (deltaEstado == 5 ) {
				deltaEstado = 1; 
			}
			else{
				deltaEstado += 1;
			}
			break;
		case 88:
/*			deltaEstado = 88;
*/			break;
		case 81:
		case 113: 		//Q + sube punto de vista camara
			moverPuntoVista(5)
			break;

		case 87:
		case 119: 		//W - baja punto de vista camara
			moverPuntoVista(-5)
			break;

	}
	valorTecla=0;
}


/******************************************************************
 para programar acciones con el Mouse.
 con la rueda, acerca o aleja la camara. deltaRueda 
 ******************************************************************/
function leerMouse(){
	//--- Rueda del Mouse ---------------
	if(Math.abs(deltaRueda) > 0){
		var kd = -0.05;				//constante de ajuste
		var x = camara.position.x;
		var y = camara.position.y;
		var z = camara.position.z;
		//OJO: CALCULAR HASTA puntoVista, no al 0,0,0

		var dir = new THREE.Vector3();
 		dir.subVectors( camara.position, puntoVista ).normalize(); //Vect Unit en direccion punto de vista
 		dir.multiplyScalar (deltaRueda * kd);		//Vector de desplazamiento a sumar
		camara.position.addVectors ( camara.position, dir );

/*		var d0 = Math.sqrt(x*x + y*y + z*z);		//Distancia inicial
		var d1 = d0 + (deltaRueda * kd);				//Nueva distancia
		var fact = d1 / d0;								//porcentaje de ajuste a cada eje
		camara.position	.x = x * fact;
		camara.position	.y = y * fact;
		camara.position	.z = z * fact;*/
	}
	deltaRueda	= 0;
}

//---------------- PRUEBA -------------------------------
function moverCohete(delta){
	posY = cohete.cuerpo.position.y;
	cohete.cuerpo.position.set(0, posY+delta, 0);
	//console.log("MoverCohete()" + posY+delta);
}


//Cambia punto de enfoque en Y de la camara
function moverPuntoVista(delta){
		puntoVista.y+= delta;
		camara.lookAt(puntoVista);
	

	


}



var power = 1;
function activarParticulas(){
	//console.log("entra power = " + power);
	if (power == 0) {
		particulas.mesh.visible = true;
		power = 1;
	}
	else{
		particulas.mesh.visible = false;
		var vector = new THREE.Vector3(0,0,0);
		cohete.fuerzaEmpuje.set(0,0,0);
		power = 0;

	}
	
	//console.log("sale power = " + power);
}