import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';

const Buscadorylista = ({ productos }) => {

  const [nombre, setNombre] = useState("");
  const [productosFiltered, setProductosFiltered] = useState([...productos]);

  const handleChangeNombre = event => {
    const inputNombre = event.target.value
    setNombre(inputNombre);
    const arrayFiltrado = productos.filter(producto => producto.nombre.includes(inputNombre));
    setProductosFiltered(arrayFiltrado)
  }

  useEffect(() => {
    setProductosFiltered(productos)
    setNombre("")
  }, [productos])

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChangeNombre} 
        />
      </InputGroup>

      <ListGroup>
        {productosFiltered.map(prod => { return (<ListGroup.Item>{prod.precio} - {prod.nombre} - {prod.descripcion} - {prod.categoria}</ListGroup.Item>) })}
      </ListGroup>

    </>
  )
}

export default Buscadorylista;