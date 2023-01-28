import styled from "styled-components";

const Title = styled.h1`
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
`;

export function TitleForm(){
    return(
        <Title>Informações pessoais</Title>
    );
}