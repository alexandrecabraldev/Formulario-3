import styled from "styled-components";

const ContainerButton = styled.div`
    max-width: 46.875rem;
    margin: 0 auto;
    padding: 3.25rem 4rem;
    background-color: ${props=>props.theme.backgroundHeaderColor};
    border-radius: 0 0 20px 20px;

    button{
        width: 100%;
        padding: 1rem 0;
        border-radius: 20px; 
        border: none;
        cursor: pointer;
        background-color: ${props=>props.theme.buttonColor};
        color: ${props=>props.theme.white};
        font-size: 1.25rem;
        line-height: 1.625rem;
    }
`;

export function Button(){
    return (
        <ContainerButton>
            <button type="submit">Salvar</button>
        </ContainerButton>
    );
}