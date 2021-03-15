import styled from "styled-components";

export const ContainerSearch = styled.div`
    width: 648px;
    padding: 24px 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        width: 100%;
        padding: 0;
        display: flex;
        align-items: center;
    }
`;

export const Title = styled.p`
    padding: 8px 0;
    margin: 0;
    font: normal normal bold 32px/30px 'PT Sans Caption';
    letter-spacing: 0px;
    color: #555555;

    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;
    }

`;

export const LabelInput = styled.p`
    padding: 8px 0;
    margin: 0;
    font: normal normal bold 16px/24px PT Sans Caption;
    letter-spacing: 0px;
    color: #555555;

    text-align: left;

`;