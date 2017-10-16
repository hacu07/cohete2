/*******************************************************************
*  SENA CENTRO DE INDUSTRIA Y DE LA CONSTRUCCION                   *
*  Codigo JavaScript de clase estatica de motor de fisica	       *
*  Autor: Marco Leon Mora                                          *
*  Version: 1.0                                                    *
*  Fecha: Sept/2017                                                *
*                                                                  *
*******************************************************************/
/*const MASATIERRA = 5.972 * Math.pow(10, 24), //kg
	  KGRAVEDAD = 6.674 * Math.pow(10, -11), // (N . m2)/ kg2
	  RTIERRA =    20902230,97 //pies   (6371000 metros)
*/
class MotorFisica{

	static get masaTierra() {
	    return MASATIERRA;
	}

	static get kGravedad() {
	    return KGRAVEDAD;
	}

	static get rTierra() {
	    return RTIERRA;
	}
}