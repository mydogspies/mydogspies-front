import React from 'react';
import styled from 'styled-components';

import HomeSvg from './svg_home_component';
import {MenuIconEffects} from '../effects/icon_menu_effects';

const IconHomeNavigate = () => {

    const currentTextColor = '#403d0c';

    return (
        <>
            <Icon>
                <HomeSvg fill={currentTextColor}/>
            </Icon>
        </>
    )
}

/* CSS */
const Icon = styled(MenuIconEffects)`
  width: 40px;
  position: fixed;
  top: 20px;
  left: 20px;
`;

export default IconHomeNavigate;
