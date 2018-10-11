import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Resultados extends Component {
  render() {
    const { currentResults } = this.props;
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {
            currentResults.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.name}</td>
              </tr>
              ))
            }
        </tbody>
      </Table>
    );
  }
}

export default Resultados;
