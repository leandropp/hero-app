import React from 'react';
import { IToolbarProps } from './types';

import logo from '../../assets/logo.png'


import {
    ContainerToolbar,
    Logo,
    GridUser,
    User,
    TextToolbar,
    Avatar
} from './styles';

const Toolbar: React.FC<IToolbarProps> = ({ user}) => (
    <ContainerToolbar>
        {/* <Logo src="../../../assets/logo.png" /> */}
        <Logo src={logo}/>
        <GridUser>
            <User>{user}</User>
            <TextToolbar>Teste de Front-end</TextToolbar>
            <Avatar /> 
        </GridUser>
    </ContainerToolbar>
)

export default Toolbar;