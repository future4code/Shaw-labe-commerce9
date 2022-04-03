import React from "react";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa"


const ContainerFiltro = styled.div`
background-color: hsl(248deg 40% 8%);
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 20%;
height: 100vh;
align-items: center;
flex-shrink: 0;
color: white;

input{
    background-color: hsl(248deg 40% 16%);
    width: 150px;
    height: 30px;
    color: white;
    border-radius: 2px;
    border: 0.3px;
    text-align: center;
    box-shadow: 5px 5px 3px #16122b;
    &:active{
        box-shadow: 0 0 2em hsl(248deg 40% 32%);

    }
}
h2 {
    margin-top: 120px;
    color: white;
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
    color:white;
  }
  `


export default class Filtro extends React.Component {





    render() {
        return (

            <ContainerFiltro>

                <Title>
                    <h2>Filtro</h2>
                    <p><FaFilter /></p>
                </Title>
                <p>Valor mínimo: </p>
                <input type="number" value={this.props.inputValorMin} onChange={this.props.onChangeFilterMin} placeholder="Valor Minimo" />
                <p>Valor Máximo: </p>
                <input type="number" value={this.props.inputValorMax} onChange={this.props.onChangeFilterMax} placeholder="Valor Máximo" />
                <p>Busca por nome: </p>
                <input value={this.props.inputBuscaNome} onChange={this.props.onChangeBuscaNome} placeholder="Nome do Produto" />



            </ContainerFiltro>

        )
    }
}