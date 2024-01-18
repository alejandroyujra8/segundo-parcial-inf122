import './App.css';
import React from 'react';
import Contadores from '../src/components/Contadores.js'
import Tareas from '../src/components/Agregar-tareas'

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <div className='title-web'>
          <h1>Mis Metas</h1>
        </div>
        <div className='new-text'>
          <Tareas />
        </div>
        <div className='buttons'>
          <Contadores />
        </div>
      </div>
    </div>
  );
}

export default App;
