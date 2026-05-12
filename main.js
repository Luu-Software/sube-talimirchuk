/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let RegistradaValor =  registrada.value;
  let DistanciaValor = Number(distancia.value);
  if (DistanciaValor >= 0 && DistanciaValor <= 3) {
    if (RegistradaValor === "si") {
      tarifa.innerText = "$715.24";
    } else {
      tarifa.innerText = "$1137.23";
    }
  } else if (DistanciaValor > 3 && DistanciaValor <= 6) {
    if (RegistradaValor === "si") {
      tarifa.innerText = "$794.74";
    } else {
      tarifa.innerText = "$1263.64";
    }
  } else if (DistanciaValor > 6 && DistanciaValor <= 12) {
    if (RegistradaValor === "si") {
      tarifa.innerText = "$855.97";
    } else {
      tarifa.innerText = "$1360.99";
    }
  } else if (DistanciaValor > 12 && DistanciaValor <= 27) {
    if (RegistradaValor === "si") {
      tarifa.innerText = "$917.24";
    } else {
      tarifa.innerText = "$1458.41";
    }
  }
});


