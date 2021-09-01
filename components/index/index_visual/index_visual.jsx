import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";

const Scroll   = require('react-scroll');
const ScrollWrapper  = Scroll.Element;

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import DogPurpleSvg from "../../logos/dog_purple";

const IndexVisual = () => {

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

                <VisualRight>
                    <TempVisualTextBox>
                        <h1>VISUAL DESIGN</h1>
                        <p>This area is still in development. Some 3D stuff you can already find on my <a href="https://www.artstation.com/mydogspies" target="_blank">Artstation profile</a>.</p>
                        <p>A lot more projects and a visual design blog is on its way!</p>
                    </TempVisualTextBox>
                    <DogPurpleLogo>
                        <DogPurpleSvg />
                    </DogPurpleLogo>
                </VisualRight>

            </ContainerVisual>
        </ScrollWrapper>

    )

}

export default IndexVisual;

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
const TempVisualTextBox = styled.div`
  position: relative;
  width: 75%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p {
    padding: 0 0 10px 0;
  }
  h1 {
    font-size: 55px;
    padding: 0 0 15px 0;
  }
`;

const DogPurpleLogo = styled.div`
  position: relative;
  width: 100px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
