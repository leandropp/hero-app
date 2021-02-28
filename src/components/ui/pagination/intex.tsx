import React from 'react';

import { useCharacters } from '../../../context/charactersContext';
import ArrowLeft from '../icons/arrowLeft';
import ArrowRight from '../icons/arrowRight';

import { Arrow, ArrowFirst, ArrowLast, Container, ContainerArrow, Page } from './styles';


const Pagination: React.FC = () => {


    const { state } = useCharacters();
    const { pagination } = state;
    const { pages, selectedPage, maxPage} = pagination;

  return (
      <Container>
            <ContainerArrow>
                <Arrow>
                    <ArrowFirst />
                    <ArrowFirst />
                </Arrow>
                <ArrowFirst />
            </ContainerArrow>
                <Page>1</Page>
                <Page>2</Page>
                <Page isSelected={true} >3</Page>
                <Page>4</Page>
            <ContainerArrow>
                <ArrowRight />
                <ArrowLast>
                    <ArrowRight />
                    <ArrowRight />
                </ArrowLast>
            </ContainerArrow>
      </Container>
  );
}

export default Pagination;