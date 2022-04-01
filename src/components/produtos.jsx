import React from "react";
import styled from "styled-components";

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
  flex-grow: 1;
`;

const Imagem = styled.img`
  width: 200px;
  height: 200px;
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
`

class Produtos extends React.Component {

  render() {
    const qtdeDeArray = (
      <div>Quantidade de Produtos: {this.props.produtoFiltrado.length}</div>
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
          <p>{produto.name}</p>
          <p>R$: {produto.value}</p>
          <button onClick={() => this.props.adicionaProCarrinho(produto)}>Adicionar ao Carrinho</button>
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
