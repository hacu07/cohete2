/*******************************************************************
*  SENA CENTRO DE INDUSTRIA Y DE LA CONSTRUCCION                   *
*  Codigo JavaScript para definicion de las Clases relacionadas	   *
*  con el Cohete										           *
*  Autor: Marco Leon Mora                                          *
*  Version: 1.0                                                    *
*  Fecha: Sept/2017                                                *
*                                                                  *
*******************************************************************/

/******************************************************************
  Ensambla todo el cohete
 ******************************************************************/
 var SaturnoV = function(){
	this.mesh = new THREE.Object3D();
	
	etapa1 = new	EtapaI();

	this.mesh.add(etapa1.mesh);

	etapa2 = new	EtapaII();
	etapa2.mesh.position.y = 148;
 	this.mesh.add(etapa2.mesh); 

	etapa3 = new EtapaIII();
	etapa3.mesh.position.y = 229.5;
 	this.mesh.add(etapa3.mesh);	

	//Modulo de Servicio
	moduloS = new EtapaSM();
	moduloS.mesh.position.y = 320;
 	this.mesh.add(moduloS.mesh);

	//Modulo de Comando
	moduloC = new EtapaCM();
	moduloC.mesh.position.y = 331.5;
 	this.mesh.add(moduloC.mesh);

	torre = new	TorreEscape();
	torre.mesh.position.y = 326.5;	
 	this.mesh.add(torre.mesh);
 }

/******************************************************************
  
 ******************************************************************/
var EtapaI = function() {
	this.mesh = new THREE.Object3D();
	//Cuerpo
	cuerpo = new Cilindro(16.5, 16.5, 138, 20, 0xFFFFFF, "img/Etapa1.jpg");	
	cuerpo.mesh.position.y = 79;
	this.mesh.add(cuerpo.mesh);

	//Motores
	prop1 = new Cilindro(2, 5, 10, 20, 0x909090, "img/texturaTobera.jpg");
	prop1.mesh.position.set(0,5,0);
	this.mesh.add(prop1.mesh);

	prop2 = new Cilindro(2, 5, 10, 20, 0x909090, "img/texturaTobera.jpg");
	prop2.mesh.position.set(14,5,0);
	this.mesh.add(prop2.mesh);

	prop3 = new Cilindro(2, 5, 10, 20, 0x909090, "img/texturaTobera.jpg");
	prop3.mesh.position.set(0,5,-14);
	this.mesh.add(prop3.mesh);

	prop4 = new Cilindro(2, 5, 10, 20, 0x909090, "img/texturaTobera.jpg");
	prop4.mesh.position.set(0,5,14);
	this.mesh.add(prop4.mesh);

	prop5 = new Cilindro(2, 5, 10, 20, 0x909090, "img/texturaTobera.jpg");
	prop5.mesh.position.set(-14,5,0);
	this.mesh.add(prop5.mesh);

	//Aletas
	aleta1 = new Aleta();
	aleta1.mesh.position.set(20,14,0);
	this.mesh.add(aleta1.mesh);

	aleta2 = new Aleta();
	aleta2.mesh.rotation.y= 3.1416;
	aleta2.mesh.position.set(-20,14,0);
	this.mesh.add(aleta2.mesh);

	aleta3 = new Aleta();
	aleta3.mesh.rotation.y= 3.1416/2;
	aleta3.mesh.position.set(0,14,-20);
	this.mesh.add(aleta3.mesh);

	aleta4 = new Aleta();
	aleta4.mesh.rotation.y= -3.1416/2;
	aleta4.mesh.position.set(0,14,20);
	this.mesh.add(aleta4.mesh);

	//Conos
	cono1 = new Cilindro(0, 5, 18, 20, 0x9D9D9D, "");
	cono1.mesh.position.set(16,18,0);
	this.mesh.add(cono1.mesh);

	cono2 = new Cilindro(0, 5, 18, 20, 0x9D9D9D, "");
	cono2.mesh.position.set(-16,18,0);
	this.mesh.add(cono2.mesh);

	cono3 = new Cilindro(0, 5, 18, 20, 0x9D9D9D, "");
	cono3.mesh.position.set(0,18,16);
	this.mesh.add(cono3.mesh);

	cono4 = new Cilindro(0, 5, 18, 20, 0x9D9D9D, "");
	cono4.mesh.position.set(0,18,-16);
	this.mesh.add(cono4.mesh);

	//anillo que cubre los propulsores
	anillo = new Cilindro(16.5,16.5,27, 20, 0xFFFFFF, "img/texturaAnilloEtp1.png");
	anillo.mesh.position.set(0,161.5,0);
	this.mesh.add(anillo.mesh);
	this.mesh.castShadow = true;
}

/******************************************************************
  
 ******************************************************************/
var EtapaII = function(){
	this.mesh = new THREE.Object3D();
	cuerpo = new Cilindro(16.5, 16.5, 54, 20, 0xFFFFFF, "img/texturaFase2.png"); 	
	cuerpo.mesh.position.set(0,54,0);
	this.mesh.add(cuerpo.mesh);

	basePropulsor = new Cilindro(16,10,18, 20, 0xFFFFFF, "");
	basePropulsor.mesh.position.set(0,18,0);
	this.mesh.add(basePropulsor.mesh); 

	propulsor1 = new Cilindro(1,3,9, 20, 0x9D9D9D,"img/texturaTobera2.png")
	propulsor1.mesh.position.set(0,4.5,0);
	this.mesh.add(propulsor1.mesh); 

	propulsor2 = new Cilindro(1,3,9, 20, 0x9D9D9D,"img/texturaTobera2.png");
	propulsor2.mesh.position.set(8,4.5,0);
	this.mesh.add(propulsor2.mesh); 

	propulsor3 = new Cilindro(1,3,9, 20, 0x9D9D9D,"img/texturaTobera2.png");
	propulsor3.mesh.position.set(-8,4.5,0);
	this.mesh.add(propulsor3.mesh);

	propulsor4 = new Cilindro(1,3,9, 20, 0x9D9D9D,"img/texturaTobera2.png");
	propulsor4.mesh.position.set(0,4.5,8);
	this.mesh.add(propulsor4.mesh);

	propulsor5 = new Cilindro(1,3,9, 20, 0x9D9D9D,"img/texturaTobera2.png");
	propulsor5.mesh.position.set(0,4.5,-8);
	this.mesh.add(propulsor5.mesh); 

   //anillo que cubre los propulsores
	anillo = new Cilindro(11,16.5,27, 20, 0xFFFFFF, "img/Etapa2Anillo.png");
	anillo.mesh.position.set(0,94.5, 0);
	this.mesh.add(anillo.mesh);
	this.mesh.castShadow = true;
}

/******************************************************************
  
 ******************************************************************/
var EtapaIII = function(){
	this.mesh = new THREE.Object3D();

	basePropulsor = new Cilindro(3,5,16, 20, 0xFFFFFF,"img/texturaTobera2.png");
	basePropulsor.mesh.position.set(0, 8, 0);
	this.mesh.add(basePropulsor.mesh); 

	tanque = new Esfera(11, 0x9D9D9D, "")
	tanque.mesh.position.set(0, 26, 0);
	this.mesh.add(tanque.mesh);

	cuerpo = new Cilindro(11, 11, 39, 20, 0xFFFFFF,"img/texturaEtapa3.png");	
	cuerpo.mesh.position.set(0, 46, 0);
	this.mesh.add(cuerpo.mesh);
}

/******************************************************************
  ETAPA MODULO DE SERVICIO
 ******************************************************************/
var EtapaSM = function() {
	this.mesh = new THREE.Object3D();
	//Cuerpo
	cuerpo = new Cilindro(6, 6, 13, 20, 0xFFFFFF, "");	
	this.mesh.add(cuerpo.mesh);

	cono = new Cilindro(6, 11, 19, 20, 0xFFFFFF, "");
	cono.mesh.position.set(0,-16,0);
	this.mesh.add(cono.mesh);

	propulsor = new Cilindro(1, 5, 9, 20, 0x555555, "");
	propulsor.mesh.position.set(0,-11,0);
	this.mesh.add(propulsor.mesh);
}

/******************************************************************
  ETAPA MODULO DE COMANDO
 ******************************************************************/
var EtapaCM = function() {
	//Cuerpo
	this.mesh = new THREE.Object3D();
	var mC = new Cilindro(1, 6, 10, 20, 0xFFFFFF, "img/texturaModulo.png");
	mC.mesh.rotation.y = -3.1416/1.1;
	this.mesh.add(mC.mesh);
}

/******************************************************************
  
 ******************************************************************/
var TorreEscape = function() {
	this.mesh = new THREE.Object3D();

	torre1 = new Cilindro(2, 6, 9,20, 0xFFFFFF, "img/texturaModuloComando3.jpg");
	torre1.mesh.position.set(0,4.5,0);	
	this.mesh.add(torre1.mesh);

	torre2 = new Cilindro(0.6, 2, 10, 20, 0xFFFFFF,"img/texturaModuloComando3.jpg");	
	torre2.mesh.position.set(0,14,0);
	this.mesh.add(torre2.mesh);

	torre3 = new Cilindro(0.6, 0.6, 20, 20, 0xFFFFFF,"img/texturaModuloComando3.jpg");
	torre3.mesh.position.set(0,29,0);	
	this.mesh.add(torre3.mesh);

	torre4 = new Cilindro(.1, 0.6, 2, 20, 0xFFFFFF,"img/texturaModuloComando3.jpg");
	torre4.mesh.position.set(0,40,0);	
	this.mesh.add(torre4.mesh);

	prop1 = new Cilindro(.1,0.6, 2.5, 20, 0xFFFFFF,"img/texturaModuloComando3.jpg");
	prop1.geometria.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 2.5, 0 ) );
	prop1.mesh.rotation.z= Math.PI/4;
	prop1.mesh.rotation.y= Math.PI;
	prop1.mesh.position.set(-2.7,22.7,0);
	this.mesh.add(prop1.mesh);

	prop2 = new Cilindro(.1,0.6, 2.5, 20, 0xFFFFFF,"img/texturaModuloComando3.jpg");
	prop2.geometria.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 2.5, 0 ) );
	prop2.mesh.rotation.z= -Math.PI/4;
	prop2.mesh.rotation.y= (Math.PI*2)/3;
	prop2.mesh.position.set(1.4,22.7,2.4);	
	this.mesh.add(prop2.mesh);

	prop3 = new Cilindro(.1,0.6, 2.5, 20, 0xFFFFFF,"img/texturaModuloComando3.jpg");
	prop3.geometria.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 2.5, 0 ) );
	prop3.mesh.rotation.z= -Math.PI/4;
	prop3.mesh.rotation.y= -(Math.PI*2)/3;
	prop3.mesh.position.set(1.4,22.7,-2.4);	
	this.mesh.add(prop3.mesh);
}

/******************************************************************
  
 ******************************************************************/
var Aleta = function() {
	this.mesh = new THREE.Object3D();
	this.alto = 8;
	this.ancho = 16;
	this.grueso = .5;

	var geometria = new THREE.BoxGeometry(this.ancho, this.alto, this.grueso,1,1,1);
	var material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
	var cuerpo = new THREE.Mesh(geometria, material);

	geometria.vertices[1].y -=5;
	geometria.vertices[0].y -=5;
	cuerpo.castShadow = true;	
	this.mesh.add(cuerpo);
}

/******************************************************************
 Construccion de un cilindro con ingreso de parametros
 ******************************************************************/
var Cilindro = function(radSup, radInf, h, caras, color, textura) {
	this.mesh = new THREE.Object3D();
	this.geometria = null;
	var geometria = new THREE.CylinderGeometry(radSup, radInf, h, caras);
	this.geometria = geometria;
	if (textura != ""){
		var map = new THREE.TextureLoader().load(textura);
		var material = new THREE.MeshLambertMaterial({color: color, map: map});
	}
	else
		var material = new THREE.MeshLambertMaterial({color: color});

	var cuerpo = new THREE.Mesh(geometria, material);
	cuerpo.castShadow = true;	
	this.mesh.add(cuerpo);
}

/*
var Cilindro = function(radioSup,radioInf,alto,caras,textura){
	this.mesh = new THREE.Object3D();
	this.geometria = null;
	var geometria = new THREE.CylinderGeometry(radioSup, radioInf, alto, caras);
	this.geometria = geometria;
	if (textura != ""){
		var map = new THREE.TextureLoader().load(textura);
		var material = new THREE.MeshLambertMaterial({map: map});
	}
	else 
		var material = new THREE.MeshLambertMaterial({wireframe:true});

	var cuerpo = new THREE.Mesh(geometria, material);
	cuerpo.castShadow = true;	
	this.mesh.add(cuerpo);

}

*/

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

/******************************************************************
 Construccion de las particulas 
 ******************************************************************/

 var Particles = function(){
//	console.log("entra");
 	this.mesh = new THREE.Object3D();
 	var texture = new THREE.TextureLoader().load( "img/particle.png" );

	var particleCount = 15000,
	    particles = new THREE.Geometry(),

// create the particle variables
		pMaterial = new THREE.PointsMaterial({
  			color: 0xFFFFFF,
		  	size: 7,
			map: texture,
			blending: THREE.AdditiveBlending,
			transparent: true
		});

	// now create the individual particles
	for (var p = 0; p < particleCount; p++) {

	  // create a particle with random
	  // position values, -250 -> 250
	  /*var pX = Math.random() *  30 - 15,
	      pY = Math.random() * 1000 - 500,
	      pZ = Math.random() *  30 - 15,
	      particle = new THREE.Vector3();*/
	 R = 15;
	 //Radio
	 r = Math.random() * R;
	 alfa = Math.random() * 6.2831;

	 var pX = r * Math.cos(alfa),
	     pY = Math.random() * 1000 - 500,
	     pZ = r * Math.sin(alfa),
	     particle = new THREE.Vector3();

	 particle.x = pX;
	 particle.y = pY;
	 particle.z = pZ;

	  // add it to the geometry
	 particles.vertices.push(particle);

	  // create a velocity vector
	  var vel = Math.random() * 4 - 2;
		particle.velocity = new THREE.Vector3(
  			vel * Math.cos(alfa) ,              // x
 			 0, // y: random vel
  			vel * Math.sin(alfa)
  			)             // z
	}
	particleSystem = new THREE.Points(
	    particles,
	    pMaterial);
	this.mesh.add(particleSystem);
	var baseY = 0;
  	var cont = null;
	this.updateParticles = function() {
		  // add some rotation to the system
/*		  particleSystem.rotation.y += 0.1;
*/		  //particleSystem.rotation.z += 0.001;
		  //particleSystem.rotation.x += 0.001;
		  /*if (cont < 5) {
		  	particleSystem.rotation.z += 0.01;
		  	console.log("entro if 1");
		  	cont = cont + 1;
		  }*/
		  /*if (cont > 25){ 
		  	console.log("if 2");
		  	particleSystem.rotation.z = 0;
		  	cont = 0;	
		  }*/
		  //console.log(cont);


		  var pCount = particleSystem.geometry.vertices.length;
		  while (pCount--) {

		    // get the particle
		    var particle =
		      particleSystem.geometry.vertices[pCount];

	//	      particle.y -= 5;

		    // check if we need to reset
		    var dy = baseY + 500 - particle.y;

		    var dist = new THREE.Vector3(particle.x, 0, particle.z);
		    var d1 = dist.length()/20;

		    if ((dy > 1000) || (dy*d1  > 1000)) {
		      	particle.y = baseY + 500;
		       	particle.velocity.y = 0;

		    	R = 15;
	 			//Radio
				r = Math.random() * R;
				alfa = Math.random() * Math.PI * 2;

		       	particle.x = r * Math.cos(alfa) ;
		      	particle.z = r * Math.sin(alfa);
		    }

	/*	    if (Math.abs(particle.z) > 500) {
		       particle.velocity.z *= -1;
		    }

		    if (Math.abs(particle.x) > 500) {
		       particle.velocity.x *= -1;
		    }
	*/


		    // update the velocity with
		    // a splat of randomniz
		    particle.velocity.y -= Math.random();	//entre 0 y 1

		    // and the position
		    particle.y += particle.velocity.y;
		    particle.x += particle.velocity.x;
		    particle.z += particle.velocity.z;

		  }

		  // flag to the particle system
		  // that we've changed its vertices.
		  particleSystem.geometry.__dirtyVertices = true;
		  particleSystem.geometry.verticesNeedUpdate = true;

	}
 }


var Cabina = function(img, radio, lado,segW, segH){
	 // material   
	this.mesh = new THREE.Object3D();
    var map = new THREE.TextureLoader().load(img);

    if (lado == 1) {
    	var dish_material = new THREE.MeshLambertMaterial( {
	        color: 0xFFFFFF, 
	        side: THREE.BackSide,
	        ambient: 0xFFFFFF,
	        shading: THREE.FlatShading,
	        transparent: true,
	        map: map/*,
	        wireframe :true*/
    		} );
    } else if(lado == 2) {
    	var dish_material = new THREE.MeshLambertMaterial( {
        color: 0xFFFFFF, 
        side: THREE.DoubleSide,
        ambient: 0xFFFFFF,
        shading: THREE.FlatShading,
        transparent: true/*,
        map: map*/
    	} );
    }
    else{
    	var dish_material = new THREE.MeshLambertMaterial( {
        color: 0xFFFFFF, 
        side: THREE.FrontSide,
        ambient: 0xFFFFFF,
        shading: THREE.FlatShading,
        transparent: true,
        map: map
        } );
    } 
    
    
    var dish_geometry = new THREE.SphereGeometry(radius=radio, widthSegments=segW, heightSegments=segH, 
	phiStart=3, phiLength=3.2, 
	thetaStart= 0, thetaLength=3.1);

    dish = new THREE.Mesh( dish_geometry, dish_material );
    this.mesh.add(dish);
}
/******************************************************************
 Animacion de las particulas 
 ******************************************************************/
 // animation loop

  
/************ FIN DE CODIGO****************************/