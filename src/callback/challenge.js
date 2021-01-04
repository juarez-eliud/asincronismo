/*No se usa Fetch de JS ya que es una implementación de ECMAS6 el cual ya utiliza
promesas, por lo que en este ejemplo se hace con callbacks*/

/*Los estados de un request de acuerdo a la documentacion:
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready*/

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //El tercer valor activa el asincronismo de HttpRequest
    xhttp.open('GET', url_api, true);
    //Escuchar la conexión
    xhttp.onreadystatechange = function (event) {
        //El estado 4 indica que se ha completado
        if(xhttp.readyState === 4) {
            //Valida status del response 
            if(xhttp.status === 200) {
                /*El standar dentro de Node el primer paramentro es el error y el segundo el 
                es la información que se desencadena, el cual en este caso es el resultado al
                llamado a la API*/            
                return callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    //Se envía la petición
    xhttp.send();
}

//Se busca la lista de los personajes
fetchData(API, function (error1, data1) {    
    if (error1) return console.log(error1);
    //Se busca en el API en ID de Rick
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        // Se consulta la api que contiene su dimensión        
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);

            //Se muestran resultados
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

            // rutas de las peticiones
            console.log(API);
            console.log(API + data1.results[0].id); 
            console.log(data2.origin.url); 
        });
    });    
});