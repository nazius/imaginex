import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar.js';
import Resultados from './components/Resultados.js';
import Registro from './components/Registro.js';
import axios from 'axios' 

// creado el 24 sept 2018 por juan pablo nazar - jp.nazar@gmail.com

const instance = axios.create({
  baseURL: 'http://ec2-54-183-147-121.us-west-1.compute.amazonaws.com:8181',
  headers: {'access_token': '931e7a07a9537072c44ba7bb4effdae54c483ea8'}
});

class App extends Component {
  state = {
    currentQuery: '',
    currentResults: [],
    showRegister: false,
   };

  doSearch = (query) => {
    console.log('buscando...')
    this.setState({currentQuery: query})
    instance.get(`/v1/products.json?limit=30&state=0&name=${query}`)
      .then(response => {
        this.setState({
          currentResults: response.data.items
        }, () => {
          console.log('response.data.items.length', response.data.items.length);
          this.setState({showRegister: !response.data.items.length});
        });
        })
  }

  doRegister = (values) => {
    console.log('registrando producto...')
    const preparedObject = {
      name: this.state.currentQuery || '', // nombre de producto
      description: values.desc || '', //descripcion
      allowDecimal: 0, //permite decimales (boolean)
      ledgerAccount: '', // cuenta contable
      costCenter: '', // centro de costo
      stockControl: values.stock // controlar stock (boolean)
    }

    instance.post('/v1/products.json', preparedObject)
      .then(response => {
        console.log('success', response)
        alert('¡Registro exitoso!')
        this.doSearch(this.state.currentQuery)
      })
  }

  handleButton = (query) => {
    if(query){
      this.doSearch(query);
    }
  }

  render() {
    return (
      <div className="App">
        <MyNavbar onSearch={this.handleButton}/>
        {this.state.currentResults.length > 0 && <Resultados currentResults={this.state.currentResults}/>}
        {this.state.showRegister && <Registro currentQuery={this.state.currentQuery} onRegister={this.doRegister}/>}
      </div>
    );
  }
}

export default App;
