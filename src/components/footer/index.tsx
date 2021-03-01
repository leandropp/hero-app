import React from 'react';
import Pagination from './pagination/intex';

import { ContainerFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <Pagination />
    </ContainerFooter>
  );
}

export default Footer;