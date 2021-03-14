import React from 'react';
import { useCharacters } from '../../context/charactersContext';
import CloseIcon from '../ui/icons/close';

import { GridIcon, Container, Modal } from './styles';

const Details: React.FC = () => {
  const { showModalDetails, handleShowModalDetails } = useCharacters();


  const onClickCloseDetails = () => handleShowModalDetails(false);

  const renderModal = () => {
    return (
      <Container >
        <Modal>
          <GridIcon>
            <CloseIcon onClick={ onClickCloseDetails }/>
          </GridIcon>
        </Modal>
       </Container>
  );
  };

  return showModalDetails ? renderModal() : (<></>);
}

export default Details;