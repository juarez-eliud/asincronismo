//-Operador de reposo
const obj = {
    name: 'Eliud',
    age: 26,
    country: 'MX'
};

let { name, ... all } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, all);

let { country, ...nameAndAge } = obj;
console.log(`name and age: `, nameAndAge);

//-Porpagation Properties
const person = {
    name: 'Eliud',
    age: 32
};

const personInformation = {
    ...person,
    country: 'MX'
};

console.log(`personInformation: `, personInformation);

//--Promise Finally
const testPromise = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Hi everyone'), 3000) 
            : reject()
    });
};

testPromise()
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizó'));

//--Grupos regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-01-14');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);

/* Otra de las nuevas características de ES9 en la captura de grupos
es nombrar nuestros grupos para encontrarlos de una forma más fácil. */
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;
console.log(year, month, day);
