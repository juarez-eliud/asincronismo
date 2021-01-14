//--Flat
/* devolver una matriz con una submatriz aplanada, 
recibe como argunmento la profundidad */
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2))

//FLAT MAP
let array = [1,2,3,4,5];
console.table(array.flatMap(value => [value, value * 2]));

//-Trim
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final
//trim() limpia los espacios en blando tanto al inicio como al final de un string

//Optional Catch Binding
/* El parametro error es opcional ya que se encuentra disponible 
dentro del bloque catch */
try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//From entries
let entries = [["name", "Eliud"], ["age", 26]];
// array to object
console.log(Object.fromEntries(entries))
/* Devuelve un objeto construido con la clave valor
de cada uno de los elementos que está dentro del arreglo */

//-Symbol object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);