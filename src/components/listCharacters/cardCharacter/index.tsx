import React from 'react';
import { IList } from '../../../services/marvelApi/types';

import { Avatar, ColumnMain, Column, Container, TextDescription, TextName } from './styles';
import { ICardCharacterProps } from './types';

const CardCharacter: React.FC<ICardCharacterProps> = ({ character }) => {
  const { name, series, events, thumbnail } = character;
  const { path, extension } = thumbnail;


  const renderInfos = (list: IList) => {
    const { items } = list;

    return items
      .filter((item, index) => index < 3)
      .map( item => (<TextDescription>{item.name}</TextDescription>));

  }

  return (
    <Container>
      <ColumnMain>
        <Avatar src={`${path}.${extension}`} alt={name} />
        <TextName>{name}</TextName>
      </ColumnMain>
      <Column>
        { renderInfos(series) }
      </Column>
      <Column>
        { renderInfos(events) }
      </Column>
    </Container>
  )
}

export default CardCharacter;