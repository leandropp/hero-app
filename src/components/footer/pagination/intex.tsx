import React, { useEffect, useState } from 'react';

import { useCharacters } from '../../../context/charactersContext';

import { Arrow, ArrowBack, ArrowBackContainer, ArrowGoContainer, ArrowNext, Container, ContainerArrow, Page } from './styles';


const Pagination: React.FC = () => {

    const { pagination, updatePage } = useCharacters();
    const { offset, currentPage, totalPages } = pagination;

    const [showBack, setShowBack] = useState<boolean>(false);
    const [showFirst, setShowFirst] = useState<boolean>(false);
    const [showGo, setShowGo] = useState<boolean>(true);
    const [showLast, setShowLast] = useState<boolean>(true);
    const [rangePages, setRangePages] = useState<Array<number>>([]);

    const onClickPage = (page: number) => updatePage(page);

    const handleBack = () => updatePage(currentPage - 1);

    const handleFirst = () => updatePage(1);

    const handleGo = () => updatePage(currentPage + 1);

    const handleLast = () => updatePage(totalPages/4);

    const updateRangePages = () => {
        const pages = [];

        const lastPage = Math.trunc(totalPages/4);

        const pageInitial = (rangePages[rangePages.length - 1] < currentPage)
            ? currentPage - 4
            : currentPage;
        
        if (lastPage < 5 ) {

            for(let i=0; i < lastPage; i++) pages.push(Math.trunc(pageInitial + i));
        } else {
            for(let i=0; i < 5; i++) pages.push(Math.trunc(pageInitial + i));
        }

        setRangePages(pages)            
    }

    const handleChangePagination = () => {
        setShowBack(currentPage > 1);
        setShowFirst(currentPage > 1);
        setShowGo(currentPage < totalPages);
        setShowLast(currentPage < (totalPages -1));


        if (!rangePages.includes(currentPage)) {
            updateRangePages();
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