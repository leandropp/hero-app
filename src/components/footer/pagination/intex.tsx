import React, { useEffect, useReducer, useState } from 'react';

import { useCharacters } from '../../../context/charactersContext';
import ArrowRight from '../../ui/icons/arrowRight';

import { Arrow, ArrowFirst, ArrowLast, Container, ContainerArrow, Page } from './styles';


const Pagination: React.FC = () => {

    const { pagination, updatePage } = useCharacters();
    const { offset, currentPage, totalPages } = pagination;

    const [showBack, setShowBack] = useState<boolean>(false);
    const [showFirst, setShowFirst] = useState<boolean>(false);
    const [showGo, setShowGo] = useState<boolean>(true);
    const [showLast, setShowLast] = useState<boolean>(true);

    const onClickPage = (page: number) => updatePage(page);

    const handleChangePagination = () => {
        setShowBack(currentPage > 1);
        setShowFirst(currentPage > 2);
        setShowGo(currentPage < totalPages);
        setShowLast(currentPage < (totalPages -1));

    };

    useEffect( handleChangePagination,[currentPage]);



    const renderIconPages = () => {
        let pages = new Array();
        const pageInitial = offset + 1;
        for(let i=0; i < 5; i++) {
            pages.push(pageInitial + i);
        }

        return pages.map( pg => <Page
            key={String(pg)}
            isSelected={pg === currentPage}
            onClick={ e => onClickPage(pg)}
            >{pg}</Page>)
    }
    
    return (
      <Container>
            <ContainerArrow>
                { showFirst && (
                    <Arrow>
                    <ArrowFirst />
                    <ArrowFirst />
                </Arrow>
                )}
                { showBack && <ArrowFirst /> }
            </ContainerArrow>
                { renderIconPages() }
            <ContainerArrow>
                { showGo && <ArrowRight /> }
                { showLast && (
                    <ArrowLast>
                    <ArrowRight />
                    <ArrowRight />
                </ArrowLast>
                )}
            </ContainerArrow>
      </Container>
  );
}

export default Pagination;