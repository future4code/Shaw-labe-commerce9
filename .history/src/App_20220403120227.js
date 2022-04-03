import React from 'react';
import './App.css';
import Carrinhodecompra from './components/carrinho-de-compra';
import styled from "styled-components"
import Filtro from './components/filtro';
import Produtos from './components/produtos';
import nave1 from './imagens/nave1.jpg';


const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
`


class App extends React.Component {
  state = {
    carrinho: [
      {
        quantidadeDeProduto: 0,
        nomeDoProduto: "",
      }
    ],

    produtos: [
      {
        id: 1,
        name: "Aome do Produto",
        value: 10000.0, //valor do produto
        imagem: nave1,
      },
      {
        id: 2,
        name: "Bome do Produto 2",
        value: 50.0, //valor do produto
        imagem: "https://picsum.photos/400/400?d",
      },
      {
        id: 3,
        name: "Come do Produto 3",
        value: 120.0, //valor do produto
        imagem: "https://picsum.photos/400/400?d",
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
    valorTotal: 0,
  };

  adicionaProCarrinho = (produto) => {
    const existeNoCarrinho = this.state.carrinho.find(elemento => elemento.id === produto.id);
    if(existeNoCarrinho){

    }else{
      const objetoParaCarrinho = 
      {
        quantidadeDeProduto: 1,
        nomeDoProduto: produto.name,
        id: produto.id
      }
      const copiaCarrinho = [...this.state.carrinho, objetoParaCarrinho]
      this.setState({ carrinho: copiaCarrinho })
    }
    const somandoNoTotal = this.state.valorTotal + produto.value
    this.setState({ valorTotal: somandoNoTotal })
    //cria um item quando não existir dentro do carrinho
    //adiciona a qtde de item se tiver qtde => 1
    //soma o valor total atraves do valor unico do item
  }

  removeDoCarrinho = () => {
    //remove do carrinho se tiver qtde = 1
    //diminui a quantidade se tiver qtde > 1
    //subtrai o valor total atraves do valor unico do item
  }

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
    const copiaDosProdutos = [...this.state.produtos]
    .filter((produto) => {
      return this.state.inputValorMin === "" || produto.value >= this.state.inputValorMin
    })
    .filter((produto) => {
      return this.state.inputValorMax === "" || produto.value <= this.state.inputValorMax
    })
    .filter((produto) => {
      return produto.name.toLowerCase().includes(this.state.inputBuscaNome.toLowerCase())
    });

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
   
    return (

      <MainContainer>
        <Filtro 
          inputValorMin={this.state.inputValorMin}
          inputValorMax={this.state.inputValorMax}
          inputBuscaNome={this.state.inputBuscaNome}
          onChangeBuscaNome={this.onChangeBuscaNome}
          onChangeFilterMin={this.onChangeFilterMin}
          onChangeFilterMax={this.onChangeFilterMax}
        />
        <Produtos 
          produtoFiltrado={copiaDosProdutos}
          ordenandoProdutos={this.state.ordenandoProduto}
          selecionandoParametro={this.state.selecionandoParametro}
          updateSelecionandoParametro={this.updateSelecionandoParametro}
          updateOrdenandoProduto={this.updateOrdenandoProduto}
          adicionaProCarrinho={this.adicionaProCarrinho}
        />
        <Carrinhodecompra
          valorTotal={this.state.valorTotal}
          carrinho={this.state.carrinho}
        />
      </MainContainer>


    )
  }

}

export default App
