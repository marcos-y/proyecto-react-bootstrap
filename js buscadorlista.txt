import React, { useState, useEffect } from 'react';

const Buscador = ({productos}) => {

    const [nombre,setNombre] = useState("");
    const [productosFiltered,setProductosFiltered] = useState([...productos]);
    
    const handleChangeNombre = event => {
        const inputNombre = event.target.value
        setNombre(inputNombre);
        const arrayFiltrado = productos.filter(producto => producto.nombre.includes(inputNombre));
        setProductosFiltered(arrayFiltrado)
    }
    
    useEffect(()=>{
        setProductosFiltered(productos)
        setNombre("")
    },[productos])

    
    return (
        <>
        
            <label></label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Buscador</span>
                </div>
                <input onChange={handleChangeNombre} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>

            <ul className="list-group">
    {productosFiltered.map(prod => <li key={prod.nombre} className="list-group-item disabled" aria-disabled="true">{prod.precio} - {prod.nombre} - {prod.descripcion} - {prod.categoria}</li> )}    
            </ul>
        </>)
}

export default Buscador;