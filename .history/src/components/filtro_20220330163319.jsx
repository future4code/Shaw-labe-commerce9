import React from "react";
import styled from "styled-components";


const ContainerFiltro =styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 20%;
border: 1px solid black;
height:700px;

input{
    width: 200px;
}

`






export default class Filtro extends React.Component {

    state = {
        inputValorMin:100,
        inputValorMax:'',
        inputBuscaNome:''
    }
    



onChangeFilter =(event) => {

this.setState({

    inputValorMin: event.target.value,
    inputValorMax: event.target.value,
    inputBuscaNome: event.target.value

})

}


    render(){

        return(

        <ContainerFiltro>

        <h2>Filtros</h2>
        <p>Valor mínimo: </p>
        <input type="number" value={this.state.inputValorMin.value} />
        <p>Valor Máximo: </p>
        <input type="number" value={this.state.inputValorMax.value} />
        <p>Busca por nome: </p>
        <input type="text" value={this.state.inputBuscaNome.value}  />


         </ContainerFiltro>       

        )
    }
}