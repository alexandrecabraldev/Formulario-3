import styled from "styled-components"
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { TitleForm } from "./TitleForm";

export const ContainerForm = styled.form`
    max-width: 46.875rem;
    min-width: 318px;
    padding: 4rem;
    background-color: white;
    margin: 0 auto;
    border-radius: 20px 20px 0 0;
    
`;

const ContainerInputs = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.375rem;
    min-width: 190px;

`;

const ContainerSectionInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    min-width: 190px;
`;

export function Form(){
    return (
        <>
            <ContainerForm id="Form">

                <TitleForm sizeFont={24} lineDistance={16}>Informações pessoais</TitleForm>
                <ContainerSectionInputs>
                    <ContainerInputs>
                        <InputBox>Nome</InputBox>
                        <InputBox>Sobrenome</InputBox>
                    </ContainerInputs>
                
                    <InputBox subtitle={"(digite um email válido)"}>Email</InputBox>
                    <InputBox subtitle={"(mínimo de 6 caracteres)"}>Senha</InputBox>
                </ContainerSectionInputs>
                
                <TitleForm sizeFont={24} lineDistance={8}>Informações do mentor</TitleForm>
                <ContainerSectionInputs>
                    <InputBox subtitle={"(só o primeiro nome)"}>Nome do seu mentor</InputBox>
                </ContainerSectionInputs>

                <TitleForm sizeFont={24} lineDistance={8}>Seus horários disponíveis</TitleForm>
                <TitleForm sizeFont={20} lineDistance={0} disabledLine>Primeira mentoria</TitleForm>
                <TitleForm sizeFont={20} lineDistance={0} disabledLine>Segunda mentoria</TitleForm>

            </ContainerForm>

            <Button/>
        </>
    );
}