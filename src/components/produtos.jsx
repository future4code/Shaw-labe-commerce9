import React from "react";
import styled from "styled-components";

const Produto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  border-radius: 5px;

  transition: 0.2s;

  &:hover{
    box-shadow: 5px 5px 3px #50D47B;
    border: solid 1px #50D47B;
    cursor: pointer;
  }

    .name {
      font-size: 20px;
      font-weight: 700;

      margin-top: -2px;
    }

    p {
      margin-top: -10px;
    }

    button {
      margin-bottom: 10px;

      width: 180px;
      height: 30px;

      background-color: #50D47B;
      color: white;

      border: 1px solid #50D47B;
      border-radius: 20px;
    }

    .descProduct{
      border: solid 1px #6B6B6B;
      width: 298px ;
    }

`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  height: 100vh;

  background-color: #F3F2EF;
`;

const Imagem = styled.img`
  width: 300px;

  border-radius: 5px 5px 0px 0px;

`;

const Corpo = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  display: flex;
`;

const Cabecalho = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 15px;

    select {
      margin: 5px;
    }

    label {
      font-weight: 700;
    }

    .title {
      font-weight: 700;
    }
`

class Produtos extends React.Component {

  render() {
    const qtdeDeArray = (
      <div className="title"> Quantidade de Produtos: {this.props.produtoFiltrado.length}</div>
    );

    const ordenandoProduto = (
      <div>
        <label for="sort">Ordenação</label>
        <select
          name="sort"
          value={this.props.selecionandoParametro}
          onChange={this.props.updateSelecionandoParametro}
        >
          <option value="name">Título</option>
          <option value="value">Preço</option>
        </select>

        <select
          name="ordenando"
          value={this.props.ordenandoProdutos}
          onChange={this.props.updateOrdenandoProduto}
        >
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>
      </div>
    );

    const listagemDeProdutos = this.props.produtoFiltrado.map((produto) => {
      return (
        <Produto>
          <Imagem src={produto.imagem} />
          <div className="descProduct">
            <p className="name">{produto.name}</p>
            <p>R$: {produto.value}</p>
            <button onClick={() => this.props.adicionaProCarrinho(produto)}>Adicionar ao Carrinho</button>
          </div>
        </Produto>
      );
    });

    return (
      <MainContainer>
        <Cabecalho>
          {qtdeDeArray}
          {ordenandoProduto}
        </Cabecalho>

        <Corpo>
          {listagemDeProdutos}
        </Corpo>
      </MainContainer>
    );
  }
}

export default Produtos;
