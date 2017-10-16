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
var escena, camara, renderer, ALTURA, ANCHO;
var valorTecla = 0;
var deltaRueda = 0;

var	mensaje;		//provisional para visualizar valores

/******************************************************************
 Funcion inicial, despues de haber cargado los recursos (archivos)
 ******************************************************************/
function iniciar() {
	crearEscena();
	crearCamara();
	crearLuces();
	crearMundo();
	crearCohete();

	mensaje = document.getElementById('mensaje');	
	ciclo();
}


/******************************************************************
 Ciclo principal de la animacion, repite para calcular y dibujar 
 ******************************************************************/
function ciclo(){
	leerTecla();
	leerMouse();
	calcularEstado();
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
	nearPlane = 10;
	farPlane = 1000;
	camara = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
	camara.position.x = 10;
	camara.position.z = 50; 
	camara.position.y = 90; 
	camara.lookAt(escena.position);
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
			mensaje.innerHTML = " a: " + (alfa * 57.29564553093965) + "<br>"+" X: "+ x1 + "<br> Z: "+z1;
//			mensaje.innerHTML = " a: " + alfa;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++			

			break;
	}
	camara.lookAt(escena.position);
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
	shadowLight.position.set(150, 250, 250);   //150, 350, 350
	
	// Allow shadow casting 
	shadowLight.castShadow = true;

	// define the visible area of the projected shadow
	shadowLight.shadow.camera.left = -800;		//-400
	shadowLight.shadow.camera.right = 800;
	shadowLight.shadow.camera.top = 800;
	shadowLight.shadow.camera.bottom = -800;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;

	// define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performant
	shadowLight.shadow.mapSize.width = 1024; //2048
	shadowLight.shadow.mapSize.height = 1024;//2048
	
	// to activate the lights, just add them to the scene
	escena.add(hemisphereLight);  
	escena.add(shadowLight);

	// an ambient light modifies the global color of a scene and makes the shadows softer
	ambientLight = new THREE.AmbientLight(0xdc8874, .5);	//.5
	escena.add(ambientLight);
}

/******************************************************************
 Cea el plano de referencia y los ejes
 ******************************************************************/
function crearMundo(){
	var geometria = new THREE.PlaneGeometry(250,500);
	var material = new THREE.MeshLambertMaterial({color: 0xB18904, side:THREE.DoubleSide});

	plano = new THREE.Mesh(geometria, material);
	plano.receiveShadow = true;
	plano.rotation.z = -.5 * Math.PI;
	plano.rotation.x = -.5 * Math.PI;
	var axisHelper = new THREE.AxisHelper(100);
  	escena.add(axisHelper);
	escena.add(plano);
}

/******************************************************************
 construye todos los objetos en el mundo 
 ******************************************************************/
function crearCohete(){
	cohete = new moduloLunar();
	escena.add(cohete.mesh);

}


/******************************************************************
  
 ******************************************************************/
function calcularEstado(){

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
function leerTecla(){
	switch (valorTecla) {
		case 38: // up
		case 37: // left
		case 40: // down
		case 39: // right
			moverCamara(valorTecla);
			break;

		case 32: // space
			break;

		case 65: // a
			break;

		case 83: // s
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
	var kd = 0.05;				//constante de ajuste
	var x = camara.position.x;
	var y = camara.position.y;
	var z = camara.position.z;
	var d0 = Math.sqrt(x*x + y*y + z*z);		//Distancia inicial
	var d1 = d0 + (deltaRueda * kd);				//Nueva distancia
	var fact = d1 / d0;								//porcentaje de ajuste a cada eje
	camara.position	.x = x * fact;
	camara.position	.y = y * fact;
	camara.position	.z = z * fact;
}
deltaRueda	= 0;
}




