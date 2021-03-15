import React, { useEffect, useState } from 'react';

import { useCharacters } from '../../../context/charactersContext';

import { Arrow, ArrowBack, ArrowBackContainer, ArrowGoContainer, ArrowNext, Container, ContainerArrow, Page } from './styles';


const Pagination: React.FC = () => {

    const { pagination, updatePage } = useCharacters();
    const { currentPage, totalPages } = pagination;

    const [showBack, setShowBack] = useState<boolean>(false);
    const [showFirst, setShowFirst] = useState<boolean>(false);
    const [showGo, setShowGo] = useState<boolean>(true);
    const [showLast, setShowLast] = useState<boolean>(true);
    const [rangePages, setRangePages] = useState<Array<number>>([]);

    const onClickPage = (page: number) => updatePage(page);

    const handleBack = () => updatePage(currentPage - 1);

    const handleFirst = () => updatePage(1);

    const handleGo = () => updatePage(currentPage + 1);

    const handleLast = () => updatePage(totalPages);

    const updateRangePages = () => {
        if (rangePages.includes(currentPage)) return;

        const pages = [];

        const pageInitial = (rangePages[rangePages.length - 1] < currentPage)
            ? currentPage - 4
            : currentPage;

        if (totalPages < 5 ) {
            for(let i=0; i < totalPages; i++) pages.push(pageInitial + i);
        } else {
            for(let i=0; i < 5; i++) pages.push(pageInitial + i);
        }
        setRangePages(pages)            
    }

    const handleChangePagination = () => {
        if(totalPages > 4) {
            setShowFirst(currentPage > 1);
            setShowBack(currentPage > 1);
            setShowGo(currentPage < (totalPages - 1));
            setShowLast(currentPage < (totalPages - 1));
        } else {
            setShowFirst(false);
            setShowBack(false);
            setShowGo(false);
            setShowLast(false);
        }

    };

    useEffect(handleChangePagination, [currentPage]);
    useEffect(updateRangePages, [pagination])


    const renderIconPages = () => rangePages
        .map( pg => <Page
            key={String(pg)}
            isSelected={pg === Math.trunc(currentPage)}
            onClick={ e => onClickPage(pg)}
            >{pg}</Page>);
    
    return (
      <Container>
            <ContainerArrow>
                { showFirst && (
                    <Arrow onClick={handleFirst}>
                        <ArrowBack />
                        <ArrowBack />
                    </Arrow>
                )}
                { showBack && (
                    <ArrowBackContainer onClick={handleBack}>
                        <ArrowBack />
                    </ArrowBackContainer>
                )}
            </ContainerArrow>
                { renderIconPages() }
            <ContainerArrow>
                { showGo && (
                    <ArrowGoContainer onClick={handleGo} >
                        <ArrowNext/>
                    </ArrowGoContainer>
                )}  
                { showLast && (
                    <Arrow
                        onClick={handleLast}
                    >
                        <ArrowNext />
                        <ArrowNext />
                    </Arrow>
                )}
            </ContainerArrow>
      </Container>
  );
}

export default Pagination;