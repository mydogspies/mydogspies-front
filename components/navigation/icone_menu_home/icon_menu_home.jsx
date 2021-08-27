import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

import HomeSvg from './svg_home_component';
import {MenuIconEffects} from '../effects/icon_menu_effects';

const IconHomeNavigate = () => {

    const store = useSelector(state => state);
    const currentIconColor = store.styles.currentIconColor;

    return (
        <>
            <Icon>
                <HomeSvg fill={currentIconColor} />
            </Icon>
        </>
    )
}

/* CSS */
const Icon = styled(MenuIconEffects)`
  z-index: 10;
  width: 40px;
  position: fixed;
  top: 20px;
  left: 20px;
`;

export default IconHomeNavigate;
