import styled from "styled-components";

const ContainerInputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div{
        display: flex;
        gap: 0.5rem;

        label{
            color: ${props=>props.theme.inputTitleColor};
        }

        span{
            color: ${props=>props.theme.inputSubtitleColor};
        }
    }

    input{
        height: 3.5rem;
        border-radius: 8px;
        border: 1px solid ${props=>props.theme.inputBorder};
        padding: 10px;
        background-color: ${props=>props.theme.inputBackgroundColor};
    }

`;

export function InputBox(props){
    return(
        <ContainerInputBox>
            <div>
                <label>{props.children}</label>
                <span>{props.subTitle}</span>
            </div>

            <input type="text" title="nome"></input>
        </ContainerInputBox>
    );
}