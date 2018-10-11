import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Checkbox, Col, Button, ControlLabel } from 'react-bootstrap';

class Registro extends Component {
  state = {
    desc: '',
    stock: false,
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup >
          <Col componentClass={ControlLabel} sm={2}>
            Nombre
          </Col>
          <Col sm={8}>
            <FormControl
              placeholder="Nombre"
              disabled
              value={this.props.currentQuery}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Descripción
          </Col>
          <Col sm={8}>
            <FormControl
              placeholder="Descripcion"
              onChange={(e) => this.setState({ desc: e.target.value})}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Checkbox 
              value={this.state.stock}
              onChange={() => this.setState({ stock: !this.state.stock})}
            >Stock</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Button onClick={ () => {this.props.onRegister(this.state)}}> Registro</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Registro;
