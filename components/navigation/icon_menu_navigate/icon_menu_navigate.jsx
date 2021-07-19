import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';

import MenuSvg from './svg_menu_component';
import {MenuIconEffects} from '../effects/icon_menu_effects';

const IconMenuNavigate = () => {

    const store = useSelector(state => state);
    const currentIconColor = store.styles.currentIconColor;

    return (
        <>
            <Icon>
                <MenuSvg fill={currentIconColor}/>
            </Icon>
        </>
    )
}

/* CSS */

const Icon = styled(MenuIconEffects)`
  z-index: 2;
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
`;

export default IconMenuNavigate;
