import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';

const Formularios = (props) => {

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
            <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={handleChangeNombre} value={nombre} type="text" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Precio</Form.Label>
                    <Form.Control  onChange={handleChangePrecio}  value={precio} type="number" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" onChange={handleChangeCategoria} value={categoria}>
                        <option>Bebidas</option>
                        <option>Comestibles</option>
                        <option>Ropa</option>
                        <option>Calzado</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group onChange={handleChangeDescripcion} value={descripcion} >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
            <Button type="submit" className="btn-primary" onClick={handleSubmit}>Agregar</Button>
        </>
    )
}

export default Formularios;