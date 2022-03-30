import React, { useState } from "react";
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



    render() {

        return (

            <ContainerFiltro>

                <h2>Filtros</h2>
                <p>Valor mínimo: </p>
                <input type="number" value={''} />
                <p>Valor Máximo: </p>
                <input type="number" value={''}} />
                <p>Busca por nome: </p>
                <input type="text" value={''} />


            </ContainerFiltro>

        )
    }
}