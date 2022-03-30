import React from "react";
import styled from "styled-components";







export default class Filtro extends React.Component{
    render(){
        return(
         <>
        <h2>Filtros</h2>
        <p>Valor mínimo: </p>
        <input type="text"value={this.state} />
        <p>Valor Máximo: </p>
        <input type="text" value={this.state} />
        <p>Busca por nome: </p>
        <input type="text" value={this.state}/>
         </>       



        )
    }
}