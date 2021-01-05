const fetch = require('node-fetch');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
   
    try {
        const data = await fetch(url_api).then((res) => res.json());
        const character = await fetch(
            `${url_api}${data.results[0].id}`
        ).then((res) => res.json());
        const origin = await fetch(`${character.origin.url}`).then((res) =>
            res.json()
        );

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (err) {
        console.error(err);
    }
  
};

anotherFunction(API);