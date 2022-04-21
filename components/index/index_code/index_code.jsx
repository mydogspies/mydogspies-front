import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useInView} from "react-intersection-observer";
import Scroll from 'react-scroll';

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import DogGreenSvg from "../../logos/dog_green";
import useDimensions from "react-cool-dimensions";

const ScrollWrapper = Scroll.Element;

const IndexCode = () => {

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
        return roundToTwo(mapRange((1 / width) * 1000, 1.6, 10, 1, 0));
    };

    /* The following code is used with the icon color logic. */
    const dispatch = useDispatch();
    const [ref, inView] = useInView({
        threshold: .5
    });
    const css = {
        icon_color: backgroundColors.iconColorCode,
        shapeColors: {
            ccColor: shapeColors.shapesColorCode
        }
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <ScrollWrapper name="code">
            <ContainerCode ref={ref} className="index index-code" id="index-code">

                <CodeLeft ref={observe}>
                    <TempCode scaleFactor={getScaleFactor()}>
                        <TempCodeText>
                            <h1 className="header">Software development</h1>
                            <p>This area is still in development. Meanwhile feel free to visit my <a href="https://github.com/mydogspies" target="_blank">Github</a>.</p>
                            <p>Upcoming content here will be video and blogs relating to programming, devops and things IT in general. v0.1a</p>

                        </TempCodeText>
                        <DogGreenLogo>
                            <DogGreenSvg />
                        </DogGreenLogo>
                    </TempCode>

                </CodeLeft>

                <CodeRight shapeColor={css.shapeColors.ccColor}>

                </CodeRight>

            </ContainerCode>
        </ScrollWrapper>
    )

}

export default IndexCode;

/* FUNCS */
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

/* CSS STYLES BELOW */

const ContainerCode = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  height: 100vh;
`;

/* LEFT CONTENT */
const CodeLeft = styled.div`
  position: relative;
  grid-column-start: 2;
  background-color: white;
`;

// TODO the below styles are TEMP ONLY; remove any TAG-related formatting from here asap
const TempCode = styled.div`
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.scaleFactor});
  text-align: center;
  
  p {
    padding: 0 0 10px 0;
  }
  h1 {
    font-size: 55px;
    padding: 0 0 15px 0;
  }
`;

const TempCodeText = styled.div`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

const DogGreenLogo = styled.div`
  display: block;
  width: 100px;
  margin: 0 auto;
  padding: 40px 0 0 0; 
`;

/* RIGHT CONTENT */
const CodeRight = styled.div`
  grid-column-start: 3;
  background-color: ${props => props.shapeColor};
`;

