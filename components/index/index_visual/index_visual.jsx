import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import Scroll from 'react-scroll';

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import DogPurpleSvg from "../../logos/dog_purple";
import useDimensions from "react-cool-dimensions";

const ScrollWrapper  = Scroll.Element;

const IndexVisual = () => {

    /* The following scaling code is using https://github.com/wellyshen/react-cool-dimensions
    in order to find out the size of the about overlay window. This hook uses ResizeObserver
    to measure the size of the AboutOverlayBase div. We then run it through getScaleFactor, do some math,
    and plug it into the styled component via AboutOverlayContainer.
     */
    const { observe, unobserve, width, height, entry } = useDimensions({
        onResize: ({ observe, unobserve, width, height, entry }) => {
            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });


    const getScaleFactor = () => {
        /* Do not touch low2 & high2 or it will break the scaling - use low1 and high1 to tune the element to fit */
        return roundToTwo(mapRange((1/width)*1000, 1.6, 10, 1, 0));
    };

    /* The following code is used with the icon color logic. */
    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .7
    });
    const css = {
        icon_color: backgroundColors.iconColorVisual,
        shapeColors: {
            cvColor: shapeColors.shapesColorVisual
        }
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <ScrollWrapper name="visual">
            <ContainerVisual ref={ref} className="index index-code" id="index-code">

                <VisualLeft shapeColor={css.shapeColors.cvColor}>

                </VisualLeft>

                <VisualRight ref={observe}>
                    <TempVisual scaleFactor={getScaleFactor()}>
                        <TempVisualText>
                            <h1>VISUAL DESIGN</h1>
                            <p>This area is still in development. Some 3D stuff you can already find on my <a href="https://www.artstation.com/mydogspies" target="_blank">Artstation profile</a>.</p>
                            <p>A lot more projects and a visual design blog is on its way!</p>
                        </TempVisualText>
                        <DogPurpleLogo>
                            <DogPurpleSvg />
                        </DogPurpleLogo>
                    </TempVisual>

                </VisualRight>

            </ContainerVisual>
        </ScrollWrapper>

    )

}

export default IndexVisual;

/* FUNCS */
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

/* CSS STYLES */
const ContainerVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  height: 100vh;
`;

/* LEFT CONTENT */
const VisualLeft = styled.div`
  grid-column-start: 2;
  background-color: ${props => props.shapeColor};
`;

/* RIGHT CONTENT */
const VisualRight = styled.div`
  position: relative;
  grid-column-start: 3;
  background-color: white;
`;

// TODO the below styles are TEMP ONLY; remove any TAG-related formatting from here asap
const TempVisual = styled.div`
  position: relative;
  width: 75%;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.scaleFactor});
  text-align: center;
  
  p {
    padding: 0 0 10px 0;
  }
  h1 {
    font-size: 55px;
    padding: 0 0 15px 0;
    line-height: 1em;
  }
`;

const TempVisualText = styled.div`
  display: block;
  margin: 0 auto;
`;

const DogPurpleLogo = styled.div`
  display: block;
  width: 100px;
  margin: 0 auto;
  padding: 40px 0 0 0;
`;
