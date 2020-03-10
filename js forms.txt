import React, { useState } from 'react';


const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState(0);
    const [descripcion,setDescripcion] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const producto = { nombre, precio, categoria, descripcion }
        props.onAddProd(producto)
    };

    const handleChangeNombre = event => setNombre(event.target.value);
    const handleChangePrecio = event => setPrecio(event.target.value);
    const handleChangeCategoria = event => setCategoria(event.target.value);
    const handleChangeDescripcion = event => setDescripcion(event.target.value);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Nombre</label>
                    <input onChange={handleChangeNombre} type="text" value={nombre} className="form-control"  placeholder="name@example.com"></input>
                </div>

                <div className="form-group">
                    <label >Precio</label>
                    <input onChange={handleChangePrecio} type="number" value={precio} className="form-control" placeholder="name@example.com"></input>
                </div>

                <div className="form-group">
                    <label >Categoria</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={categoria} onChange={handleChangeCategoria}>
                        <option value='ropa'>Ropa</option>
                        <option value='comida'>Comida</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

                <div className="form-group">
                    <label >Descripcion</label>
                    <textarea type="text" className="form-control" rows="3" value={descripcion} onChange={handleChangeDescripcion}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

export default Formulario;