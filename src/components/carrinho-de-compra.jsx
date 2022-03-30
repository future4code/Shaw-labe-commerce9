import React from "react";
import styled from "styled-components"


const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`


export default class Carrinhodecompra extends React.Component {


    render(){
      return(
       
        <AppContainer>
        
        <h1>Carrinho:</h1>
        
        <p>valor total: #ndajflkdan</p>

        
        </AppContainer>
  
  
      )
    }
   
  }
  