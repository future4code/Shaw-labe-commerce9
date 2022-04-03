import React from "react";
import styled from "styled-components";


const Produto = styled.div`
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  border: solid 0.5px hsl(248deg 40% 32%);
  padding-bottom: 15px;
  transition:0.2s;
  &:hover{
    box-shadow: 0 0 1em hsl(248deg 40% 32%);
  }
  button{
    height: 30px;
    border: 0.7px solid hsl(248deg 40% 32%);
    border-radius: 20px;
    color: white;
    background-color: hsl(248deg 40% 20%);
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: hsl(248deg 40% 32%);
    }
    &:active{
      background-color: hsl(248deg 40% 59%);
    }
  }
`;
const MainContainer = styled.div`
  background-color: hsl(248deg 40% 8%);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  height: 100vh;
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
    color:white;
    display: flex;
    justify-content: space-around;
    padding: 15px;
    select {
      margin: 5px;
    }
`

class Produtos extends React.Component {

  render() {
    const qtdeDeArray = (
      <div>Quantidade de Produtos: {this.props.produtoFiltrado.length}</div>
    );

    const ordenandoProduto = (
      <div>
        <label for="sort">Filtrar por Ordenação</label>
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
