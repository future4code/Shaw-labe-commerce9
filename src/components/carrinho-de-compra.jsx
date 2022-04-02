import React from "react";
import styled from "styled-components"

import { FaCartPlus } from "react-icons/fa"


const AppContainer = styled.div`
  box-sizing: border-box;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  text-align: center;

  height: 100vh;

  background-color: #6B6B6B;

   h2 {
    color: #DEDFDA;
    align-items: center ;

    margin-top: 120px;
   }

`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center ;

  p {
    font-size: 20px;
    margin-top: 125px;

    margin-left: 5px;

    color: #DEDFDA;
  }
`

export default class Carrinhodecompra extends React.Component {


    render(){

      return(
       
        <AppContainer>
        
        <Title>
          <h2>Carrinho</h2>
          <p><FaCartPlus /></p>
        </Title>
        
        
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
  