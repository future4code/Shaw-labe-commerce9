import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
background-color: #d1d1d1;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 20%;
border: 0.3px solid black;
height:700px;
align-items: center;

input{
    width: 200px;
    height: 30px;
    border-radius: 2px;
    border: 0.3px;
}

`


export default class Filtro extends React.Component {

    state = {
        inputValorMin: '',
        inputValorMax: '',
        inputBuscaNome: '',
    }

    onChangeFilterMin = (event) => {
        this.setState({
            inputValorMin: event.target.value
          
        })
    }
    onChangeFilterMax = (event) => {
        this.setState({
            inputValorMax: event.target.value
          
        })
    }
    onChangeFilterBuscaNome = (event) => {
        this.setState({
            inputValorBuscaNome: event.target.value
          
        })
    }



    render() {

        return (

            <ContainerFiltro>

                <h2>Filtros</h2>
                <p>Valor mínimo: </p>
                <input type="number" value={this.state.inputValorMin} onChange={this.inputValorMin}/>
                <p>Valor Máximo: </p>
                <input type="number" value={this.state.inputValorMax} onChange={this.inputValorMax}/>
                <p>Busca por nome: </p>
                <input type="text" value={this.state.inputBuscaNome} onChange={this.inputValorBuscaNome}/>


            </ContainerFiltro>

        )
    }
}