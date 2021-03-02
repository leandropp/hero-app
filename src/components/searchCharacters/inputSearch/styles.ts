import styled from "styled-components";


export const ContainerInput = styled.div`
    width: 295px;
    height: 32px;

    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;
        padding: 0;
    }
`;


export const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;

    text-align: left;
    font: italic normal normal 14px/19px PT Sans;
    letter-spacing: 0px;
    color: #8E8E8E;

    padding-left: 16px;

    :focus {
        outline: none;
    }
`;

export const GridIcon = styled.div`
    width: 24px;
    height: 24px;
    z-index: 99px;
    margin-left: -40px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

`;
