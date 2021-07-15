import React from 'react';
import styled from 'styled-components';

import MenuSvg from './svg_menu_component';
import {MenuIconEffects} from '../effects/icon_menu_effects';

const IconMenuNavigate = () => {

    const currentTextColor = '#403d0c';

    return (
        <>
            <Icon>
                <MenuSvg fill={currentTextColor}/>
            </Icon>
        </>
    )
}

/* CSS */

const Icon = styled(MenuIconEffects)`
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
`;

export default IconMenuNavigate;
