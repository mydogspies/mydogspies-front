import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useInView} from "react-intersection-observer";

const Scroll   = require('react-scroll');
const ScrollWrapper  = Scroll.Element;

import {setCurrentIconColor} from "../../../redux/styles/styles.action";
import backgroundColors from "../../../styles/icon_colors.module.scss";
import shapeColors from '../../../styles/shape_colors.module.scss';

import DogGreenSvg from "../../logos/dog_green";

const IndexCode = () => {

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

                <CodeLeft>
                    <TempCodeTextBox>
                        <h1>CODING</h1>
                        <p>This area is still in development. Meanwhile feel free to visit my <a href="https://github.com/mydogspies" target="_blank">Github</a>.</p>
                        <p>Upcoming content here will be video and blogs relating to programming, devops and things IT in general.</p>
                    </TempCodeTextBox>
                    <DogGreenLogo>
                        <DogGreenSvg />
                    </DogGreenLogo>
                </CodeLeft>


                <CodeRight shapeColor={css.shapeColors.ccColor}>

                </CodeRight>

            </ContainerCode>
        </ScrollWrapper>
    )

}

export default IndexCode;

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
const TempCodeTextBox = styled.div`
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

const DogGreenLogo = styled.div`
  position: relative;
  width: 100px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/* RIGHT CONTENT */
const CodeRight = styled.div`
  grid-column-start: 3;
  background-color: ${props => props.shapeColor};
`;

