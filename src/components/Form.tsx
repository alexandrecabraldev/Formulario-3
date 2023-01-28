import styled from "styled-components"
import { TitleForm } from "./TitleForm";

const ContainerForm = styled.form`
    max-width: 46.875rem;
    padding: 4rem;
    background-color: white;
    margin: 0 auto;
    border-radius: 20px 20px 0 0;
    
`;

export function Form(){
    return (
        <ContainerForm>
            <TitleForm/>
        </ContainerForm>
    );
}