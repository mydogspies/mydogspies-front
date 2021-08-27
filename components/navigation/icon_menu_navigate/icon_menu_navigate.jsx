import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';

import MenuSvg from './icon_menu_svg';
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

export default IconMenuNavigate;

/* CSS */
const Icon = styled(MenuIconEffects)`
  z-index: 11;
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
`;
