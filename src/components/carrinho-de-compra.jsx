import React from "react";
import styled from "styled-components"


const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  text-align: center;

`

export default class Carrinhodecompra extends React.Component {


    render(){
      return(
       
        <AppContainer>
        
        <h1>Carrinho:</h1>
        
        {this.props.carrinho.map((produto) => {
          return (
            <div>
              {produto.quantidadeDeProduto}
              {produto.nomeDoProduto}
              <button onClick={produto.removerItem}>Remover</button>
            </div>
          )
        })}
        <p>Valor total: R$ {this.props.valorTotal}</p>

        
        </AppContainer>
  
  
      )
    }
   
  }
  