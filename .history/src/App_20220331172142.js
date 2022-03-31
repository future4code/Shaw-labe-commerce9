import React from 'react';
import './App.css';
import Carrinhodecompra from './components/carrinho-de-compra';
import styled from "styled-components"
import Filtro from './components/filtro';
import Produtos from './components/produtos';

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  border: solid 1px black;
  padding-bottom: 15px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Imagem = styled.img`
  width: 400px;
  height: 400px;
`;

const Corpo = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
`;


class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Aome do Produto",
        value: 10000.0, //valor do produto
        imagem: "https://picsum.photos/400/400?a",
      },
      {
        id: 2,
        name: "Bome do Produto 2",
        value: 50.0, //valor do produto
        imagem: "https://picsum.photos/400/400?b",
      },
      {
        id: 3,
        name: "Come do Produto 3",
        value: 120.0, //valor do produto
        imagem: "https://picsum.photos/400/400?c",
      },
      {
        id: 4,
        name: "Dome do Produto 4",
        value: 300.0, //valor do produto
        imagem: "https://picsum.photos/400/400?d",
      },
      {
        id: 5,
        name: "Eome do Produto 5",
        value: 1000.0, //valor do produto
        imagem: "https://picsum.photos/400/400?e",
      },
      {
        id: 6,
        name: "Fome do Produto 6",
        value: 2500.0, //valor do produto
        imagem: "https://picsum.photos/400/400?f",
      },
    ],

    selecionandoParametro: "name",
    ordenandoProduto: 1,
    inputValorMin: '',
    inputValorMax: '',
    inputBuscaNome: '',
  };

  updateSelecionandoParametro = (event) => {
    this.setState({
      selecionandoParametro: event.target.value,
    });
  };

  updateOrdenandoProduto = (event) => {
    this.setState({
      ordenandoProduto: event.target.value,
    });
  };



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
  onChangeBuscaNome = (event) => {
    this.setState({
      inputBuscaNome: event.target.value

    })
  }


  render() {
    const qtdeDeArray = (
      <div>Quantidade de Produtos: {this.state.produtos.length}</div>
    );

    const ordenandoProduto = (
      <div>
        <label for="sort">Ordenação</label>
        <select
          name="sort"
          value={this.state.selecionandoParametro}
          onChange={this.updateSelecionandoParametro}
        >
          <option value="name">Título</option>
          <option value="value">Preço</option>
        </select>

        <select
          name="ordenando"
          value={this.state.ordenandoProduto}
          onChange={this.updateOrdenandoProduto}
        >
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>
      </div>
    );
    const copiaDosProdutos = [...this.state.produtos];
    copiaDosProdutos.sort((primeiroProduto, segundoProduto) => {
      switch (this.state.selecionandoParametro) {
        case "name":
          return (
            this.state.ordenandoProduto *
            primeiroProduto.name.localeCompare(segundoProduto.name)
          );
        default:
          return (
            this.state.ordenandoProduto *
            (primeiroProduto.value - segundoProduto.value)
          );
      }
    });

    const listagemDeProdutos = copiaDosProdutos.map((produto) => {
      return (
        <Produto>
          <Imagem src={produto.imagem} />
          <p>{produto.name}</p>
          <p>R$: {produto.value}</p>
          <button>Adicionar ao Carrinho</button>
        </Produto>
      );
    });

    //LOGICAS DOS FILTOS MIN/MAX E NOME


    const buscarValorMin = [...this.state.produtos]
    listagemDeProdutos.filter((produto) => {
      return this.state.inputValorMin === "" || produto.value >= this.state.inputValorMin
    })
    const buscarValorMax = listagemDeProdutos.filter((produto) => {
      return this.state.inputValorMin === "" || produto.value >= this.state.inputValorMin
    })
    /*   
    const buscarPorNome = listagemDeProdutos.filter((produto) => {
  
        return produto.name.toLowerCase().includes(this.state.inputBuscaNome.toLowerCase())
  
      })
   
   */
    return (

      <div>
        <Filtro
        
        />
        {buscarValorMax}
        {buscarValorMin}
        <MainContainer>
          <header>
            {qtdeDeArray}
            {ordenandoProduto}
          </header>

          <Corpo>
            {listagemDeProdutos}
          </Corpo>
        </MainContainer>
        <Carrinhodecompra />
      </div>


    )
  }

}

export default App
