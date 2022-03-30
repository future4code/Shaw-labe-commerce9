import React from 'react';
import './App.css';
import Carrinhodecompra from './components/carrinho-de-compra';
import styled from "styled-components"
import Filtro from './components/filtro';


class App extends React.Component{


  render() {
    return(
     
      <div>
       <Filtro />
      <Carrinhodecompra/>
     
      

      </div>


    )
  }
 
}

export default App

