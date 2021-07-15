import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';

import AboutSvg from './svg_about_component';
import {MenuIconEffects} from '../effects/icon_menu_effects';

const IconAboutNavigate = () => {

    const store = useSelector(state => state);
    const currentIconColor = store.styles.currentIconColor;

    return (
        <>
            <Icon>
                <AboutSvg fill={currentIconColor}/>
            </Icon>
        </>
    )
}

/* CSS */
const Icon = styled(MenuIconEffects)`
  width: 40px;
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

export default IconAboutNavigate;
