import styled from "styled-components";

interface TypeTitleForm {
    sizeFont:number,
    lineDistance:number,
    disabledLine?:boolean
}

export const TitleForm = styled.h1<TypeTitleForm>`
    padding-bottom: ${props=>props.lineDistance/16}rem;

    
    ${props=>props.disabledLine ? 'border-bottom: none' : 'border-bottom: 1px solid'};
    border-bottom-color: ${props=>props.theme.inputBorder};

    margin-bottom: 2.25rem;

    font-size: ${props=>(props.sizeFont)/16}rem;
    line-height: 2.125rem;
    color: ${props=>props.theme.backgroundHeaderColor};
`;

// export function TitleForm(){
//     return(
//         <Title>Informações pessoais</Title>
//     );
// }