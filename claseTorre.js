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
  
 ******************************************************************/
var Plataforma = function() {

	this.mesh = new THREE.Object3D();
	//Cuerpo
	//Base planta y torre de lanzamiento
	plataformaTorre = new PlataformaTorre();
	this.mesh.add(plataformaTorre.mesh);

	torre = new Torre();
	this.mesh.add(torre.mesh);


}



var PlataformaTorre = function(){
	this.mesh = new THREE.Object3D();

	//Primera base
	carro = new Cuadrado(114,11,131,1,"img/baseCarro.png");
	carro.mesh.position.set(0,5.5,20);
	this.mesh.add(carro.mesh);

	//Base Soporte Cohete
	base = new Cuadrado(135,14,160,1,"img/BaseTorre.jpg");
	base.mesh.position.set(0,17,20);
	this.mesh.add(base.mesh);

}

var Torre = function(){
	this.mesh = new THREE.Object3D();

	//Base Torre, piramide
	soporte = new Cilindro(23.5,43,60,4,0xFFFFFF,"img/torreT1.png");
	soporte.mesh.position.set(0,55,65);
	soporte.mesh.rotation.y = 3.1416/4;
	this.mesh.add(soporte.mesh);

	columna = new Cilindro(23.5,23.5,300,4,0xFFFFFF,"img/torreT.png");
	columna.mesh.position.set(0,235,65.5);
	columna.mesh.rotation.y = 3.1416/4;
	this.mesh.add(columna.mesh);

	brazo1 = new Cuadrado(31,10,15,20,"");
	brazo1.mesh.position.set(0,140,33);
	brazo1.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo1.mesh);

	brazo2 = new Cuadrado(31,10,15,20,"");
	brazo2.mesh.position.set(0,155,33);
	brazo2.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo2.mesh);

	brazo3 = new Cuadrado(31,10,15,20,"");
	brazo3.mesh.position.set(0,170,33);
	brazo3.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo3.mesh);

	brazo4 = new Cuadrado(31,10,15,20,"");
	brazo4.mesh.position.set(0,200,33);
	brazo4.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo4.mesh);

	brazo5 = new Cuadrado(31,10,15,20,"");
	brazo5.mesh.position.set(0,215,33);
	brazo5.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo5.mesh);

	brazo6 = new Cuadrado(36.65,10,15,20,"");
	brazo6.mesh.position.set(0,272,30);
	brazo6.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo6.mesh);

	brazo7 = new Cuadrado(36.65,10,15,20,"");
	brazo7.mesh.position.set(0,287,30);
	brazo7.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo7.mesh);

	brazo8 = new Cuadrado(36.65,10,15,20,"");
	brazo8.mesh.position.set(0,337,30);
	brazo8.mesh.rotation.y=3.1416/2;
	this.mesh.add(brazo8.mesh);

}

/******************************************************************
	Funciones auxiliares
 ******************************************************************/
var Cuadrado = function(ancho,alto,largo,vertices,textura){
	this.mesh= new THREE.Object3D();
	this.geometria = null;
	var geometria = new THREE.BoxGeometry(ancho, alto, largo, vertices,1,1);
	this.geometria = geometria;
	if (textura != ""){
		var map = new THREE.TextureLoader().load(textura);
		var material = new THREE.MeshLambertMaterial({map: map});
	}
	else 
		var material = new THREE.MeshLambertMaterial({color: 0xA79E9E, wireframe:true});

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
