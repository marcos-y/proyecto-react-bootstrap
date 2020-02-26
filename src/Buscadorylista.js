import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

const Buscadorylista = () => {
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
      />
    </InputGroup>

    <ListGroup>
      <ListGroup.Item>Item</ListGroup.Item>
      
    </ListGroup>
    </>
    )
}

export default Buscadorylista;