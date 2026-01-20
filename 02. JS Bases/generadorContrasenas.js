function checkLongitud(longitud) {
  /* TU CODIGO */
if (longitud === "") return "debe ingresar la longitud";
if (typeof longitud !== "string") return "La longitud recibida no es válida";

let longitudAnumber= Number(longitud)
if (longitudAnumber < 3) return "La longitud debe ser mayor o igual a 3";
if (longitudAnumber > 10) return "La longitud debe ser menor o igual a 10";
return longitudAnumber;
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {

  console.log(longitud);
  /* TU CODIGO */
  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!@#$%^&*";

  var letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var caracteresDisponibles = letras;

  if (incluirEspeciales === true) {
      caracteresDisponibles += especiales;
  }

  if (incluirNumeros === true) {
      caracteresDisponibles += numeros;
  }

  if (incluirMayusculas === true) {
    caracteresDisponibles += letrasMayusculas;
  }

  var contrasena = "";

  if (longitud >= 3) {
    console.log(longitud);
    for (let i=0 ; i < longitud ; i++){
    contrasena += caracteresDisponibles[Math.floor(Math.random()* caracteresDisponibles.length)]
    console.log(contrasena)
  }

  }


  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
