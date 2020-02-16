const {tarea1,tarea2} = require('./tareas');

// Esto es codigo se va a ejecutar al mismo tiempo
async function main(){
    try {
        console.time('Midiendo el tiempo');
        const resultado = await Promise.all([tarea1(),tarea2()]);

        console.timeEnd('Midiendo el tiempo');
        
        console.log('Primera tarea',resultado[0]);
        console.log('Segunda tarea',resultado[1]);
        
    } catch (error) {
        console.log(error);
    }
}

main();