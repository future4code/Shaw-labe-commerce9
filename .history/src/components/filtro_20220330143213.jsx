import React from "react";
import styled from "styled-components";







export default class Filtro extends React.Components{
    render(){
        return(
         <>
        <h2>Filtros</h2>
        <p>Valor mínimo: </p>
        <input type="text" />
        <p>Valor Máximo: </p>
        <input type="text" />
        <p>Busca por nome: </p>
        <input type="text" />
         </>       



        )
    }
}