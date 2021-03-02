import React from 'react';
import { IToolbarProps } from './types';

import logo from '../../assets/logo.png'


import {
    ContainerToolbar,
    Logo,
    GridUser,
    User,
    TextToolbar,
    Avatar,
    GridResponsiveText
} from './styles';

const Toolbar: React.FC<IToolbarProps> = ({ user}) => (
    <ContainerToolbar>
        <Logo src={logo}/>
        <GridUser>
            <GridResponsiveText>
                <User>{user}</User>
                <TextToolbar>Teste de Front-end</TextToolbar>
            </GridResponsiveText>
            <Avatar /> 
        </GridUser>
    </ContainerToolbar>
)

export default Toolbar;