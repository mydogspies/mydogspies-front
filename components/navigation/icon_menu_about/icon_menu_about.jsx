import React from 'react';
import styled from 'styled-components';

import AboutSvg from './svg_about_component';
import {MenuIconEffects} from '../effects/icon_menu_effects';

const IconAboutNavigate = () => {

    const currentTextColor = '#403d0c';

    return (
        <>
            <Icon>
                <AboutSvg fill={currentTextColor}/>
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
