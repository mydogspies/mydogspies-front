import {useSelector} from "react-redux";
import styled from 'styled-components';

import AboutSvg from './icon_about_svg';
import {MenuIconEffects} from '../effects/icon_menu_effects';
import shapeColors from "../../../styles/shape_colors.module.scss";

const IconAboutNavigate = ({fillOverride}) => {

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
    if (fillOverride) {currentIconColor = css.shapeColors.ccColor}

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
  z-index: 12;
  width: 40px;
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

export default IconAboutNavigate;
