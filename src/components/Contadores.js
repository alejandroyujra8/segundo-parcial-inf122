import '../styles/contadores.css'
import React from 'react';

function Contadores(props) {
    return (
        <div className='botones-contador'>
            <div className='container1'>
                <input type="text" className='contenedor-texto' placeholder="Nueva Meta..." />
                <input type="submit" value="Agregar" className='boton-enviar' />
            </div>
            <div className='container2'>
                <input type="text" className='contenedor-texto' placeholder="Nuevftyfytftu..." />
                <input type="submit" value="Agregar" className='boton-enviar' />
            </div>
        </div>

    )
}

export default Contadores;