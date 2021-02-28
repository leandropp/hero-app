import styled from "styled-components";

export const ContainerToolbar = styled.div`
    height: 64px;
    background-color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    position: relative;
`;

export const Logo = styled.img`
    width: 96px;
    height: 24px;
`;

export const GridUser = styled.div`
    display: flex;
    align-items: center;
`;

export const TextToolbar = styled.p`
    font-family: 'PT Sans Caption', 'Roboto';
    font-size: 14px;
    color: #555555;
`;

export const User = styled(TextToolbar)`
    font-weight: bold;
    padding-right: 6px;
`;

export const Avatar = styled.div`
    height: 32px;
    width: 32px;
    background-color: #F5F5F5;
    border-radius: 4px;
    margin-left: 16px;
`;