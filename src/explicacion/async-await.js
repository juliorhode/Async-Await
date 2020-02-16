// Ejemplo no funcional consultando a BD
async function requestHandler(req,res){
    try {
        const usuario = await Usuario.buscaId(req.usuarioId);
        const tareas = await Tareas.buscaId(usuario.tareaId);
        tareas.completada = true;
        await tareas.guardar();
        res.send('Tarea guardada');
    } catch (error) {
        res.send(errores);
    }
    
}