import React from 'react';
import '../styles/Agregar-tareas.css';

function Tareas (props){
    return (
        <div className='container-default'>
            <input type="text"className='contenedor-texto' placeholder="Nueva Meta..." />
            <input type="submit" value="Agregar" className='boton-enviar' />
        </div>        
    )
}

export default Tareas;
