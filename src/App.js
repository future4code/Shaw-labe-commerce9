import React from 'react';
import './App.css';
import Carrinhodecompra from './components/carrinho-de-compra';
import styled from "styled-components"
import Filtro from './components/filtro';
import Produtos from './components/produtos';

class App extends React.Component {
  render(){
    return(
     
      <div>
       <Filtro />
      <Produtos/>
      <Carrinhodecompra/>
     

      

      </div>


    )
  }
 
}

export default App
