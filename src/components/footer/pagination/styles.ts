import styled from "styled-components";
import ArrowLeft from "../../ui/icons/arrowLeft";
import ArrowRight from "../../ui/icons/arrowRight";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContainerArrow = styled.div`
    width: 64px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Arrow = styled.div`
    width: 24px;

    display: flex;
    align-items: center;

    padding: 8px;
`;

export const ArrowBackContainer = styled.div`
`;

export const ArrowGoContainer = styled.div`
`;

export const ArrowBack = styled(ArrowLeft)``;

export const ArrowNext = styled(ArrowRight)``;

export interface IPageProps {
    isSelected?: boolean;
}

export const Page = styled.div<IPageProps>`
    width: 40px;
    height: 32px;
    margin: 0 8px;

    background: ${({ isSelected }) => isSelected ? '#167ABC' : '#F5F5F5' } 0% 0% no-repeat padding-box;
    border: 1px solid #E5E5E5;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    font: normal normal normal 14px/19px PT Sans;
    color: ${({isSelected}) => isSelected ? '#ffffff' : '#555555' };

    cursor: ${({isSelected}) => isSelected ? 'default' : 'pointer' };

    :hover{
        background: ${({ isSelected }) => isSelected ? '#167ABC' : '#5DAFFF'};
    }

`;
