const {tarea1,tarea2} = require('./tareas');

// Esto es codigo secuencial
async function main(){
    try {
        console.time('Midiendo el tiempo');
        const valor1 = await tarea1();
        const valor2 = await tarea2();
        console.timeEnd('Midiendo el tiempo');
        
        console.log('Primera tarea',valor1);
        console.log('Segunda tarea',valor2);
        
    } catch (error) {
        console.log(error);
    }
}

main();