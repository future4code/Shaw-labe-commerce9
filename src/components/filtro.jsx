import React from "react";
import styled from "styled-components";

import { FaFilter } from "react-icons/fa"


const ContainerFiltro = styled.div`
background-color: #6B6B6B;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 20%;

align-items: center;
flex-shrink: 0;

height: 100vh;

color: white;

input{
    width: 150px;
    height: 30px;
    border-radius: 2px;
    border: 0.3px;

    text-align: center;

    box-shadow: 5px 5px 3px #404247;
}

h2 {
    margin-top: 120px;
    color: #DEDFDA;
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