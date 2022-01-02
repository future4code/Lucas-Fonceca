import styled from 'styled-components'

export const PageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CharacterListContainer = styled.div `
    border: 1px solid black;
    margin-bottom: 8px;
    width: 200px;
    padding-left: 8px;
    text-align: center;
    box-shadow: 0px 0px 10px -2px #000000;
    border-radius: 13px;
    text-transform: capitalize;
    &:hover {
        font-style: italic;
        font-weight: bold;
        cursor: pointer;
        background-color: lightgreen;
    }
`