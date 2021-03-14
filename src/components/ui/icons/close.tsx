import React from 'react';
import styled from 'styled-components';

interface IIconProps {
  onClick(): void;
}

const CloseIcon: React.FC<IIconProps> = (props) => {
  const { onClick } = props;
  return (
    <Container id="container-button-svg">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#000000"
        onClick={(e) => onClick()}
      >
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        >
        </path>
      </svg>
    </Container>
  );
}

export default CloseIcon;

const Container = styled.div`
  cursor: pointer;
  
`;