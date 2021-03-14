import React, { useEffect, useState } from 'react';
import { useCharacters } from '../../context/charactersContext';
import CloseIcon from '../ui/icons/close';
import CardDetails from './cards';
import { TypeDetails } from './cards/types';

import {
  GridIcon,
  Container,
  Modal,
  ContainerImage,
  ContainerDescription,
  ContainerDescriptionHeader,
  Img,
  Title,
  ContainerSubs,
  SubTitle,
} from './styles';

const Details: React.FC = () => {
  const {
    showModalDetails,
    characterSelected,
    handleDetailsCharacter,
  } = useCharacters();

  const [selectedDetails, setSelectedDetails] = useState<TypeDetails | null>(null);

  useEffect(() => {
    if (showModalDetails) {
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';

    } else {
      document.body.style.position = 'absolute';
      document.body.style.width = '100%';
    }
  }, [showModalDetails]);



  const onClickCloseDetails = () => handleDetailsCharacter();


  const onClickSelectedTypeDetails = (type: TypeDetails) => {
    setSelectedDetails(type);
  }

  const renderModal = () => {
    if (!characterSelected) return <></>;
    const { thumbnail, name, comics, series, stories, events } = characterSelected;

    const { path, extension } = thumbnail;
    const srcImage = `${path}.${extension}`;

    return (
      <Container >
        <Modal>
          <GridIcon>
            <CloseIcon onClick={onClickCloseDetails} />
          </GridIcon>

          <ContainerImage>
            <Img src={srcImage} />

            <ContainerDescriptionHeader>
              <Title>{name}</Title>

              <ContainerSubs>

                <SubTitle onClick={() => onClickSelectedTypeDetails("comics")} selected={selectedDetails === "comics"}>Comics</SubTitle>
                <SubTitle onClick={() => onClickSelectedTypeDetails("series")} selected={selectedDetails === "series"}>Series</SubTitle>
                <SubTitle onClick={() => onClickSelectedTypeDetails("stories")} selected={selectedDetails === "stories"}>Stories</SubTitle>
                <SubTitle onClick={() => onClickSelectedTypeDetails("events")} selected={selectedDetails === "events"}>Events</SubTitle>
              </ContainerSubs>
            </ContainerDescriptionHeader>

          </ContainerImage>


          <ContainerDescription>
            <CardDetails open={selectedDetails === "comics"} title="Comics" list={comics} />
            <CardDetails open={selectedDetails === "series"} title="Series" list={series} />
            <CardDetails open={selectedDetails === "stories"} title="Stories" list={stories} />
            <CardDetails open={selectedDetails === "events"} title="Events" list={events} />
          </ContainerDescription>
        </Modal>
      </Container>
    );
  };

  return showModalDetails ? renderModal() : (<></>);
}

export default Details;