import styled from "styled-components";
import shapeColors from "../../styles/shape_colors.module.scss";

const AboutOverlay = ({addClass}) => {

    // get css background colors
    //
    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual,
            cpColor: shapeColors.shapesColorProject
        }
    }

    return (
        <AboutOverlayContainer backgroundColor={css.shapeColors.ccColor} className={addClass}>
            <h1><a href="#">ABOUT</a></h1>
        </AboutOverlayContainer>
    )
}

export default AboutOverlay;

const AboutOverlayContainer = styled.div`
  opacity: 0.97;
  width: 85vw;
  height: 85vh;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor}
`;
