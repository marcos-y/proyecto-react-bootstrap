import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Formularios from './Formularios';
import Forms from './Forms.css';
import Buscadorylista from './Buscadorylista';
import Buscaylista from './Buscaylista.css';
import miapp from './miapp.css'

function App() {

  const [productos, setProductos] = useState([])

  const handleAddProd = (producto) =>{
    
    console.log(producto);
    setProductos([...productos, producto])
    
  }

  return (
  <>
  <div className="miapp">
    <div className="Formularios">
      <Formularios  productos={productos} onAddProd={handleAddProd}></Formularios>
    </div>

    <div className="Buscaylista">
      <Buscadorylista></Buscadorylista>
    </div>
  </div>
  </>
  );
}

export default App;
