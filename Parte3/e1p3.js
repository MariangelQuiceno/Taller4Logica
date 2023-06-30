// 3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
// compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d


let cadena = "Javascript es genial";

let contador = 1;

for (let i = 0; i < cadena.length; i++) {
  let elemento = cadena[i];


  if (elemento == " ") {
    contador++;
  }
}

console.log("La cadena esta compuesta por", contador, "palabras.");
