import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

class MyNavbar extends Component {
  state = { query: '' };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">imaginex</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Busqueda"
                value={this.state.query}
                onChange={ (e)=> this.setState({query: e.target.value})} 
              />
            </FormGroup>{' '}
            <Button
              disabled={!this.state.query.length}
              onClick={()=> {
                this.props.onSearch(this.state.query)
                this.setState({query: ''})
              }}
              type="submit"
            >Buscar</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
