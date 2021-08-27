import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';

import MenuSvg from './icon_menu_svg';
import {MenuIconEffects} from '../effects/icon_menu_effects';
import shapeColors from "../../../styles/shape_colors.module.scss";

const IconMenuNavigate = ({fillOverride}) => {

    const store = useSelector(state => state);

    // get css background colors
    //
    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual,
            cpColor: shapeColors.shapesColorProject
        }
    }

    let currentIconColor = store.styles.currentIconColor;
    if (fillOverride) {currentIconColor = css.shapeColors.cpColor}

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
