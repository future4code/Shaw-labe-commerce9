import React from "react";
import styled from "styled-components";


const ContainerFiltro =styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 25%;
border: 1px solid black


`






export default class Filtro extends React.Component{

    state ={
        inputValorMin:'',
        inputValorMax:'',
        inputBuscaNome:''
        



    }
  
    render(){
        return(
        <ContainerFiltro>
        <h2>Filtros</h2>
        <p>Valor mínimo: </p>
        <input type="number"value={this.state.value} />
        <p>Valor Máximo: </p>
        <input type="number" value={this.state.value} />
        <p>Busca por nome: </p>
        <input type="text" value={this.state}/>
         </ContainerFiltro>       

        )
    }
}