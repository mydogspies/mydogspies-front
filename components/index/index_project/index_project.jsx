import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import Scroll from 'react-scroll';
import useDimensions from "react-cool-dimensions";

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import DogBlueSvg from "../../logos/dog_blue";


const ScrollWrapper = Scroll.Element;

const IndexProject = () => {

    /* The following scaling code is using https://github.com/wellyshen/react-cool-dimensions
    in order to find out the size of the about overlay window. This hook uses ResizeObserver
    to measure the size of the AboutOverlayBase div. We then run it through getScaleFactor, do some math,
    and plug it into the styled component via AboutOverlayContainer.
     */
    const {observe, unobserve, width, height, entry} = useDimensions({
        onResize: ({observe, unobserve, width, height, entry}) => {
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
        threshold: .7
    });
    const css = {
        icon_color: backgroundColors.iconColorProject,
        shapeColors: {
            cpColor: shapeColors.shapesColorProject
        }
    }

    useEffect(() => {
        if (inView) {
            dispatch(setCurrentIconColor(css.icon_color));
        }
    }, [dispatch, inView]);

    return (
        <ScrollWrapper name="project">
            <ContainerProject ref={ref} className="index index-project" id="index-project">

                <ProjectLeft ref={observe}>
                    <TempProject scaleFactor={getScaleFactor()}>
                        <TempProjectText>
                            <h1 className="header">Project Management</h1>
                            <p>This area is still in development.</p>
                            <p>Here will soon come a blog around the PM role and also some case studies.</p>
                        </TempProjectText>
                        <DogBlueLogo>
                            <DogBlueSvg/>
                        </DogBlueLogo>
                    </TempProject>
                </ProjectLeft>

                <ProjectRight shapeColor={css.shapeColors.cpColor}>

                </ProjectRight>

            </ContainerProject>
        </ScrollWrapper>

    )

}

export default IndexProject;

/* FUNCS */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

/* CSS STYLES */
const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  height: 100vh;
`;

/* CONTENT LEFT */
const ProjectLeft = styled.div`
  grid-column-start: 2;
  background-color: white;
`;

// TODO the below styles are TEMP ONLY; remove any TAG-related formatting from here asap
const TempProject = styled.div`
  position: relative;
  width: 75%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => props.scaleFactor});
  text-align: center;

  p {
    padding: 0 0 10px 0;
  }

  h1 {
    font-size: 55px;
    line-height: 1.1em;
    padding: 0 0 15px 0;
  }
`;

const TempProjectText = styled.div`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

const DogBlueLogo = styled.div`
  display: block;
  width: 100px;
  margin: 0 auto;
`;


/* CONTENT RIGHT */
const ProjectRight = styled.div`
  grid-column-start: 3;
  background-color: ${props => props.shapeColor};
\`  ;
`;
