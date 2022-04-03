import React from "react";
import styled from "styled-components"
import { FaCartPlus } from "react-icons/fa"

const AppContainer = styled.div`
  color:white;
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  text-align: center;
  height: 100vh;
  background-color: hsl(248deg 40% 8%);
   h2 {
    color: white;
    align-items: center ;
    margin-top: 120px;
   }
   button{
    height: 30px;
    border: 0.7px solid hsl(248deg 40% 32%);
    border-radius: 20px;
    color: white;
    background-color: hsl(248deg 40% 20%);
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: hsl(248deg 40% 32%);
    }
    &:active{
      background-color: hsl(248deg 40% 59%);
    };`


const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center ;
  p {
    font-size: 20px;
    margin-top: 125px;
    margin-left: 5px;
    color: white;
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
  