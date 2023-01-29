import styled from "styled-components";

const HeaderContainer = styled.header`

    max-width: 46.875rem;
    min-width: 318px;
    padding: 8.06rem 4rem 3.625rem;
    margin: 0 auto;
    

    div{
        display: flex;
        flex-direction: column;
        gap: 1.125rem;
        max-width: 26.06rem;

        h1{
            font-size: 3rem;
            line-height: 3.75rem;
            color: ${props=>props.theme.white};
        }

        span{
            font-size: 1.25rem;
            line-height: 1.875rem;
            color: ${props=>props.theme.white};
        }
    }

    &::before{
        content: "";
        position: absolute;
        left:0;
        top: 0;
        width: 100%;
        height: 27.25rem;
        z-index: -1;
        background-color: ${props=>props.theme.backgroundHeaderColor};
    }
`;

export function Header(){
    return(
        <HeaderContainer>
            <div>
                <h1>Mentoria</h1>
                <span>Preencha o formulário abaixo para agendar a sua mentoria</span>
            </div>
        </HeaderContainer>
    );
}