//use shortcut Ctrl+Alt+N
//Default Params 
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

//Concat
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//Template literal (Comillas freancesas)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilineas
//https://slipsum.com/
let lorem = 'ioaskl akldj aldjf lj \n'
+ 'fdgdsfgsfd asdfg sadf';
//es6
let lorem2 = `asdfasdf añaslskdjf
añalskdjf ñalsldkfj añalskdjf`;
console.log(lorem);
console.log(lorem2);

//Desestructuración de elementos
let person = {
    'name': 'Eliud',
    'age': 26,
    'country': 'MX'
};
console.log(person.name, person.age, person.country);
//es6
let {name, age, country} = person;
console.log(name, age, country);

//Spread Operator
let team1 = ['Eliud', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yeshika', 'Camila'];
let education = ['David', ...team1, ...team2];
console.table(education);

//var, let, const

{
    var global = 'Global Var';
}

{
    var globallet = 'Global Let';
}

console.log();


