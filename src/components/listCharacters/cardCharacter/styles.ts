import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 5px #00000033;
    border-radius: 4px;

    height: 88px;
    margin-bottom: 8px;
    display: flex;

    cursor: pointer;
    transition: 0.4s;

    :hover {
        box-shadow: 2px 2px 5px #000000BB;
    }

`;

export const ColumnMain = styled.div`
    width: 30%;
    padding: 12px 24px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Column = styled.div`
    width: 30%;
    padding: 12px 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 56px;

    @media screen and (max-width: 768px){
        display: none;
    }

`;

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 4px;
`;

export const TextName = styled.span`
    font: normal normal bold 16px/22px PT Sans;
    color: #555555;

    padding-left: 24px;
`;

export const TextDescription = styled.span`
    font: normal normal normal 14px/16px PT Sans;
    color: #555555;
`;

