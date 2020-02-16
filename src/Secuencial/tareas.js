const util = require('util');
// convertir funciones que se manejan con callback a promesas o async await
const sleep = util.promisify(setTimeout);

module.exports = {
    async tarea1(){
        // Con el try catch evitamos que no se detenga la segunda funcion como describimos en el comentario abajo
        try {
            // Esto va a lanzar un error para que acabe la ejecucion. Esto va a hacer que que la segunda tarea no se va a ejecutar tampoco.
            throw new Error('Algun problema');
            await sleep(4000); // 4 segundos
            return 'primer valor'
        } catch (error) {
            console.log(error);
        }
    },
    async tarea2(){
        try {
            await sleep(2000); // 2 segundos
            return 'segundo valor'
        } catch (error) {
            console.log(error);
        }
    }
};