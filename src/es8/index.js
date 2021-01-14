//--Object.Entries
//Devuelve la clave y los valores de una matriz
const data = {
    fronted: 'Eliud',
    backend: 'Abraham',
    design: 'José'
}

const entries = Object.entries(data);
console.table(entries);
/* Si se necesita saber cuantos elementos contiene un objeto
o en este caso el arreglo se usa: */
console.log(entries.length);

//--Object values
//Devuelve los valores de un objeto a un arreglo
const data2 = {
    fronted: 'Eliud',
    backend: 'Abraham',
    design: 'José'
}

const values = Object.values(data2);
console.log(values);

//--Padding
//Anteponer elementos a un string
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ---'));

//-Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            
            setTimeout(()=> {
                resolve('Resuelto');
            }, 3000);
        }else{
            reject(new Error('Error'));
        }
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();
//Otra propuesta para trabajar con async await
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();

