// Ejemplo no funcional
function requestHandler(req,res){
    Usuario.buscaId(req.usuarioId)
        .then(funtion(usuario){
            return Tareas.buscaId(usuario.tareaId);
        })
        .then(funtion(tareas){
            tareas.completada = true;
            return tareas.guardar();
        })
        .then(funtion(){
            res.send('Tarea guardada');
        })

        .catch(function(errores){
            res.send(errores);
        })
}