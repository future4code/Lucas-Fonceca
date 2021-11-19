import React from "react";
import styled from "styled-components";

const ContainerCardPequeno = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
`

const ImagemCardGrande = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const CardPequeno = (props) => {
    return (
        <ContainerCardPequeno>
            <ImagemCardGrande src={ props.imagem } />
            <p><b>{ props.titulo }</b>{ props.texto }</p>
        </ContainerCardPequeno>
    )
}

export default CardPequeno;