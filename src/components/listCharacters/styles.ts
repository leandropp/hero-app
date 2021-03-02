import styled from "styled-components";

export const HeaderList = styled.div`
    padding-top: 16px;
    padding-bottom: 4px;

    width: 100%;

    display: flex;

`;

const Head = styled.span`
    text-align: left;
    font: normal normal normal 12px/16px PT Sans;
    letter-spacing: 0px;
    color: #8E8E8E;

    width: 30%;
    padding: 0 24px;
`;

export const HeadPrimary = styled(Head)`
`;

export const HeadSecundary = styled(Head)`
    @media screen and (max-width: 768px){
        display: none;
    }

`;

export const BodyList = styled.div``;
