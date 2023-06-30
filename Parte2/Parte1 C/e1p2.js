// 2.Dada la cadena “Somos SENA”:

// c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”



let cadena = "Somos SENA";
let contieneE = false;

for (let i = 0; i < cadena.length; i++) {
  let elemento = cadena[i];
  if (elemento == "E" || elemento == "e") {
    contieneE = true;
    break;
  }
}

if (contieneE == true) {
  console.log("La cadena contiene la letra 'E'.");
} else {
  console.log("La cadena no contiene la letra 'E'.");
}
