import React from "react";
import styled from "styled-components";


const ContainerFiltro =styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 25%;
border: 1px solid black


`






export default class Filtro extends React.Component {

    state = {
        inputValorMin:'',
        inputValorMax:'',
        inputBuscaNome:''
    }
    
onChangeInput=(event) =>{

this.setState({

    inputValorMin: event.target.value,
    inputValorMax:  event.target.value,
    inputBuscaNome: event.target.value

})

}
onChangeFilter =(event) => {

this.setState({

    inputValorMin:  event.target.value,
    inputValorMax:  event.target.value,
    inputBuscaNome: event.target.value

})

}


    render(){

        return(

        <ContainerFiltro>

        <h2>Filtros</h2>
        <p>Valor mínimo: </p>
        <input type="number" value={this.state.inputValorMin} onChangeInput={this.onChangeFilter}/>
        <p>Valor Máximo: </p>
        <input type="number" value={this.state.inputValorMax} onChangeInput={this.onChangeFilter}/>
        <p>Busca por nome: </p>
        <input type="text" value={this.state.inputBuscaNome} onChangeInput={this.onChangeFilter}/>


         </ContainerFiltro>       

        )
    }
}