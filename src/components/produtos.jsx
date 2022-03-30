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
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Imagem = styled.img`
    width: 400px;
    height: 400px;
`

const Corpo = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
`




class Produtos extends React.Component {
    state = {
        produtos: [
            {
                id: 1,
                name: "Nome do Produto",
                value: 10000.0, //valor do produto
                imagem: "https://picsum.photos/400/400?a",
            },
            {
                id: 2,
                name: "Nome do Produto 2",
                value: 50.0, //valor do produto
                imagem: "https://picsum.photos/400/400?b",
            },
            {
                id: 3,
                name: "Nome do Produto 3",
                value: 50.0, //valor do produto
                imagem: "https://picsum.photos/400/400?c",
            },
            {
                id: 4,
                name: "Nome do Produto 4",
                value: 50.0, //valor do produto
                imagem: "https://picsum.photos/400/400?d",
            },
            {
                id: 5,
                name: "Nome do Produto 5",
                value: 50.0, //valor do produto
                imagem: "https://picsum.photos/400/400?e",
            },
            {
                id: 6,
                name: "Nome do Produto 6",
                value: 50.0, //valor do produto
                imagem: "https://picsum.photos/400/400?f",
            },
        ],
    }

    render(){
        const qtdeDeArray = 
            <div>
                Quantidade de Produtos: {this.state.produtos.length}
            </div>

        const listagemDeProdutos = this.state.produtos.map((produto) => {
            return (
                <Produto>
                    <Imagem src={produto.imagem}/>
                    <p>{produto.name}</p>
                    <p>R$: {produto.value}</p>
                    <button>Adicionar ao Carrinho</button>
                </Produto>
            )
        })
        return (
            <MainContainer>
                <header>
                    {qtdeDeArray}
                </header>

                <Corpo>
                    {listagemDeProdutos}
                </Corpo>
            </MainContainer>
        )
    }
}

export default Produtos