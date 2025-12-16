function checkLongitud(longitud) {
  /* TU CODIGO */
  return longitud >= 3;

}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */
  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!@#$%^&*";

  var letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var caracteresDisponibles = letras;
  
  if (incluirEspeciales) {
    caracteresDisponibles += especiales;
  }

  if (incluirNumeros) {
    caracteresDisponibles += numeros;
  }

  if (incluirMayusculas) {
    caracteresDisponibles += letrasMayusculas
  }

  var contrasena = "";

  if (checkLongitud (longitud)) {
    for ( var i = 0 ; i < longitud ; i++){
      var random = Math.random ();
      var multiplicado = random * caracteresDisponibles.length;
      var indice = Math.floor (multiplicado);
      var caracter = caracteresDisponibles[indice];
      contrasena += caracter;
    }
  }

  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
