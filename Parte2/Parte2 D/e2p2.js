
// 2.Dada la cadena “Somos SENA”:

// d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una

// variable contadora para contar el número de veces que se encuentra la letra “o”.

let cadena = "Somos SENA";

let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  let elemento = cadena[i];
  if (elemento == "o" || elemento == "O") {
    contador++;
  }
}

console.log("La letra 'o' aparece", contador, "veces en la cadena.");
