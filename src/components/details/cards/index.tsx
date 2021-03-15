import React from 'react';
import { IList } from '../../../services/marvelApi/types';
import { Body, CardContainer, Item, TextName, Title } from './styles';

export interface ICardComicsProps {
  list: IList;
  title: string;
  open: boolean;
}

const CardDetails: React.FC<ICardComicsProps> = (props) => {
  const { list, title, open } = props;
  const { items } = list;

  const renderItems = () => {
    return items.map( (item) => {
      const { name } = item;

      return (
        <Item key={name}>
          <TextName>{name}</TextName>
        </Item>
      )
    })
  }

  const render = () => (
    <CardContainer>
        <Title>{ title }</Title>


        <Body>
            { renderItems() }
        </Body>
    </CardContainer>
  
  );

  return open ? render() : <></>;

}

export default CardDetails;