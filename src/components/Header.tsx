import styled from "styled-components";

const HeaderContainer = styled.header`

    max-width: 46.875rem;
    padding: 8.06rem 4rem 3.625rem;
    margin: 0 auto;
    

    div{
        display: flex;
        flex-direction: column;
        gap: 1.125rem;
        max-width: 26.06rem;
    }

    &::before{
        content: "";
        position: absolute;
        left:0;
        top: 0%;
        width: 100vw;
        height: 27.25rem;
        z-index: -1;
        background-color: #535971;
    }
`;

export function Header(){
    return(
        <HeaderContainer>
            <div>
                <h1>Mentoria</h1>
                <span>Preencha o formulário abaixo para <br/>agendar a sua mentoria</span>
            </div>
        </HeaderContainer>
    );
}