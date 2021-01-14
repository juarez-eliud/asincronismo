//use shortcut Ctrl+Alt+N
//--Default Params 
function newFunction(name, age, country) {
    var name = name || 'Eliud';
    var age = age || 26;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Eliud', age = 26, country = 'MX') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Oscar', 32, 'MX');

//--Concat
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//--Template literal (Comillas freancesas)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//--Multilineas
//https://slipsum.com/
let lorem = 'ioaskl akldj aldjf lj \n'
    + 'fdgdsfgsfd asdfg sadf';
//es6
let lorem2 = `asdfasdf añaslskdjf
añalskdjf ñalsldkfj añalskdjf`;
console.log(lorem);
console.log(lorem2);

//--Desestructuración de elementos
let person = {
    'name': 'Eliud',
    'age': 26,
    'country': 'MX'
};
console.log(person.name, person.age, person.country);
//es6
let { name, age, country } = person;
console.log(name, age, country);

//--Spread Operator
let team1 = ['Eliud', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yeshika', 'Camila'];
let education = ['David', ...team1, ...team2];
console.table(education);

//--var, let, const

{
    var global = 'Global Var';
}
{
    //Solo es accesible en el bloque de codigo en el cual ha sido definido
    let globallet = 'Global Let';
    console.log(globallet);
}
console.log(global);

//--Object property
let name = 'Eliud';
let age = 26;
let obj = { name: name, age: age };
//ES6 
//Toma llave y valor de los elementos
let obj2 = { name, age };
console.log(obj);
console.log(obj2);

//--Arrow Function
const names = [
    { name: 'Eliud', age: 26 },
    { name: 'Yeshika', age: 32 },
    { name: 'Ulises', age: 15 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});
//es6
//esta es otra forma de recibir objetos y solo filtrar la key que necesitamos
let listOfNames5 = names.map(({ name }) => console.log(name));
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age) => {
    //codigo a ejecutar
}
const listOfNames4 = name => {
    //codigo a ejecutar 
}
const square = num => num * num;
console.log(square(10));

//Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Yes');
        } else {
            reject('No');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//-POO
class Calculator {

    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

//--Import module
const hello = require('./module')
console.log(hello());

//--Generators
/* Es una función especial que retorna una serie de valores 
según el algoritmo definido */
function* helloWordl() {
    if (true) {
        //yield guarda este estado de forma interna
        yield 'Hello, ';
    }
    if (true) {
        yield 'World!';
    }
};

const generatorHello = helloWordl();
/* El valor next va ejecutando la logicas gurdadas de forma secuencial 
y permite obtener el valor según se el caso */
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// console.log(generatorHello.next().done);
/* Los GENERADORES son para iterar el codigo dentro de una function
tambien puedes iterarlos dentro un FOROF ejemplo: */
for (const iterator of generatorHello) {
    console.log(iterator);
}

// La funcion de fibonnaci con una funcion generadora:
function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3

//Ejemplo 2
function* fibonacciGenerator(){    
    let previous = 0;
    let current = 1;
    let fibonacci;
    // console.log(previous);
    // console.log(current);
    while (true){
        fibonacci = previous + current;
        yield fibonacci;
        previous = current;
        current = fibonacci;
    }     
}
const serieFibonacci = fibonacciGenerator();
let numbers = 10;
for (let i=0; i<numbers; i++){
    console.log(serieFibonacci.next().value);
}



