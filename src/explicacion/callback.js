Esto es conocido como callback hell 

// Ejemplo no funcional consulta BD

// funcion manejador de peticiones
function requestHandler(req,res){
    // Suponiendo que vamos a consultar a base de datos usando un 
    // modelo de usuario, de el id de usuario recibido por el usuario 
    // y consultamos para obtenerlo.
    Usuario.buscaId(req.usuarioId, function(err,usuario){
        if(err){
            res.send(err);
        }else{
            // Suponiendo que tenga tareas
            Tareas.buscaId(usuario.tareas,function(err,tareas){
                if (err) {
                    return res.send(err);
                }else{
                    tareas.completada = true;
                    tareas.guardar(function(err){
                        if(err){
                            return res.send(err);
                        }else{
                            res.send("Tarea guardada");
                        }
                    })
                }
            })
        }
    })
}